<?php
require __DIR__ . '/config.php';
$payload=file_get_contents('php://input');$sig=$_SERVER['HTTP_STRIPE_SIGNATURE']??'';
function valid_sig($payload,$header,$secret){$ts=null;$sigs=[];foreach(explode(',',$header) as $part){[$k,$v]=array_pad(explode('=',$part,2),2,null);if($k==='t')$ts=$v;if($k==='v1')$sigs[]=$v;}if(!$ts||!$sigs)return false;$signed_content="$ts.$payload";foreach($sigs as $sig){if(hash_equals(hash_hmac('sha256',$signed_content,$secret),hex2bin($sig)))return true;}return false;}
if(!valid_sig($payload,$sig,STRIPE_WEBHOOK_SECRET)){http_response_code(400);echo 'Signature invalide';exit;}
$event=json_decode($payload,true);$type=$event['type']??'';
if(!in_array($type,['checkout.session.completed','checkout.session.async_payment_succeeded'],true)){http_response_code(200);echo 'OK';exit;}
$session=$event['data']['object']??[];if(($session['payment_status']??'')!=='paid'){http_response_code(200);echo 'Paiement non confirmé';exit;}
$orderId=$session['metadata']['order_id']??'';if(!$orderId||!preg_match('/^[a-f0-9]{24}$/',$orderId)){http_response_code(400);echo 'Commande introuvable';exit;}
$orderFile=__DIR__.'/../data/orders/'.$orderId.'.json';if(!is_file($orderFile)){http_response_code(404);echo 'Commande introuvable';exit;}
$order=json_decode(file_get_contents($orderFile),true);if(!is_array($order)){http_response_code(500);echo 'Commande invalide';exit;}
if(!empty($order['sent'])){http_response_code(200);echo 'Déjà traitée';exit;}
$order['paid']=true;$order['paid_at']=gmdate('c');$order['stripe_payment_intent']=$session['payment_intent']??null;
$boundary='=_EternaWeb_'.bin2hex(random_bytes(12));$to='contact@eternaweb.fr';$subject='Nouvelle commande EternaWeb — '.($order['plan_label']??'Commande');$customer=$order['email']??'';
$headers=['From: EternaWeb <contact@eternaweb.fr>','Reply-To: '.$customer,'MIME-Version: 1.0','Content-Type: multipart/mixed; boundary="'.$boundary.'"'];
$body="--$boundary\r\nContent-Type: text/plain; charset=UTF-8\r\n\r\n";
$body.="PAIEMENT CONFIRMÉ — EternaWeb\n\nCommande : ".($order['plan_label']??'')."\nMontant : ".number_format(($order['amount']??0)/100,2,',',' ')." €\nClient : ".($order['nom']??'')."\nEmail : $customer\nType : ".($order['type']??'')."\nCouleurs : ".($order['couleurs']??'')."\nStyle : ".($order['style']??'')."\nOptions : ".implode(', ',(array)($order['integrations']??[]))."\nLien Drive : ".($order['drive']??'')."\n\nDemandes :\n".($order['contenu']??'')."\n\nIdentifiant commande : $orderId\n";
if(!empty($order['file']['path'])&&is_file($order['file']['path'])){$path=$order['file']['path'];$name=$order['file']['name']??basename($path);$body.="--$boundary\r\nContent-Type: application/octet-stream; name=\"".addslashes($name)."\"\r\nContent-Transfer-Encoding: base64\r\nContent-Disposition: attachment; filename=\"".addslashes($name)."\"\r\n\r\n".chunk_split(base64_encode(file_get_contents($path)))."\r\n";}
$body.="--$boundary--\r\n";$sent=mail($to,$subject,$body,implode("\r\n",$headers));$order['sent']=$sent;$order['sent_at']=$sent?gmdate('c'):null;file_put_contents($orderFile,json_encode($order,JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES));
http_response_code($sent?200:500);echo $sent?'OK':'Envoi email impossible';
