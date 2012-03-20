/* German translation for the jQuery Timepicker Addon */
/* Written by Marvin */
(function($) {
	$.timepicker.regional['de'] = {
		timeOnlyTitle: 'Zeit Wählen',
		timeText: 'Zeit',
		hourText: 'Stunde',
		minuteText: 'Minute',
		secondText: 'Sekunde',
		millisecText: 'Millisekunde',
		timezoneText: 'Zeitzone',
		currentText: 'Jetzt',
		closeText: 'Fertig',
		timeFormat: 'hh:mm tt',
		amNames: ['vorm.', 'AM', 'A'],
		pmNames: ['nachm.', 'PM', 'P'],
		ampm: false,
		timezoneLabels: {
			'-1100': '-11h NUT: Niue Zeit',
			'-1000': '-10h HST: Hawaiianische Standardzeit',
			'-0900': '-09h HDT: Hawaiianische Sommerzeit',
			'-0800': '-08h PST: Pazifische Standardzeit',
			'-0700': '-07h PDT: Pazifische Sommerzeit',
			'-0600': '-06h CST: Zentrale Standardzeit (Amerika)',
			'-0500': '-05h EST: Östliche Standardzeit (Amerika)',
			'-0400': '-04h EDT: Östliche Sommerzeit (Amerika)',
			'-0300': '-03h BRT: Brasilianische Standardzeit',
			'-0200': '-02h BRST: Brasilianische Sommerzeit',
			'-0100': '-01h CVT: Kap Verde Zeit',
			'+0000': '±00h UTC: Koordinierte Weltzeit (Greenwich)',
			'+0100': '+01h CET: Mitteleuropäische Standardzeit (MEZ)',
			'+0200': '+02h CEST: Mitteleuropäische Sommerzeit (MESZ)',
			'+0300': '+03h AST: Arabische Zeit',
			'+0400': '+04h MSK: Moskauer Zeit',
			'+0500': '+05h PKT: Pakistanische Zeit',
			'+0600': '+06h BST: Bangladesch Zeit',
			'+0700': '+07h ICT: Indochinesische Zeit',
			'+0800': '+08h CST: Chinesische Standardzeit',
			'+0900': '+09h JST: Japanische Zeit',
			'+1000': '+10h AEST: Ost-Australische Standardzeit',
			'+1100': '+11h AEDT: Ost-Australische Sommerzeit',
			'+1200': '+12h NZST: Neuseeländische Standardzeit',
			'+1300': '+13h NZDT: Neuseeländische Sommerzeit'
		}
	};
	$.timepicker.setDefaults($.timepicker.regional['de']);
})(jQuery);
