<?php
require __DIR__ . '/config.php';

$payload = file_get_contents('php://input');
$sig = $_SERVER['HTTP_STRIPE_SIGNATURE'] ?? '';

function valid_sig($payload, $header, $secret) {
    $ts = null;
    $sigs = [];
    foreach (explode(',', $header) as $part) {
        [$k, $v] = array_pad(explode('=', $part, 2), 2, null);
        if ($k === 't') $ts = $v;
        if ($k === 'v1') $sigs[] = $v;
    }
    if (!$ts || !$sigs || abs(time() - (int)$ts) > 300) return false;
    $signed_content = "$ts.$payload";
    foreach ($sigs as $signature) {
        $bin = hex2bin($signature);
        if ($bin !== false && hash_equals(hash_hmac('sha256', $signed_content, $secret, true), $bin)) return true;
    }
    return false;
}

function smtp_read($fp) {
    $data = '';
    while (($line = fgets($fp, 515)) !== false) {
        $data .= $line;
        if (strlen($line) >= 4 && $line[3] === ' ') break;
    }
    return $data;
}

function smtp_expect($fp, $codes) {
    $response = smtp_read($fp);
    $code = (int)substr($response, 0, 3);
    return in_array($code, (array)$codes, true);
}

function smtp_command($fp, $command, $codes) {
    fwrite($fp, $command . "\r\n");
    return smtp_expect($fp, $codes);
}

function smtp_send($to, $subject, $body, $replyTo = '', $attachment = null) {
    if (!defined('OVH_SMTP_HOST') || !defined('OVH_SMTP_PORT') || !defined('OVH_SMTP_USER') || !defined('OVH_SMTP_PASSWORD')) return false;
    if (!filter_var($to, FILTER_VALIDATE_EMAIL)) return false;
    if ($replyTo !== '' && !filter_var($replyTo, FILTER_VALIDATE_EMAIL)) $replyTo = '';

    $errno = 0;
    $errstr = '';
    $fp = @stream_socket_client(
        'ssl://' . OVH_SMTP_HOST . ':' . OVH_SMTP_PORT,
        $errno,
        $errstr,
        20,
        STREAM_CLIENT_CONNECT
    );
    if (!$fp) return false;
    stream_set_timeout($fp, 20);

    if (!smtp_expect($fp, [220])) { fclose($fp); return false; }
    if (!smtp_command($fp, 'EHLO eternaweb.fr', [250])) { fclose($fp); return false; }
    if (!smtp_command($fp, 'AUTH LOGIN', [334])) { fclose($fp); return false; }
    if (!smtp_command($fp, base64_encode(OVH_SMTP_USER), [334])) { fclose($fp); return false; }
    if (!smtp_command($fp, base64_encode(OVH_SMTP_PASSWORD), [235])) { fclose($fp); return false; }
    if (!smtp_command($fp, 'MAIL FROM:<' . OVH_SMTP_USER . '>', [250])) { fclose($fp); return false; }
    if (!smtp_command($fp, 'RCPT TO:<' . $to . '>', [250, 251])) { fclose($fp); return false; }
    if (!smtp_command($fp, 'DATA', [354])) { fclose($fp); return false; }

    $encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
    $headers = [
        'Date: ' . gmdate('D, d M Y H:i:s') . ' +0000',
        'From: EternaWeb <' . OVH_SMTP_USER . '>',
        'To: ' . $to,
        'Subject: ' . $encodedSubject,
        'MIME-Version: 1.0'
    ];
    if ($replyTo !== '') $headers[] = 'Reply-To: ' . $replyTo;

    if ($attachment && !empty($attachment['path']) && is_file($attachment['path'])) {
        $boundary = '=_EternaWeb_' . bin2hex(random_bytes(8));
        $headers[] = 'Content-Type: multipart/mixed; boundary="' . $boundary . '"';
        $message = implode("\r\n", $headers) . "\r\n\r\n";
        $message .= '--' . $boundary . "\r\n";
        $message .= "Content-Type: text/plain; charset=UTF-8\r\n";
        $message .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
        $message .= $body . "\r\n\r\n";
        $name = $attachment['name'] ?? basename($attachment['path']);
        $safeName = addslashes($name);
        $message .= '--' . $boundary . "\r\n";
        $message .= 'Content-Type: application/octet-stream; name="' . $safeName . "\"\r\n";
        $message .= "Content-Transfer-Encoding: base64\r\n";
        $message .= 'Content-Disposition: attachment; filename="' . $safeName . "\"\r\n\r\n";
        $message .= chunk_split(base64_encode(file_get_contents($attachment['path']))) . "\r\n";
        $message .= '--' . $boundary . "--\r\n";
    } else {
        $headers[] = 'Content-Type: text/plain; charset=UTF-8';
        $headers[] = 'Content-Transfer-Encoding: 8bit';
        $message = implode("\r\n", $headers) . "\r\n\r\n" . $body . "\r\n";
    }

    // SMTP DATA: une ligne commençant par un point doit être échappée.
    $message = preg_replace('/(^|\r\n)\./', '$1..', $message);
    fwrite($fp, $message . ".\r\n");
    if (!smtp_expect($fp, [250])) { fclose($fp); return false; }
    smtp_command($fp, 'QUIT', [221, 250]);
    fclose($fp);
    return true;
}

