/**
 * Returns the day number of the year for a given date [D, M, YYYY].
 * @param {number[]} date - Array in format [day, month, year].
 * @returns {number} - Day of the year (1–365 or 366 for leap years).
 */
function toDayOfYear([day, month, year]) {
  // Check if it's a leap year
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  // Days in each month
  const daysInMonths = [
    31,
    isLeap ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  // Sum all days in previous months, then add current day
  return daysInMonths.slice(0, month - 1).reduce((sum, d) => sum + d, 0) + day;
}

console.log(toDayOfYear([1, 1, 2000])); // 1
console.log(toDayOfYear([1, 2, 2000])); // 32
console.log(toDayOfYear([22, 12, 1999])); // 356
console.log(toDayOfYear([29, 2, 2024])); // 60 (leap year)

/*
### 🔎 Explanation

1. **Leap year check**

   * A year is a leap year if:

     * divisible by 4 **and** not divisible by 100, **or**
     * divisible by 400.
   * Example: `2000` ✅ leap year, `1900` ❌ not a leap year, `2024` ✅ leap year.

2. **Days in months**

   * Stored in an array.
   * For February, set `29` if leap year, else `28`.

3. **Summation**

   * Add up days of all months **before** the given month.
   * Finally, add the day of the current month.

---
*/
