describe('datetimepicker', function() {
	describe('utility functions', function() {
		var util = $.timepicker.util;

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
				var testObject = new Function();
				testObject.prototype["prop"] = "something";

				expect(util._isEmptyObject(testObject)).toBe(true);
			})
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
			})
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
	});
});