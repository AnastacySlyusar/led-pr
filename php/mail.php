<?php

$recepient = "anastacy2882@gmail.com";
$sitename = "led";

$method = $_SERVER['REQUEST_METHOD'];

if ( $method === 'POST' ) {
	foreach ( $_POST as $key => $value ) {
			if ( $value != "" ) {
				$message .= "" . $key . ":" . " " . $value . "\n";
			}
		}
}


$pagetitle = "Новая заявка с сайта \"$sitename\"";

mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");