<?php

  if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['first_name']) && isset($_POST['email']) && isset($_POST['comments']) &&  isset($_POST['telephone'])) {
      $mail_to = 'diegobix97@gmail.com';
      $subject = 'Humhemhome';

      $email_message = "Detalles del formulario de contacto:\n\n";
      $email_message .= "Nombre: " . $_POST['first_name'] . "\n";
      $email_message .= "E-mail: " . $_POST['email'] . "\n";
      $email_message .= "Teléfono: " . $_POST['telephone'] . "\n\n";
      $email_message .= "Comentarios:\n\n" . $_POST['comments'] . "\n\n";

      $success = mail($mail_to, $subject, $email_message);
      if ($success) {
        header("Location: /index.html");
        die();
      } else {
        echo 'Error al enviar';
      }

    } else {
      echo 'Algun valor no esta puesto';
    }
  }

?>