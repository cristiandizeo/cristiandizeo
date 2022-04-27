<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->isSMTP();
    $mail->Host = 'smtp.mailtrap.io';
    $mail->SMTPAuth = true;
    $mail->Port = 2525;
    $mail->Username = '5faeaa31a7ab36';
    $mail->Password = 'b169c323834b2a';                                //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('from@example.com', 'Mailer');
    $mail->addAddress('joe@example.net', 'Joe User');

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Mensaje desde la web';
    $contenido = '<html>';
    $contenido .= "<p><strong>Nombre:</strong> ". $name ."</p>";
    $contenido .= "<p><strong>Email:</strong> ". $email ."</p>";
    $contenido .= "<p><strong>Mensaje:</strong> ". $message ."</p>";
    $contenido .= "</html>";

    $mail->Body = $contenido;
    $mail->send();
} catch (Exception $e) {
    echo '<script>
    alert("El mensaje no pudo ser enviado :( Error: ' . $mail->ErrorInfo . '")
    </script>';
}
