<?php
include 'db.php';

$result = $conn->query("SELECT html_content as html, css_content as css FROM designs WHERE id = 1");
$row = $result->fetch_assoc();

// Veriyi JSON formatında GrapesJS'e gönderiyoruz
echo json_encode($row);
?>