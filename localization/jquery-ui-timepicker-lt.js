/* Lithuanian translation for the jQuery Timepicker Addon */
/* Written by Irmantas Šiupšinskas */
$.datepicker.regional['lt'] = {
	closeText: 'Uždaryti',
	prevText: '< Buvęs',
	nextText: 'Kitas >',
	currentText: 'Šiandien',
	monthNames: ['Sausis','Vasaris','Kovas','Balandis','Gegužė','Birželis',
	'Liepa','Rugpjūtis','Rugsėjis','Spalis','Lapkritis','Gruodis'],
	monthNamesShort: ['Sau','Vas','Kov','Bal','Geg','Bir',
	'Lie','Rugpj','Rugs','Spa','Lap','Gruo'],
	dayNames: ['Sekmadienis','Pirmadienis','Antradienis','Trečiadienis','Ketvirtadienis','Penktadienis','Šeštadienis'],
	dayNamesShort: ['Sek','Pir','Ant','Tre','Ket','Pen','Šeš'],
	dayNamesMin: ['S','P','A','T','K','Pn','Š'],
	weekHeader: 'Sav',
	dateFormat: 'yyyy-mm-dd',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['lt']);

$.timepicker.regional['lt'] = {
	timeOnlyTitle: 'Pasirinkite laiką',
	timeText: 'Laikas',
	hourText: 'Valandos',
	minuteText: 'Minutės',
	secondText: 'Sekundės',
	timezoneText: 'Laiko zona',
	currentText: 'Dabar',
	closeText: 'Uždaryti'
	timeFormat: 'h:m',
	ampm: false
};
$.timepicker.setDefaults($.timepicker.regional['lt']);
