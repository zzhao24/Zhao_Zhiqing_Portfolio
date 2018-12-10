<?php

	$name = $_POST['name'];

	$email = $_POST['email'];

	$message = $_POST['message'];

	$recipient = "zhaozhiqing9651@gmail.com";

	$subject = "Massage From $name - Portfolio Contact Form";

	$content="From: $name\nEmail: $email\nMessage: $message";

	$mailto = mail($recipient, $subject, $content);
