/* Polish translation for the jQuery Timepicker Addon */
/* Written by Michał Pena */
/* Written by Hilary Jendrasiak <sylogista@sylogista.pl> */
(function($) {
	$.timepicker.regional['pl'] = {
		timeOnlyTitle: 'Wybierz godzinę',
		timeText: 'Czas',
		hourText: 'Godzina',
		minuteText: 'Minuta',
		secondText: 'Sekunda',
		millisecText: 'Milisekunda',
		microsecText: 'Mikrosekunda',
		timezoneText: 'Strefa czasowa',
		currentText: 'Teraz',
		closeText: 'Gotowe',
		timeFormat: 'HH:mm',
		dateFormat: 'dd.mm.yy',
		timeSuffix: '',
		amNames: ['AM', 'A'],
		pmNames: ['PM', 'P'],
		monthNames: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
		monthNamesShort: ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'],
		dayNames: ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'],
		dayNamesMin: ['ndz', 'pon', 'wt', 'śr', 'czw', 'pt', 'sob'],
		firstDay: 1,
		isRTL: false
	};
	$.timepicker.setDefaults($.timepicker.regional['pl']);
})(jQuery);
