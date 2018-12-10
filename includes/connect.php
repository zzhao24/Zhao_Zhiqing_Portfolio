<?php
//	$user = "root";
//	$password = "root";
//	$host = "localhost";
//	$db = "db_portfolio";

	$user = "root";
	$password = "root";
	$host = "localhost";
	$db = "db_portfolio";

	$conn = mysqli_connect($host, $user, $password, $db);
	mysqli_set_charset($conn, 'utf8');

	if (!$conn) {
		echo "Unable to connect to database, please contact our technician.";
		exit;
	}