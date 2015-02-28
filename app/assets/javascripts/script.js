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
		if(clicks%2 == 0){
			$('body').css("background", "red");
		}
			else{
				$('body').css("background", "blue");	
			}
		if(clicks > 500) {
			$('#clickCount').css("background", "purple");
		}
		else if(clicks > 250){
			$('#clickCount').css("background", "blue");
		}
		else if(clicks > 100){
			$('#clickCount').css("background", "green");
		}
		else if(clicks > 50){
			$('#clickCount').css("background", "orange");
		}
		else if(clicks > 25){
			$('#clickCount').css("background", "yellow");
		}		
		else if(clicks > 9){
			$('#clickCount').css("background", "gray");
		}
	})
	$('#reset').click(function(){
		clicks = 0;
		$('h1').html(clicks);
		$('#clickCount').css("background", "#f5f5f5");
		$('body').css("background", "none");
	})
})