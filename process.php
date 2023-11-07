<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // You can add code here to send the email or store the data in a database.
    // For sending email, you can use the mail() function or a library like PHPMailer.

    // Example code to send email (assuming you have a mail server set up):
    $to = "alikhanak47.in@gmail.com";
    $subject = "Contact Form Submission from $name";
    $headers = "From: $email";
    mail($to, $subject, $message, $headers, $phone,);

    // Redirect the user to a thank you page or back to the form page.
    echo '<script>showAlert();</script>';
}
?>
