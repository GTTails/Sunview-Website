<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $phone = trim($_POST["phone"]);
    $message = trim($_POST["message"]);

    $data = array($name, $email, $phone, $message);

    $file = fopen("form_data.csv", "a");
    fputcsv($file, $data);
    fclose($file);
}

?>

<!-- http://localhost/Sunview%20Website/Contact%20Form/form.html -->