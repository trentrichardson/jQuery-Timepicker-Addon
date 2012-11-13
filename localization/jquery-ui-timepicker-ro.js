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
                monthNames: ['Ianuarie','Februarie','Martie','Aprilie','Mai','Iunie',
                'Iulie','August','Septembrie','Octombrie','Noembrie','Decembrie'],
                monthNamesShort: ['Ian','Feb','Mar','Apr','Mai','Iun',
                'Iul','Aug','Sep','Oct','Nov','Dec'],
                dayNames: ['Duminică', 'Luni' , 'Marţi','Miercuri','Joi','Vineri','Sâmbătă'],
                dayNamesShort: ['Dum', 'Lun' , 'Mar','Mie','Joi','Vin','Sâm'],
                dayNamesMin: ['D', 'L' , 'Ma','Mi','J','V','S']
        };
        $.timepicker.setDefaults($.timepicker.regional['de']);
})(jQuery);