<?php
if(isset($_POST['email'])) {

// Debes editar las próximas dos líneas de código de acuerdo con tus preferencias
$email_to = "sergiomataherrero@gmail.com";
$email_subject = "prueba";

// Aquí se deberían validar los datos ingresados por el usuario
if(!isset($_POST['first_name']) ||
!isset($_POST['email']) ||
!isset($_POST['telephone']) ||
!isset($_POST['comments'])) {

echo "<b>Lo siento, ha ocurrido un error y el formulario no se ha enviado. </b><br />";
echo "Por favor, vuelve a intentarlo.<br />";
die();
}

$email_message = "Detalles del formulario de contacto:\n\n";
$email_message .= "Nombre: " . $_POST['first_name'] . "\n";
$email_message .= "E-mail: " . $_POST['email'] . "\n";
$email_message .= "Teléfono: " . $_POST['telephone'] . "\n";
$email_message .= "Comentarios: " . $_POST['comments'] . "\n\n";

// Ahora se envía el e-mail usando la función mail() de PHP
$headers = 'From: '/*.$email_from.*/. "\r\n".
'Reply-To: '/*.$email_from.*/."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);

echo "¡Muchas gracias! (っ＾▿＾)💨";
}
?>