if (!valid_sig($payload, $sig, STRIPE_WEBHOOK_SECRET)) {
    http_response_code(400);
    echo 'Signature invalide';
    exit;
}

$event = json_decode($payload, true);
$type = $event['type'] ?? '';
if (!in_array($type, ['checkout.session.completed', 'checkout.session.async_payment_succeeded'], true)) {
    http_response_code(200);
    echo 'OK';
    exit;
}

$session = $event['data']['object'] ?? [];
if (($session['payment_status'] ?? '') !== 'paid') {
    http_response_code(200);
    echo 'Paiement non confirmé';
    exit;
}

$orderId = $session['metadata']['order_id'] ?? '';
if (!$orderId || !preg_match('/^[a-f0-9]{24}$/', $orderId)) {
    http_response_code(400);
    echo 'Commande introuvable';
    exit;
}

$orderFile = __DIR__ . '/../data/orders/' . $orderId . '.json';
if (!is_file($orderFile)) {
    http_response_code(404);
    echo 'Commande introuvable';
    exit;
}

$order = json_decode(file_get_contents($orderFile), true);
if (!is_array($order)) {
    http_response_code(500);
    echo 'Commande invalide';
    exit;
}

$order['paid'] = true;
$order['paid_at'] = $order['paid_at'] ?? gmdate('c');
$order['stripe_payment_intent'] = $session['payment_intent'] ?? null;

$toInternal = 'contact@eternaweb.fr';
$customer = $order['email'] ?? '';
$subjectInternal = 'Nouvelle commande EternaWeb — ' . ($order['plan_label'] ?? 'Commande');

$internalBody = "PAIEMENT CONFIRMÉ — EternaWeb\n\n";
$internalBody .= "Commande : " . ($order['plan_label'] ?? '') . "\n";
$internalBody .= "Montant : " . number_format(($order['amount'] ?? 0) / 100, 2, ',', ' ') . " €\n";
$internalBody .= "Client : " . ($order['nom'] ?? '') . "\n";
$internalBody .= "Email : $customer\n";
$internalBody .= "Type : " . ($order['type'] ?? '') . "\n";
$internalBody .= "Couleurs : " . ($order['couleurs'] ?? '') . "\n";
$internalBody .= "Style : " . ($order['style'] ?? '') . "\n";
$internalBody .= "Options : " . implode(', ', (array)($order['integrations'] ?? [])) . "\n";
$internalBody .= "Lien Drive : " . ($order['drive'] ?? '') . "\n\n";
$internalBody .= "Demandes :\n" . ($order['contenu'] ?? '') . "\n\n";
$internalBody .= "Identifiant commande : $orderId\n";

$attachment = null;
if (!empty($order['file']['path']) && is_file($order['file']['path'])) {
    $attachment = [
        'path' => $order['file']['path'],
        'name' => $order['file']['name'] ?? basename($order['file']['path'])
    ];
}

// 1) EternaWeb reçoit la commande complète avec la pièce jointe.
if (empty($order['internal_sent'])) {
    $order['internal_sent'] = smtp_send($toInternal, $subjectInternal, $internalBody, $customer, $attachment);
    $order['internal_sent_at'] = $order['internal_sent'] ? gmdate('c') : null;
}

// 2) Le client reçoit automatiquement une confirmation après paiement.
if ($customer && empty($order['customer_sent'])) {
    $customerBody = "Bonjour " . ($order['nom'] ?: '') . ",\n\n";
    $customerBody .= "Votre paiement EternaWeb a bien été confirmé.\n\n";
    $customerBody .= "Commande : " . ($order['plan_label'] ?? 'Commande EternaWeb') . "\n";
    $customerBody .= "Montant : " . number_format(($order['amount'] ?? 0) / 100, 2, ',', ' ') . " €\n\n";
    $customerBody .= "Votre dossier a bien été transmis à EternaWeb. Vous recevrez votre document ou votre lien par e-mail sous 24 à 48 h.\n\n";
    $customerBody .= "Merci pour votre confiance,\nEternaWeb\ncontact@eternaweb.fr\nhttps://eternaweb.fr";
    $order['customer_sent'] = smtp_send($customer, 'EternaWeb — Paiement confirmé', $customerBody, $toInternal);
    $order['customer_sent_at'] = $order['customer_sent'] ? gmdate('c') : null;
}

$order['sent'] = !empty($order['internal_sent']) && !empty($order['customer_sent']);
$order['sent_at'] = $order['sent'] ? ($order['sent_at'] ?? gmdate('c')) : null;
file_put_contents($orderFile, json_encode($order, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES), LOCK_EX);

http_response_code(($order['internal_sent'] || $order['customer_sent']) ? 200 : 500);
echo ($order['sent'] ? 'OK' : 'Commande traitée, envoi incomplet');
