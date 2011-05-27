/* Lithuanian translation for the jQuery Timepicker Addon */
/* Written by Irmantas Ðiupðinskas */
$.datepicker.regional['lt'] = {
	closeText: 'Uþdaryti',
	prevText: '< Buvæs',
	nextText: 'Kitas >',
	currentText: 'Ðiandien',
	monthNames: ['Sausis','Vasaris','Kovas','Balandis','Geguþë','Birþelis',
	'Liepa','Rugpjûtis','Rugsëjis','Spalis','Lapkritis','Gruodis'],
	monthNamesShort: ['Sau','Vas','Kov','Bal','Geg','Bir',
	'Lie','Rugpj','Rugs','Spa','Lap','Gruo'],
	dayNames: ['Sekmadienis','Pirmadienis','Antradienis','Treèiadienis','Ketvirtadienis','Penktadienis','Ðeðtadienis'],
	dayNamesShort: ['Sek','Pir','Ant','Tre','Ket','Pen','Ðeð'],
	dayNamesMin: ['S','P','A','T','K','Pn','Ð'],
	weekHeader: 'Sav',
	dateFormat: 'yyyy-mm-dd',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['lt']);

$.timepicker.regional['lt'] = {
	timeOnlyTitle: 'Pasirinkite laikà',
	timeText: 'Laikas',
	hourText: 'Valandos',
	minuteText: 'Minutës',
	secondText: 'Sekundës',
	timezoneText: 'Laiko zona',
	currentText: 'Dabar',
	closeText: 'Uþdaryti'
	timeFormat: 'h:m',
	ampm: false
};
$.timepicker.setDefaults($.timepicker.regional['lt']);
