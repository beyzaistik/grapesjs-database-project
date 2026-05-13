<?php
// Sunucu, Kullanıcı, Şifre, Veritabanı Adı
$conn = new mysqli("localhost", "root", "", "grapesjs_db");

if ($conn->connect_error) {
    die("Bağlantı başarısız: " . $conn->connect_error);
}
?>