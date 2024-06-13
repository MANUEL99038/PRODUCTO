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

$sql = "SELECT id, nombres, apellidos, correo FROM usuarios";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table border='1'><tr><th>ID</th><th>Nombres</th><th>Apellidos</th><th>Correo</th></tr>";
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row["id"]. "</td><td>" . $row["nombres"]. "</td><td>" . $row["apellidos"]. "</td><td>" . $row["correo"]. "</td></tr>";
    }
    echo "</table>";
} else {
    echo "0 resultados";
}

$conn->close();
?>