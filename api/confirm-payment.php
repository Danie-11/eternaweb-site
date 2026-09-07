<?php
require __DIR__ . '/config.php';
header('Content-Type: application/json; charset=utf-8');
$sessionId=trim((string)($_GET['session_id']??''));
if(!$sessionId||!preg_match('/^cs_[A-Za-z0-9_]+$/',$sessionId)){http_response_code(400);echo json_encode(['paid'=>false,'error'=>'Référence de paiement invalide.']);exit;}
$ch=curl_init('https://api.stripe.com/v1/checkout/sessions/'.rawurlencode($sessionId));
curl_setopt_array($ch,[CURLOPT_RETURNTRANSFER=>true,CURLOPT_HTTPHEADER=>['Authorization: Bearer '.STRIPE_SECRET_KEY],CURLOPT_TIMEOUT=>20]);
$response=curl_exec($ch);$code=(int)curl_getinfo($ch,CURLINFO_HTTP_CODE);curl_close($ch);
if($response===false||$code<200||$code>=300){http_response_code(502);echo json_encode(['paid'=>false,'error'=>'Vérification momentanément indisponible.']);exit;}
$sessionData=json_decode($response,true);if(!is_array($sessionData)||($sessionData['payment_status']??'')!=='paid'){echo json_encode(['paid'=>false,'error'=>'Paiement non confirmé.']);exit;}
$orderId=$sessionData['metadata']['order_id']??'';
if($orderId&&preg_match('/^[a-f0-9]{24}$/',$orderId)){
 $file=__DIR__.'/../data/orders/'.$orderId.'.json';
 if(is_file($file)){$order=json_decode(file_get_contents($file),true);if(is_array($order)){ $order['paid']=true;$order['paid_at']=$order['paid_at']??gmdate('c');$order['stripe_payment_intent']=$sessionData['payment_intent']??null;file_put_contents($file,json_encode($order,JSON_PRETTY_PRINT|JSON_UNESCAPED_UNICODE),LOCK_EX); }}
}
echo json_encode(['paid'=>true]);
