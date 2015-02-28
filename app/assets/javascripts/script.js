// script.js

$(document).ready(function(){
	$('.btn').mouseenter(function(){
		$(this).fadeTo('fast', 0.5);
	});
	$('.btn').mouseleave(function(){
		$(this).fadeTo('fast', 1);
	});
	var clicks = 0;
	$('#clickMe').click(function(){
		clicks ++;
		$('h1').html(clicks);
		// if clicks === 10;
		// 	$(this).css("background", "blue");
	})
	$('#reset').click(function(){
		clicks = 0;
		$('h1').html(clicks);
	})
})