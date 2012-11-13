/* German translation for the jQuery Timepicker Addon */
/* Written by Marvin */
/* Updated by vladutcornel
 * * Added week names
 * * Added month names
 * * Set the first day to Monday
 */
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
                timeFormat: 'HH:mm',
                amNames: ['vorm.', 'AM', 'A'],
                pmNames: ['nachm.', 'PM', 'P'],
                isRTL: false,
                firstDay: 1,
                monthNames: ['Januar','Februar','März','April','Mai','Juni',
                'Juli','August','September','Oktober','November','Dezember'],
                monthNamesShort: ['Jan','Feb','Mär','Apr','Mai','Jun',
                'Jul','Aug','Sep','Okt','Nov','Dez'],
                dayNames: ['Sonntag', 'Montag' , 'Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
                dayNamesShort: ['Son', 'Mon' , 'Die','Mit','Don','Fre','Sam'],
                dayNamesMin: ['So', 'Mo' , 'Di','Mi','Do','Fe','Sa']
        };
        $.timepicker.setDefaults($.timepicker.regional['de']);
})(jQuery);