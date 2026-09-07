<?php
require __DIR__ . '/config.php';
header('Content-Type: application/json; charset=utf-8');
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); echo json_encode(['error'=>'Méthode non autorisée.']); exit; }
$prices=['starter'=>1499,'boost'=>2999,'premium'=>5999,'letter'=>799];
$labels=['starter'=>'Pack Starter','boost'=>'Pack Boost','premium'=>'Pack Premium','letter'=>'Lettre de motivation'];
$plan=strtolower(trim((string)($_POST['plan']??'')));
$email=trim((string)($_POST['email']??''));
$wantsLetter=!empty($_POST['letter']);
if(!isset($prices[$plan]) || !filter_var($email,FILTER_VALIDATE_EMAIL)){http_response_code(400);echo json_encode(['error'=>'Commande invalide. Vérifiez la formule et votre e-mail.']);exit;}
if($plan==='letter')$wantsLetter=false;
$amount=$prices[$plan]+($wantsLetter?$prices['letter']:0);
$description=$wantsLetter?$labels[$plan].' + '.$labels['letter']:$labels[$plan];
$orderId=bin2hex(random_bytes(12));
$orderDir=__DIR__.'/../data/orders';
if(!is_dir($orderDir)&&!mkdir($orderDir,0755,true)){http_response_code(500);echo json_encode(['error'=>'Impossible de préparer la commande.']);exit;}
$fileMeta=null;
if(isset($_FILES['document'])&&$_FILES['document']['error']!==UPLOAD_ERR_NO_FILE){
 $file=$_FILES['document'];
 if($file['error']!==UPLOAD_ERR_OK||$file['size']>8*1024*1024){http_response_code(400);echo json_encode(['error'=>'Fichier invalide ou trop volumineux (8 Mo max).']);exit;}
 $ext=strtolower(pathinfo($file['name'],PATHINFO_EXTENSION));
 if(!in_array($ext,['pdf','doc','docx'],true)){http_response_code(400);echo json_encode(['error'=>'Format accepté : PDF, DOC ou DOCX.']);exit;}
 $stored=$orderDir.'/'.$orderId.'.'.$ext;
 if(!move_uploaded_file($file['tmp_name'],$stored)){http_response_code(500);echo json_encode(['error'=>'Impossible d’enregistrer votre fichier.']);exit;}
 $fileMeta=['path'=>$stored,'name'=>basename($file['name'])];
}
$order=['id'=>$orderId,'plan'=>$plan,'plan_label'=>$description,'amount'=>$amount,'email'=>$email,'nom'=>trim((string)($_POST['nom']??'')),'type'=>trim((string)($_POST['type']??'CV')),'couleurs'=>trim((string)($_POST['couleurs']??'')),'style'=>trim((string)($_POST['style']??'')),'integrations'=>isset($_POST['int'])?(array)$_POST['int']:[],'drive'=>trim((string)($_POST['drive']??'')),'contenu'=>trim((string)($_POST['contenu']??'')),'file'=>$fileMeta,'created_at'=>gmdate('c'),'paid'=>false,'sent'=>false];
file_put_contents($orderDir.'/'.$orderId.'.json',json_encode($order,JSON_PRETTY_PRINT|JSON_UNESCAPED_UNICODE),LOCK_EX);
$params=['mode'=>'payment','success_url'=>'https://eternaweb.fr/paiement-confirme.html?session_id={CHECKOUT_SESSION_ID}','cancel_url'=>'https://eternaweb.fr/cv.html#formules','customer_email'=>$email,'line_items[0][price_data][currency]'=>'eur','line_items[0][price_data][product_data][name]'=>$description,'line_items[0][price_data][unit_amount]'=>$amount,'line_items[0][quantity]'=>1,'metadata[order_id]'=>$orderId,'metadata[plan]'=>$plan,'metadata[letter]'=>$wantsLetter?'1':'0'];
$ch=curl_init('https://api.stripe.com/v1/checkout/sessions');
curl_setopt_array($ch,[CURLOPT_POST=>true,CURLOPT_POSTFIELDS=>http_build_query($params),CURLOPT_RETURNTRANSFER=>true,CURLOPT_HTTPHEADER=>['Authorization: Bearer '.STRIPE_SECRET_KEY,'Content-Type: application/x-www-form-urlencoded'],CURLOPT_TIMEOUT=>30]);
$response=curl_exec($ch);$code=(int)curl_getinfo($ch,CURLINFO_HTTP_CODE);curl_close($ch);
if($response===false||$code<200||$code>=300){@unlink($orderDir.'/'.$orderId.'.json');if($fileMeta)@unlink($fileMeta['path']);http_response_code(502);echo json_encode(['error'=>'Impossible de créer le paiement pour le moment.']);exit;}
$stripe=json_decode($response,true);
if(empty($stripe['url'])||empty($stripe['id'])){http_response_code(502);echo json_encode(['error'=>'Réponse de paiement invalide.']);exit;}
$order['stripe_session_id']=$stripe['id'];
file_put_contents($orderDir.'/'.$orderId.'.json',json_encode($order,JSON_PRETTY_PRINT|JSON_UNESCAPED_UNICODE),LOCK_EX);
echo json_encode(['url'=>$stripe['url']]);
