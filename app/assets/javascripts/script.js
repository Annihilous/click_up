// script.js

$(document).ready(function(){
	$('.btn').mouseenter(function(){
		$('.btn').fadeTo('fast', 0.5);
	});
	$('.btn').mouseleave(function(){
		$('.btn').fadeTo('fast', 1);
	});
})