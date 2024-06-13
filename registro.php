<?php
$servername = "localhost";
$username = "root";  // Cambia esto si tienes un usuario y contraseña diferente
$password = "";
$dbname = "usuarios_db";  // Nombre de tu base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener datos del formulario
$nombres = $_POST['nombres'];
$apellidos = $_POST['apellidos'];
$correo = $_POST['correo'];
$password = password_hash($_POST['password'], PASSWORD_BCRYPT);  // Encriptar contraseña

$sql = "INSERT INTO usuarios (nombres, apellidos, correo, password) VALUES ('$nombres', '$apellidos', '$correo', '$password')";

if ($conn->query($sql) === TRUE) {
    echo "Registro exitoso";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>