<?php
	include 'connect.php';


	$myQuery = "SELECT * FROM tbl_info";

	$result = mysqli_query($conn, $myQuery);
	$rows = array();

	while($row = mysqli_fetch_assoc($result)) {
		$rows[] = $row;
	}

	echo json_encode($rows);