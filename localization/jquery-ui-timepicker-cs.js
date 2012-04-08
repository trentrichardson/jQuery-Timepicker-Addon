/* Czech translation for the jQuery Timepicker Addon */
/* Written by Ondřej Vodáček */
(function($) {
	$.timepicker.regional['cs'] = {
		timeOnlyTitle: 'Vyberte čas',
		timeText: 'Čas',
		hourText: 'Hodiny',
		minuteText: 'Minuty',
		secondText: 'Vteřiny',
		millisecText: 'Milisekundy',
		timezoneText: 'Časové pásmo',
		currentText: 'Nyní',
		closeText: 'Zavřít',
		timeFormat: 'h:m',
		amNames: ['dop.', 'AM', 'A'],
		pmNames: ['odp.', 'PM', 'P'],
		ampm: false,
		prevText: 'Předchozí', 
		nextText: 'Další', 
		monthNames: ['Leden','Únor','Březen','Duben','Květen','Červen', 'Červenec','Srpen','Září','Říjen','Listopad','Prosinec'],
		monthNamesShort: ['Le','Ún','Bř','Du','Kv','Čn', 'Čc','Sr','Zá','Ří','Li','Pr'], 
		dayNames: ['Neděle','Pondělí','Úterý','Středa','Čtvrtek','Pátek','Sobota'], 
		dayNamesShort: ['Ne','Po','Út','St','Čt','Pá','So',], 
		dayNamesMin: ['Ne','Po','Út','St','Čt','Pá','So'], 
		weekHeader: 'Sm', 
		dateFormat: 'dd.mm.yy', 
		firstDay: 1, 
		isRTL: false, 
		showMonthAfterYear: false, 
		yearSuffix: ''
	};
	$.timepicker.setDefaults($.timepicker.regional['cs']);
})(jQuery);
