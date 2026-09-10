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

function smtp_send($to, $subject, $body, $replyTo = '') {
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
        'From: EternaWeb <' . OVH_SMTP_USER . '>',
        'To: ' . $to,
        'Subject: ' . $encodedSubject,
        'MIME-Version: 1.0',
        'Content-Type: multipart/mixed; boundary="=_EternaWeb"'
    ];
    if ($replyTo !== '') $headers[] = 'Reply-To: ' . $replyTo;

    $message = implode("\r\n", $headers) . "\r\n\r\n" . $body;
    $message = preg_replace("/(\r\n|\n|\r)\.([\r\n])", '$1..$2', $message);
    fwrite($fp, $message . "\r\n.\r\n");
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
if (!empty($order['sent'])) {
    http_response_code(200);
    echo 'Déjà traitée';
    exit;
}

$order['paid'] = true;
$order['paid_at'] = gmdate('c');
$order['stripe_payment_intent'] = $session['payment_intent'] ?? null;

$boundary = '=_EternaWeb_' . bin2hex(random_bytes(12));
$to = 'contact@eternaweb.fr';
$subject = 'Nouvelle commande EternaWeb — ' . ($order['plan_label'] ?? 'Commande');
$customer = $order['email'] ?? '';

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: multipart/mixed; boundary="' . $boundary . '"'
];
$body = implode("\r\n", $headers) . "\r\n\r\n";
$body .= "--$boundary\r\nContent-Type: text/plain; charset=UTF-8\r\nContent-Transfer-Encoding: 8bit\r\n\r\n";
$body .= "PAIEMENT CONFIRMÉ — EternaWeb\n\nCommande : " . ($order['plan_label'] ?? '') . "\nMontant : " . number_format(($order['amount'] ?? 0) / 100, 2, ',', ' ') . " €\nClient : " . ($order['nom'] ?? '') . "\nEmail : $customer\nType : " . ($order['type'] ?? '') . "\nCouleurs : " . ($order['couleurs'] ?? '') . "\nStyle : " . ($order['style'] ?? '') . "\nOptions : " . implode(', ', (array)($order['integrations'] ?? [])) . "\nLien Drive : " . ($order['drive'] ?? '') . "\n\nDemandes :\n" . ($order['contenu'] ?? '') . "\n\nIdentifiant commande : $orderId\n";

if (!empty($order['file']['path']) && is_file($order['file']['path'])) {
    $path = $order['file']['path'];
    $name = $order['file']['name'] ?? basename($path);
    $body .= "--$boundary\r\nContent-Type: application/octet-stream; name=\"" . addslashes($name) . "\"\r\nContent-Transfer-Encoding: base64\r\nContent-Disposition: attachment; filename=\"" . addslashes($name) . "\"\r\n\r\n" . chunk_split(base64_encode(file_get_contents($path))) . "\r\n";
}
$body .= "--$boundary--\r\n";

$sent = smtp_send($to, $subject, $body, $customer);
$order['sent'] = $sent;
$order['sent_at'] = $sent ? gmdate('c') : null;
file_put_contents($orderFile, json_encode($order, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));

http_response_code($sent ? 200 : 500);
echo $sent ? 'OK' : 'Envoi SMTP impossible';
