// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.





$(document).ready(function(){
	$('#datepicker,#datepicker1').datetimepicker({
		i18n:{
			de:{
				months:[
				'Januar','Februar','März','April',
				'Mai','Juni','Juli','August',
				'September','Oktober','November','Dezember',
				],
				dayOfWeek:[
				"So.", "Mo", "Di", "Mi", 
				"Do", "Fr", "Sa.",
				]
			}
		},
		timepicker:false,
		format:'d.m.Y'
	});


	$(".button").click(function(){
		$(".gallery-item:hidden").slice(0, 3).addClass('show');
		if ($(".gallery-item:hidden").length == 0) {
			$(".button-container").addClass('hide');
		}
		$('html,body').animate({
			scrollTop: $(this).offset().top
		}, 1500);
	});
})

