

$(document).ready( function() {
	/* preloader */
	$(window).load( function () {
		$('.loader').addClass('close');
	});

	$(function() {
		Boxlayout.init();
	});


	$('.more').click( function() {
		$('#header').addClass('close');
	});

/*	$('.cd-slider').find('li a').on('click', function(e) {
		e.preventDefault();
		var selected_project = $(this).data('type');

		$('.cd-project-content.'+selected_project+'').addClass('is-visible');

	});*/

});
