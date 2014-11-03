<?php
	$to 			= "daan@cornerstoneaudio.nl";
	$subject 		= "Webform Inquiry Daan is een poepie";
	$linebreak		= "\r\n\r\n";
	$message 		= "Full name: ".$_POST["full-name"].$linebreak."Band name: ".$_POST["band-name"].$linebreak."Full name: ".$_POST["email"].$linebreak."Full name: ".$_POST["full-name"].$linebreak.;

	mail($to, $subject, $message);
?>
<!-- "Full name: ".$_POST["full-name"].$linebreak. -->