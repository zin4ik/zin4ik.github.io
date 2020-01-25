<?php
$recepiant = "zin4ik@i.ua";
$sitename = "my portfolio";

$name = trim($_POST['name']);
$phone = trim($_POST['phone']);
$email = trim($_POST['email']);
$text = trim($_POST['text']);
$message="Імя: $name,\n Телефон: $phone,\n Email: $email, \n $text";
$pageTitle="Заявка з сайта $sitename";

$headers  = "Content-type: text/html; charset=windows-1251 \r\n"; 
// $headers .= "From: От кого письмо <from@example.com>\r\n"; 
// $headers .= "Reply-To: reply-to@example.com\r\n"; 
echo "$name";
mail($recepiant,$sitename,$message,$headers);
?>