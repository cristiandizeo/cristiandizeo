<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function

use Dotenv\Dotenv;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->safeLoad();

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

if(!empty($name) && !empty($email) && !empty($message)){

//Instancia de PHPMailer pasando `true` para habilitar excepciones
$mail = new PHPMailer(true);

try {
    // Configuraciones del servidor
    $mail->isSMTP();
    $mail->Host = $_ENV['MAIL_HOST'];
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = $_ENV['MAIL_SECURE'];
    $mail->Port = $_ENV['MAIL_PORT'];
    $mail->Username = $_ENV['MAIL_USER'];
    $mail->Password = $_ENV['MAIL_PASSWORD'];
    
    //Recipients
    $mail->setFrom($email, $name);
    $mail->addAddress('dizeoc@gmail.com', 'Cristian Dizeo');

    // Contenido
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Mensaje desde la web';
    $contenido = '<html>';
    $contenido .= "<p><strong>Nombre:</strong> ". $name ."</p>";
    $contenido .= "<p><strong>Email:</strong> ". $email ."</p>";
    $contenido .= "<p><strong>Mensaje:</strong> ". $message ."</p>";
    $contenido .= "</html>";

    $mail->Body = $contenido;
    $mail->send();

    echo true;
} catch (Exception $e) {
    echo false;
}
}