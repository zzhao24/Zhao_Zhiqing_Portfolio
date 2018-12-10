<?php
//	$user = "root";
//	$password = "";
//	$host = "localhost";
//	$db = "db_portfolio";

	$user = "zhaozhiq_portfolio";
	$password = "_qZqtrJ9syi#";
	$host = "localhost";
	$db = "zhaozhiq_portfolio";

	$conn = mysqli_connect($host, $user, $password, $db);
	mysqli_set_charset($conn, 'utf8');

	if (!$conn) {
		echo "Unable to connect to database, please contact our technician.";
		exit;
	}