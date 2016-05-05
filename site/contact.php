<?php 

	include('../config/config.php');
	http_response_code(501);

	// Grab PHP inputs
	$name = $_POST["name"];
	$email = $_POST["email"];
	$message = $_POST["message"];

	// Create connection
	$conn = mysqli_connect($servername, $username, $password, $dbname);

	// Check connection
	if (!$conn) {
	    die("Connection failed: " . mysqli_connect_error());
	}

	$stmt = $conn->prepare("INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)");
    $stmt->bind_param('sss', $name, $email, $message);
    if($stmt->execute()) {
    	http_response_code(200);
        echo "Update successful";
    } else {
        echo "Update failed";
    };

	mysqli_close($conn);
?>