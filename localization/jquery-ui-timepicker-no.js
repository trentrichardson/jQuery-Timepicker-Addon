/* Norwegian translation for the jQuery Timepicker Addon */
/* Written by Morten Hauan (http://hauan.me) */
/* 22.07.2012. Updated by Øystein Gutu and Finn Johnsen. */
(function($) {
	$.timepicker.regional['no'] = {
		timeOnlyTitle: 'Velg tid',
		timeText: 'Tid',
		hourText: 'Time',
		minuteText: 'Minutt',
		secondText: 'Sekund',
		millisecText: 'Millisekund',
		timezoneText: 'Tidssone',
		currentText: 'Nå',
		closeText: 'Lukk',
		dateFormat: 'dd.mm.yy',
		timeFormat: 'hh:mm',
		amNames: ['am', 'AM', 'A'],
		pmNames: ['pm', 'PM', 'P'],
		prevText: '<Forrige',
		nextText: 'Neste>',
		monthNames: ['Januar','Februar','Mars','April','Mai','Juni', 'Juli','August','September','Oktober','November','Desember'],
		monthNamesShort: ['Jan','Feb','Mar','Apr','Mai','Jun', 'Jul','Aug','Sep','Okt','Nov','Des'],
		dayNames: ['Søndag','Mandag','Tirsdag','Onsdag','Torsdag','Fredag','Lørdag'],
		dayNamesShort: ['Søn','Man','Tir','Ons','Tor','Fre','Lør'],
		dayNamesMin: ['Sø', 'Ma','Ti','On','To','Fr','Lø'],
		ampm: false
	};
	$.timepicker.setDefaults($.timepicker.regional['no']);
})(jQuery);
