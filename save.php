<?php
include 'db.php';

// GrapesJS verileri POST ile gönderir
$html = $_POST['html'] ?? '';
$css = $_POST['css'] ?? '';

// ID'si 1 olan satırı yeni verilerle güncelle
$sql = "UPDATE designs SET html_content = ?, css_content = ? WHERE id = 1";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $html, $css);
$stmt->execute();
?>