function timeForMilkAndCookies(date) {
  // Check if the month is December (11 in 0-based index) and the day is 24
  return date.getMonth() === 11 && date.getDate() === 24;
}

// Test cases
console.log(timeForMilkAndCookies(new Date(2013, 11, 24))); // true
console.log(timeForMilkAndCookies(new Date(2013, 0, 23))); // false
console.log(timeForMilkAndCookies(new Date(3000, 11, 24))); // true

/*
Explanation:
1. `getMonth()` returns the month (0-based, meaning January = 0, December = 11).
2. `getDate()` returns the day of the month.
3. The function simply checks if the month is `11` (December) and the date is `24`, returning `true` if both conditions match, otherwise `false`.

This approach runs in **O(1) constant time** since it performs only two property accesses and a boolean comparison. 
*/
