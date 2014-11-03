<?php
	// Data
	$selectedServices  = 'None';
	if(isset($_POST['services']) && is_array($_POST['services']) && count($_POST['services']) > 0){
	    $selectedServices = implode(', ', $_POST['services']);
	}

	// Mail specifics
	$to 			= "rizki@rizkicalame.com";
	$subject 		= "Webform Inquiry Daan is een poepie";
	$linebreak		= "\r\n\r\n";
	$message 		= "Full name: ".$_POST["full-name"].$linebreak."Band name: ".$_POST["band-name"].$linebreak."Email: ".$_POST["email"].$linebreak."What are you looking for?: ".$$selectedServices.$linebreak."Number of songs: ".$_POST["nr-songs"].$linebreak."Explain what you need (if you selected other, please clarify)".$_POST["explanation"].$linebreak."Budget: ".$_POST["budget"]."Dates: ".$_POST["date-from"]." to ".$_POST["date_to"]."Daan, je bent een poepie";

	mail($to, $subject, $message);
?>
<!-- "Full name: ".$_POST["full-name"].$linebreak. -->