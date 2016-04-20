#Change Log

##1.6.4

##1.6.3
- Fix: Add Albanian i18n to dist folder

##1.6.2
- Fix: Now button giving Na:Na
- Fix: tz offset calculation
- Fix: "Today" fails on plain datepicker control
- Fix: getDate() returns time (hh:mm) even when plugin is applied on "non-input" elements
- Fix: setSelectionRange for older IE
- Fix: Hellenic i18n
- Fix: window.log in older IE
- Add: Albanian i18n
- Remove: partial support for alpha timezones

##1.6.1
- Fix: Add non-dist files to bower.json ignore property
- Fix: \#836 - fixes "invalid-meta" warning for bower
- Fix: correct version in package.json
- Fix: \#829 - Update input after pressing now button. Calls onSelectHandler in \_gotoToday.
- Fix: Update input field after pressing Now button
- Fix: version number in bower.json
- Add: \#838 - Macedonian localization by \@ristovskiv
- Add: Allow direct time input from widget

## 1.6.0
- Fix: bower.json main file entries
- Add: Persian language to i18n
- Improve: README.json

##1.5.0
- Improve: Check for existence of properties when determining which value to use instead of just truthiness to avoid o.min evaulating to false when its value is 0.
- Improve: $.timepicker.log to accept multiple arguments.
- Fix: to not override inline property.
- Fix: a big bug on the “go to today” functionality. When the month is not the current month, the date change didn’t work.
- Add: examples for $.timepicker.datetimeRange(), $.timepicker.timeRange(), and $.timepicker.dateRange().
- Add: jQueryUI style classes to select controls.
- Update and test with latest jQuery and jQueryUI.
