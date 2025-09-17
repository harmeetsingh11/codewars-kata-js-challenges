/**
 * Checks if the input string follows the format DD-MM-YYYY HH:MM
 * (does not validate actual date correctness).
 *
 * @param {string} input
 * @returns {boolean}
 */
function isValidDateTime(input) {
  // Regex explanation:
  // ^ - start
  // \d{2} - exactly 2 digits (day)
  // - separator
  // \d{2} - exactly 2 digits (month)
  // - separator
  // \d{4} - exactly 4 digits (year)
  // space
  // \d{2} - exactly 2 digits (hour)
  // : separator
  // \d{2} - exactly 2 digits (minute)
  // $ - end
  const regex = /^\d{2}-\d{2}-\d{4} \d{2}:\d{2}$/;

  return regex.test(input);
}

// ✅ Example tests
console.log(isValidDateTime('01-09-2016 01:20')); // true
console.log(isValidDateTime('57-50-2047 25:53')); // true (format matches)
console.log(isValidDateTime('25-68-1941 18:66')); // true (format matches)
console.log(isValidDateTime('1-9-2016 1:20')); // false (not 2-digit each part)
console.log(isValidDateTime('2016-09-01 01:20')); // false (wrong order)

/*
### ✅ Explanation

* The kata **only cares about format**, not real-world date validity.
* That’s why `"57-50-2047 25:53"` is expected `true` — because it *looks* like `DD-MM-YYYY HH:MM` (even though it’s nonsense as a real date).
* This regex just ensures:

  * 2 digits for day
  * 2 digits for month
  * 4 digits for year
  * 2 digits for hour
  * 2 digits for minute
*/
