<?php
	// Data
	$selectedServices = "";

	foreach ($_POST['services'] as $value) {
    	$selectedServices .= "\r\n".$value;
	}

	// Mail specifics
	$to 			= "rizki@rizkicalame.com";
	$subject 		= "Webform Inquiry";
	$linebreak		= "\r\n\r\n";
	$message 		= "Full name: ".$_POST["full-name"].$linebreak."Band name: ".$_POST["band-name"].$linebreak."Email: ".$_POST["email"].$linebreak."What are you looking for?: ".$selectedServices.$linebreak."Number of songs: ".$_POST["nr-songs"].$linebreak."Explain what you need (if you selected other, please clarify): ".$_POST["explanation"].$linebreak."Budget: ".$_POST["budget"].$linebreak."Dates: ".$_POST["date-from"]." to ".$_POST["date-to"];

	mail($to, $subject, $message);

	header('Location: http://www.cornerstoneaudio.nl');   
?>