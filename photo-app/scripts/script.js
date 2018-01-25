$(document).ready(function() {


	$('input[type="text"], input[type="password"], textarea').on('blur', function() {
		if ($(this).val() == '') {
			$(this).addClass('error');
		} else {
			$(this).removeClass('error');
		}
	});


	$('#menu').on('click', function(e) {
		e.preventDefault();
		$('header nav').toggleClass('active');
	});


	$('header nav ul a').on('click', function(e){
		e.preventDefault();
		var element = $(this).attr('href');
		var offsetTop = $(element).offset().top;
		offsetTop = Math.round( offsetTop );

		$('html, body').animate({
        	scrollTop: offsetTop - 50
    	}, 300);
	});



	$('input').iCheck({
		checkboxClass: 'icheckbox_polaris',
		radioClass: 'iradio_polaris',
		increaseArea: '-10%' // optional
	});




});