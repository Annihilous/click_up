jQuery(document).ready(function($){
	$.ajaxSetup({
		'beforeSend': function (xhr){
		$.xhr.setRequestHeader("Accept", "text/javascript")}
	});
	$("form.remote_for").submit(function(){
		$('input[type=submit]').attr('disabled', 'disabled');
		$.post.($(this).attr('action'), $(this).serialize(), null, "script");
		return false;
	});
}); //document.ready