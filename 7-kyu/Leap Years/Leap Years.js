/**
 * Determines whether a given year is a leap year.
 * Rules:
 * - Divisible by 4 ➝ Leap year
 * - Divisible by 100 ➝ Not a leap year (exception)
 * - Divisible by 400 ➝ Leap year again
 * Valid range: 1600 ≤ year ≤ 4000
 *
 * @param {number} year - The year to check
 * @returns {boolean} - True if leap year, otherwise false
 */
function isLeapYear(year) {
  // Directly apply the leap year rule in a single return statement
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Example usage:
console.log(isLeapYear(2000)); // true (divisible by 400)
console.log(isLeapYear(1900)); // false (divisible by 100 but not 400)
console.log(isLeapYear(2024)); // true (divisible by 4 but not 100)
console.log(isLeapYear(2023)); // false (not divisible by 4)

/*
### 🔎 Explanation:

1. **Divisible by 4** → candidate leap year.
2. **Divisible by 100** → normally not a leap year.
3. **Divisible by 400** → exception, still a leap year.

So, the final condition is:

```
(year % 4 === 0 AND year % 100 !== 0) OR (year % 400 === 0)
```

This runs in **O(1) time** and **O(1) space**, which is the most efficient possible solution.
*/
