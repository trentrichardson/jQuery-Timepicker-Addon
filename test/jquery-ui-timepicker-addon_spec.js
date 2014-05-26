describe('datetimepicker', function() {
	describe('utility functions', function() {
		var util = $.timepicker._util;

		describe('extendRemove', function() {
			var target,
				props;

			beforeEach(function() {
				target = {};
				props = {};
			});

			it('should add a nonexistent property to the target', function() {
				var expectedValue = "set",
					propertyName = "prop";
				props[propertyName] = expectedValue;

				var newTarget = util._extendRemove(target, props);

				expect(target[propertyName]).toBe(expectedValue);
				expect(newTarget).toBe(target);
			});

			it('should change the value of an existing property', function() {
				var expectedValue = "new",
					originalValue = "old",
					propertyName = "prop";
				target[propertyName] = originalValue;
				props[propertyName] = expectedValue;

				util._extendRemove(target, props);

				expect(target[propertyName]).not.toBe(originalValue);
				expect(target[propertyName]).toBe(expectedValue);
			});

			it('should null the value of an existing property', function() {
				var expectedValue = null,
					propertyName = "prop";
				target[propertyName] = "original";
				props[propertyName] = expectedValue;

				util._extendRemove(target, props);

				expect(target[propertyName]).toBeNull();
			});
		});

		describe('isEmptyObject', function() {
			it('should say an empty object is empty', function() {
				expect(util._isEmptyObject({})).toBe(true);
			});

			it('should say an object with a property is not empty', function() {
				var testObject = {"prop": "value"};

				expect(util._isEmptyObject(testObject)).toBe(false);
			});

			it('should say object with a supplemental prototype property is empty', function() {
				var testObject = function () {};
				testObject.prototype["prop"] = "something";

				expect(util._isEmptyObject(testObject)).toBe(true);
			});
		});

		describe('convert24to12', function() {
			it('should return the value for a non-zero value less than 12', function() {
				var expectedHour = 6;

				expect(util._convert24to12(expectedHour)).toBe("" + expectedHour);
			});

			it('should return 12 hours less if the value is greater than 12 and less than 24', function() {
				var expectedHour = 7;

				expect(util._convert24to12(expectedHour + 12)).toBe("" + expectedHour);
			});

			it('should return 12 if the normalized value is 0', function() {
				expect(util._convert24to12(0)).toBe('12');
			});

			it('should normalize values that are clearly out of the expected range', function() {
				var expectedValue = 11;

				expect(util._convert24to12(expectedValue + 12 * 3)).toBe("" + expectedValue);
			});
		});

		describe('detectSupport', function() {
			it('should detect support for hours', function() {
				expect(util._detectSupport('H').hour).toBe(true);
				expect(util._detectSupport('HH').hour).toBe(true);
				expect(util._detectSupport('h').hour).toBe(true);
				expect(util._detectSupport('hh').hour).toBe(true);

				expect(util._detectSupport('asdf').hour).toBe(false);
			});

			it('should detect support for minutes', function() {
				expect(util._detectSupport('m').minute).toBe(true);
				expect(util._detectSupport('mm').minute).toBe(true);

				expect(util._detectSupport('asdf').minute).toBe(false);
			});

			it('should detect support for seconds', function() {
				expect(util._detectSupport('s').second).toBe(true);
				expect(util._detectSupport('ss').second).toBe(true);

				expect(util._detectSupport('acdf').second).toBe(false);
			});

			it('should detect support for milliseconds', function() {
				expect(util._detectSupport('l').millisec).toBe(true);

				expect(util._detectSupport('acdf').millisec).toBe(false);
			});

			it('should detect support for microseconds', function() {
				expect(util._detectSupport('c').microsec).toBe(true);

				expect(util._detectSupport('asdf').microsec).toBe(false);
			});

			it('should detect support for AM/PM', function() {
				expect(util._detectSupport('h t').ampm).toBe(true);
				expect(util._detectSupport('h tt').ampm).toBe(true);
				expect(util._detectSupport('h T').ampm).toBe(true);
				expect(util._detectSupport('h TT').ampm).toBe(true);

				expect(util._detectSupport('t').ampm).toBe(false);
				expect(util._detectSupport('h').ampm).toBe(false);
				expect(util._detectSupport('H t').ampm).toBe(false);
				expect(util._detectSupport('acdf').ampm).toBe(false);
			});

			it('should detect support for timezone', function() {
				expect(util._detectSupport('z').timezone).toBe(true);
				expect(util._detectSupport('Z').timezone).toBe(true);

				expect(util._detectSupport('acdf').timezone).toBe(false);
			});

			it('should detect support for iso8601', function() {
				expect(util._detectSupport('Z').iso8601).toBe(true);

				expect(util._detectSupport('z').iso8601).toBe(false);
				expect(util._detectSupport('acdf').iso8601).toBe(false);
			});
		});

		describe('selectLocalTimezone', function() {
			var timepicker,
				timezoneOffset,
				defaultTimezoneOffset;

			beforeEach(function() {
				timepicker = {
					timezone_select: affix('select')
				};
				var now = new Date();
				timezoneOffset = String(-now.getTimezoneOffset());
				defaultTimezoneOffset = String(timezoneOffset - 60);
				timepicker.timezone_select.affix('option').text(defaultTimezoneOffset);
				timepicker.timezone_select.affix('option').text(timezoneOffset);
				timepicker.timezone_select.affix('option').text(timezoneOffset + 60);

			});

			it('should do nothing for a falsey timepicker', function() {
				util._selectLocalTimezone(undefined);

				expect(timepicker.timezone_select.val()).toBe(defaultTimezoneOffset);
			});

			it('should do nothing for a timepicker with a falsey timezone_select', function() {
				util._selectLocalTimezone({});

				expect(timepicker.timezone_select.val()).toBe(defaultTimezoneOffset);
			});

			it('should select the current timezone with a valid timezone_select and no date', function() {
				util._selectLocalTimezone(timepicker);

				expect(timepicker.timezone_select.val()).toBe(timezoneOffset);
			});

			it('should select the current timezone with a valid timezone_select and a date', function() {
				util._selectLocalTimezone(timepicker, new Date());

				expect(timepicker.timezone_select.val()).toBe(timezoneOffset);
			});
		});

		describe('computeEffectiveSetting', function() {
			it('pulls the setting from the passed settings object if it is there', function() {
				var expectedUniqueValue = 'This is very unique',
					settings = {
						property: expectedUniqueValue
					};

				expect(util._computeEffectiveSetting(settings, 'property')).toBe(expectedUniqueValue);
			});

			it('pulls the setting from the timepicker defaults if there are no passed settings', function() {
				var expectedValue = $.timepicker._defaults.separator;
				expect(expectedValue).toBeDefined();

				expect(util._computeEffectiveSetting(undefined, 'separator')).toBe(expectedValue);
			});

			it('pulls the setting from the timepicker defaults if not present in the passed settings', function() {
				var expectedValue = $.timepicker._defaults.separator,
					settings = {};
				expect(expectedValue).toBeDefined();

				expect(util._computeEffectiveSetting(settings, 'separator')).toBe(expectedValue);
			});
		});

		describe('splitDateTime', function() {
			var expectedDateString = '3/6/1967',
				expectedTimeString = '07:32';

			it('splits a date and time into its parts using the default separator', function() {
				var inputDateTimeString = expectedDateString + $.timepicker._defaults.separator + expectedTimeString,
					result;

				result = $.timepicker._util._splitDateTime(inputDateTimeString, {});

				expect(result).toEqual({dateString: expectedDateString, timeString: expectedTimeString});
			});

			it('splits a date and time into its parts using a supplied separator', function() {
				var separator = '-',
					inputDateTimeString = expectedDateString + separator + expectedTimeString,
					result;

				result = $.timepicker._util._splitDateTime(inputDateTimeString, {separator: separator});

				expect(result).toEqual({dateString: expectedDateString, timeString: expectedTimeString});
			});

			it('splits a date and time into its parts when there are multiple separators in the time format', function() {
				var timeFormat = 'hh mm tt',
					separator = ' ',
					alternateTimeString = '07 32 am',
					inputDateTimeString = expectedDateString + separator + alternateTimeString,
					timeSettings = {separator: separator, timeFormat: timeFormat},
					result;

				result = $.timepicker._util._splitDateTime(inputDateTimeString, timeSettings);

				expect(result).toEqual({dateString: expectedDateString, timeString: alternateTimeString});
			});

			it('splits only a date into itself', function() {
				var result = $.timepicker._util._splitDateTime(expectedDateString, {});

				expect(result).toEqual({dateString: expectedDateString, timeString: ''});
			});
		});

		describe('parseDateTimeInternal', function() {
			var dateFormat = 'mm/dd/yy';

			it('should return only a date if there is no time component', function() {
				var inputDateString = '9/11/2001',
					expectedDate = new Date(inputDateString),
					result;

				result = util._parseDateTimeInternal(dateFormat, undefined, inputDateString, undefined, undefined);

				expect(result.date).toEqual(expectedDate);
				expect(result.timeObj).toBeUndefined();
			});

			it('should return a date and a parsed time if a time is included', function() {
				var expectedDateString = '7/4/1976',
					expectedParsedTime = {
						hour: 1,
						minute: 23,
						second: 45,
						millisec: 678,
						microsec: 0
					},
					inputDateTimeString = expectedDateString + ' ' +
											expectedParsedTime.hour + ':' +
											expectedParsedTime.minute + ':' +
											expectedParsedTime.second + '.' +
											expectedParsedTime.millisec,
					expectedDate = new Date(expectedDateString),
					result;

				result = util._parseDateTimeInternal(dateFormat, 'H:m:s.l', inputDateTimeString, undefined, undefined);

				expect(result.date).toEqual(expectedDate);
				expect(result.timeObj).toEqual(expectedParsedTime);
			});

			it('should throw an exception if it cannot parse the time', function() {
				var inputDateString = '4/17/2008 11:22:33';

				expect(function() {
					util._parseDateTimeInternal(dateFormat, 'q', inputDateString, undefined, undefined);
				}).toThrow('Wrong time format');
			});
		});
	});

	describe('timepicker functions', function() {
		describe('timezoneOffsetNumber', function() {
			it('returns 0 if the time zone string is iso8601 Zulu', function() {
				expect($.timepicker.timezoneOffsetNumber('Z')).toBe(0);
				expect($.timepicker.timezoneOffsetNumber('z')).toBe(0);
				expect($.timepicker.timezoneOffsetNumber(':Z')).toBe(0);
			});

			it('returns a string that does not match the expected representations', function() {
				expect($.timepicker.timezoneOffsetNumber('EDT')).toBe('EDT');
				expect($.timepicker.timezoneOffsetNumber('1234')).toBe('1234');
				expect($.timepicker.timezoneOffsetNumber('+123')).toBe('+123');
				expect($.timepicker.timezoneOffsetNumber('-123')).toBe('-123');
				expect($.timepicker.timezoneOffsetNumber('abc:def')).toBe('abc:def');
			});

			it('returns the minute offset from a time zone offset string', function() {
				expect($.timepicker.timezoneOffsetNumber('-0000')).toBe(0);
				expect($.timepicker.timezoneOffsetNumber('+0000')).toBe(0);
				expect($.timepicker.timezoneOffsetNumber('-0400')).toBe(-240);
				expect($.timepicker.timezoneOffsetNumber('+0400')).toBe(240);
			});
		});

		describe('timezoneOffsetString', function() {
			it('returns NaN if the input is NaN', function() {
				expect($.timepicker.timezoneOffsetString(NaN, false)).toBeNaN();
			});

			it('returns the input if the input is greater than 840 (+14:00)', function() {
				var expectedMinutes = 850;

				var actualMinutes = $.timepicker.timezoneOffsetString(expectedMinutes, false);

				expect(actualMinutes).toBe(expectedMinutes);
			});

			it('returns the input if the input is less than -720 (-12:00)', function() {
				var expectedMinutes = -730;

				var actualMinutes = $.timepicker.timezoneOffsetString(expectedMinutes, false);

				expect(actualMinutes).toBe(expectedMinutes);
			});

			it('returns "Z" if the offset is 0 and iso8601 is true', function() {
				expect($.timepicker.timezoneOffsetString(0, true)).toBe('Z');
			});

			it('returns the expected offset string for non-iso8601 values', function() {
				expect($.timepicker.timezoneOffsetString(0, false)).toBe('+0000');
				expect($.timepicker.timezoneOffsetString(60, false)).toBe('+0100');
				expect($.timepicker.timezoneOffsetString(480, false)).toBe('+0800');
				expect($.timepicker.timezoneOffsetString(-60, false)).toBe('-0100');
				expect($.timepicker.timezoneOffsetString(-480, false)).toBe('-0800');
				expect($.timepicker.timezoneOffsetString(-720, false)).toBe('-1200');
				expect($.timepicker.timezoneOffsetString(840, false)).toBe('+1400');
			});

			it('returns the expected offset string for iso8601 values', function() {
				expect($.timepicker.timezoneOffsetString(60, true)).toBe('+01:00');
				expect($.timepicker.timezoneOffsetString(480, true)).toBe('+08:00');
				expect($.timepicker.timezoneOffsetString(-60, true)).toBe('-01:00');
				expect($.timepicker.timezoneOffsetString(-480, true)).toBe('-08:00');
				expect($.timepicker.timezoneOffsetString(-720, true)).toBe('-12:00');
				expect($.timepicker.timezoneOffsetString(840, true)).toBe('+14:00');
			});

			it('handles abnormal values reasonably', function() {
				expect($.timepicker.timezoneOffsetString(null, false)).toBe('+0000');
				expect($.timepicker.timezoneOffsetString(null, true)).toBe('Z');

				expect($.timepicker.timezoneOffsetString(undefined, false)).toBeUndefined();
				expect($.timepicker.timezoneOffsetString(undefined, true)).toBeUndefined();
			});
		});

		describe('timezoneAdjust', function() {
			it('does not change the date if the timezone yields NaN for an offset', function() {
				var expectedDate = new Date();

				expect($.timepicker.timezoneAdjust(expectedDate, NaN)).toEqual(expectedDate);
			});

			it('changes the minutes by the time zone offset minutes', function() {
				var inputDate,
					originalMillis,
					expectedDifference,
					adjustedDate;

				inputDate = new Date();
				originalMillis = inputDate.getTime();
				expectedDifference = -(inputDate.getTimezoneOffset() + 60) * 60 * 1000;

				adjustedDate = $.timepicker.timezoneAdjust(inputDate, '+0100');

				expect(adjustedDate.getTime() - originalMillis).toBe(expectedDifference);
			});
		});

		describe('log', function() {
			it('calls console.log with the message if the console exists', function() {
				var expectedMessage = "Just what I expected!";
				spyOn(window.console, "log");

				$.timepicker.log(expectedMessage);

				expect(window.console.log).toHaveBeenCalledWith(expectedMessage);
			});

			it('does not call console.log if there is no console', function() {
				var originalConsole = window.console,
					consoleLogSpy = spyOn(window.console, "log");
				window.console = undefined;

				$.timepicker.log("Don't care");

				expect(consoleLogSpy).not.toHaveBeenCalled();

				window.console = originalConsole;
			});
		});

		describe('range functions', function() {
			var startTime = $('<p>start</p>'),
				endTime = $('<p>end</p>'),
				options = {};

			describe('convenience functions', function() {
				beforeEach(function() {
					spyOn($.timepicker, 'handleRange');
				});

				it('timeRange calls handleRange the right way', function() {
					$.timepicker.timeRange(startTime, endTime, options);

					expect($.timepicker.handleRange).toHaveBeenCalledWith('timepicker', startTime, endTime, options);
				});

				it('datetimeRange calls handleRange the right way', function() {
					$.timepicker.datetimeRange(startTime, endTime, options);

					expect($.timepicker.handleRange).toHaveBeenCalledWith('datetimepicker', startTime, endTime, options);
				});

				it('dateRange calls handleRange the right way', function() {
					$.timepicker.dateRange(startTime, endTime, options);

					expect($.timepicker.handleRange).toHaveBeenCalledWith('datepicker', startTime, endTime, options);
				});
			});

			xdescribe('handleRange', function() {
				// TODO: Difficult to test. Needs attention.
			});
		});
	});

	describe('datepicker functions', function() {
		describe('formatTime', function() {
			describe('single formats, default options', function() {
				var emptyTime = {};

				describe('hours', function() {
					var earlyHour = {hour: 7},
						lateHour = {hour: 17};

					it('formats HH correctly', function() {
						expect($.datepicker.formatTime('HH', emptyTime)).toBe('00');
						expect($.datepicker.formatTime('HH', earlyHour)).toBe('07');
						expect($.datepicker.formatTime('HH', lateHour)).toBe('17');
					});

					it('formats H correctly', function() {
						expect($.datepicker.formatTime('H', emptyTime)).toBe('0');
						expect($.datepicker.formatTime('H', earlyHour)).toBe('7');
						expect($.datepicker.formatTime('H', lateHour)).toBe('17');
					});

					it('formats hh correctly', function() {
						expect($.datepicker.formatTime('hh', emptyTime)).toBe('12');
						expect($.datepicker.formatTime('hh', earlyHour)).toBe('07');
						expect($.datepicker.formatTime('hh', lateHour)).toBe('05');
					});

					it('formats h correctly', function() {
						expect($.datepicker.formatTime('h', emptyTime)).toBe('12');
						expect($.datepicker.formatTime('h', earlyHour)).toBe('7');
						expect($.datepicker.formatTime('h', lateHour)).toBe('5');
					});
				});

				describe('minutes', function() {
					var singleDigitMinute = {minute: 3},
						doubleDigitMinute = {minute: 42};

					it('formats mm correctly', function() {
						expect($.datepicker.formatTime('mm', emptyTime)).toBe('00');
						expect($.datepicker.formatTime('mm', singleDigitMinute)).toBe('03');
						expect($.datepicker.formatTime('mm', doubleDigitMinute)).toBe('42');
					});

					it('formats m correctly', function() {
						expect($.datepicker.formatTime('m', emptyTime)).toBe('0');
						expect($.datepicker.formatTime('m', singleDigitMinute)).toBe('3');
						expect($.datepicker.formatTime('m', doubleDigitMinute)).toBe('42');
					});
				});

				describe('seconds', function() {
					var singleDigitSecond = {second: 5},
						doubleDigitSecond = {second: 31};

					it('formats ss correctly', function() {
						expect($.datepicker.formatTime('ss', emptyTime)).toBe('00');
						expect($.datepicker.formatTime('ss', singleDigitSecond)).toBe('05');
						expect($.datepicker.formatTime('ss', doubleDigitSecond)).toBe('31');
					});

					it('formats s correctly', function() {
						expect($.datepicker.formatTime('s', emptyTime)).toBe('0');
						expect($.datepicker.formatTime('s', singleDigitSecond)).toBe('5');
						expect($.datepicker.formatTime('s', doubleDigitSecond)).toBe('31');
					});
				});

				describe('milliseconds', function() {
					it('formats l correctly', function() {
						var singleDigitMillis = {millisec: 3},
							doubleDigitMillis = {millisec: 17},
							tripleDigitMillis = {millisec: 123};

						expect($.datepicker.formatTime('l', emptyTime)).toBe('000');
						expect($.datepicker.formatTime('l', singleDigitMillis)).toBe('003');
						expect($.datepicker.formatTime('l', doubleDigitMillis)).toBe('017');
						expect($.datepicker.formatTime('l', tripleDigitMillis)).toBe('123');
					});
				});

				describe('microseconds', function() {
					it('formats c correctly', function() {
						var singleDigitMicros = {microsec: 3},
							doubleDigitMicros = {microsec: 17},
							tripleDigitMicros = {microsec: 123};

						expect($.datepicker.formatTime('c', emptyTime)).toBe('000');
						expect($.datepicker.formatTime('c', singleDigitMicros)).toBe('003');
						expect($.datepicker.formatTime('c', doubleDigitMicros)).toBe('017');
						expect($.datepicker.formatTime('c', tripleDigitMicros)).toBe('123');
					});
				});

				describe('timezone', function() {
					var nullTimezoneTime = {timezone: null},
						noTimezoneTime = emptyTime,
						timezoneTime = {timezone: -240},
						noTimezoneOptions = {},
						timezoneOptions = {timezone: 600};

					it('handles z correctly', function() {
						expect($.datepicker.formatTime('z', timezoneTime, noTimezoneOptions)).toBe('-0400');
						expect($.datepicker.formatTime('z', timezoneTime, timezoneOptions)).toBe('-0400');

						expect($.datepicker.formatTime('z', nullTimezoneTime, timezoneOptions)).toBe('+1000');
						expect($.datepicker.formatTime('z', noTimezoneTime, timezoneOptions)).toBe('+1000');
						expect($.datepicker.formatTime('z', nullTimezoneTime, noTimezoneOptions)).toBe('+0000');
						expect($.datepicker.formatTime('z', noTimezoneTime, noTimezoneOptions)).toBe('+0000');
					});

					it('handles Z correctly', function() {
						expect($.datepicker.formatTime('Z', timezoneTime, noTimezoneOptions)).toBe('-04:00');
						expect($.datepicker.formatTime('Z', timezoneTime, timezoneOptions)).toBe('-04:00');

						expect($.datepicker.formatTime('Z', nullTimezoneTime, timezoneOptions)).toBe('+10:00');
						expect($.datepicker.formatTime('Z', noTimezoneTime, timezoneOptions)).toBe('+10:00');
						expect($.datepicker.formatTime('Z', nullTimezoneTime, noTimezoneOptions)).toBe('Z');
						expect($.datepicker.formatTime('Z', noTimezoneTime, noTimezoneOptions)).toBe('Z');
					});
				});

				describe('am/pm', function() {
					var morningHour = {hour: 3},
						afternoonHour = {hour: 15};

					it('formats t correctly', function() {
						expect($.datepicker.formatTime('t', emptyTime)).toBe('a');
						expect($.datepicker.formatTime('t', morningHour)).toBe('a');
						expect($.datepicker.formatTime('t', afternoonHour)).toBe('p');
					});

					it('formats T correctly', function() {
						expect($.datepicker.formatTime('T', emptyTime)).toBe('A');
						expect($.datepicker.formatTime('T', morningHour)).toBe('A');
						expect($.datepicker.formatTime('T', afternoonHour)).toBe('P');
					});

					it('formats tt correctly', function() {
						expect($.datepicker.formatTime('tt', emptyTime)).toBe('am');
						expect($.datepicker.formatTime('tt', morningHour)).toBe('am');
						expect($.datepicker.formatTime('tt', afternoonHour)).toBe('pm');
					});

					it('formats TT correctly', function() {
						expect($.datepicker.formatTime('TT', emptyTime)).toBe('AM');
						expect($.datepicker.formatTime('TT', morningHour)).toBe('AM');
						expect($.datepicker.formatTime('TT', afternoonHour)).toBe('PM');
					});
				});

				describe('literals', function() {
					it('handles literals correctly', function() {
						expect($.datepicker.formatTime('', emptyTime)).toBe('');
						expect($.datepicker.formatTime("'abc'", emptyTime)).toBe('abc');
						expect($.datepicker.formatTime("'", emptyTime)).toBe("'");
						expect($.datepicker.formatTime("''", emptyTime)).toBe("");
						expect($.datepicker.formatTime("'abc' h 'def'", emptyTime)).toBe('abc 12 def');
					});

					it('does not treat double quotes as literals', function() {
						expect($.datepicker.formatTime('"ab"', emptyTime)).toBe('"ab"');
						expect($.datepicker.formatTime('"abc"', emptyTime)).toBe('"ab000"');
					});
				});
			});

			describe('preserves whitespace in formats', function() {
				it('preserves leading whitespace', function() {
					expect($.datepicker.formatTime(' H', {hour: 3})).toBe(' 3');
				});

				it('preserves trailing whitespace', function() {
					expect($.datepicker.formatTime('H ', {hour: 3})).toBe('3 ');
				});
			});
		});
	});

	describe('methods', function() {
		describe('setDate', function() {
			it('should accept null as date', function() {
				var $input = affix('input').datetimepicker();
				$input.datetimepicker('setDate', '2013-11-25 15:30:25');

				$input.datetimepicker('setDate', null);

				expect($input.datetimepicker('getDate')).toBeNull();
			});
		});
	});

	describe('altField', function() {
		var $input;
		var $altField;
		var inputFocusSpy;

		beforeEach(function() {
			$input = affix('input');
			$altField = affix('input');

			inputFocusSpy = jasmine.createSpy();
			$input.focus(inputFocusSpy);
		});

		it('should redirect focus to main field', function() {
			$input.datetimepicker({
				showOn: 'button',
				altField: $altField
			});

			$altField.trigger('focus');
			expect(inputFocusSpy).toHaveBeenCalled();
		});

		it('should not redirect focus to main field if altRedirectFocus is false', function() {
			$input.datetimepicker({
				showOn: 'button',
				altField: $altField,
				altRedirectFocus: false
			});

			$altField.trigger('focus');
			expect(inputFocusSpy).not.toHaveBeenCalled();
		});
	});
});
