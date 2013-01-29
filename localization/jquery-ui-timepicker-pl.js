/* Polish translation for the jQuery Timepicker Addon */
/* Written by Michał Pena */
/* updated by Radosław Kowalski (rkowalski@mnet-x.pl) */
(function($) {
	$.timepicker.regional['pl'] = {
		timeOnlyTitle: 'Wybierz godzinę',
		timeText: 'Czas',
		hourText: 'Godzina',
		minuteText: 'Minuta',
		secondText: 'Sekunda',
		millisecText: 'Milisekunda',
		timezoneText: 'Strefa czasowa',
		monthNames: ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'],
		monthNamesShort: ['Sty','Lut','Mar','Kwi','Maj','Cze','Lip','Sie','Wrz','Paź','Lis','Gru'],
		dayNames: ['Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota','Niedziela'],
		dayNamesShort: ['Pon','Wto','Sro','Czw','Pią','Sob','Nie'],
		dayNamesMin: ['Pn','Wt','Śr','Cz','Pt','Sb','Nd'],
		currentText: 'Teraz',
		closeText: 'Gotowe',
		timeFormat: 'HH:mm',
		amNames: ['AM', 'A'],
		pmNames: ['PM', 'P'],
		isRTL: false
	};
	$.timepicker.setDefaults($.timepicker.regional['pl']);
})(jQuery);
