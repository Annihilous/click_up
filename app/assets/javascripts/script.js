// script.js

$(document).ready(function(){
	$('.btn').mouseenter(function(){
		$('.btn').fadeTo('fast', 0.5);
	});
	$('.btn').mouseleave(function(){
		$('.btn').fadeTo('fast', 1);
	});
	var clicks = 0;
	$('#clickMe').click(function(){
		clicks ++;
		$('h1').html(clicks);
	})
})