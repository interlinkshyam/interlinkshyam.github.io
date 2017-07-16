

<?php 
$name = $_POST['name'];
$ref = $_POST['ref'];
$add = $_POST['add'];
$email = $_POST['email'];

$req = $_POST['req'];
$locality = $_POST['locality'];
$price = $_POST['price'];
$bhk = $_POST['bhk'];
$phone = $_POST['phone'];
$furnished = $_POST['furnished'];
$purpose = $_POST['purpose'];
$message = $_POST['message'];
$hear = $_POST['hear'];





$subject='Via website';
$to = 'contact@interlinkshyam.com';
$message = 'Name: '.$name."\r\n".'Reference: '.$ref."\r\n".'Current Address: '.$add."\r\n".'Email: '.$email."\r\n".'Requirements: '.$req."\r\n".'Locality: '.$locality."\r\n".'Price: '.$price."\r\n".'Bhk: '.$bhk."\r\n".'Phone Number: '.$phone."\r\n".'Furnished: '.$furnished."\r\n".'Purpose: '.$purpose."\r\n".'Message: '.$message."\r\n".'How did you hear about us?: '.$hear."\r\n";
$headers = 'From: noreply@interlinkshyam.com' . "\r\n";
 
if (filter_var($email, FILTER_VALIDATE_EMAIL)) { // this line checks that we have a valid email address
mail($to, $subject, $message, $headers); //This method sends the mail.
echo '1'; // success message
}else{
echo '0';
}

?>