function isLucky(ticket) {
  // Check if input is a string of exactly 6 digits
  if (!/^\d{6}$/.test(ticket)) return false;

  // Split the string into first and last 3 digits
  const firstHalf = ticket.slice(0, 3);
  const secondHalf = ticket.slice(3);

  // Helper function to calculate sum of digits in a string
  const sumDigits = (str) =>
    [...str].reduce((sum, digit) => sum + Number(digit), 0);

  // Compare sums of both halves
  return sumDigits(firstHalf) === sumDigits(secondHalf);
}

console.log(isLucky('123321')); // true
console.log(isLucky('12341234')); // false
console.log(isLucky('12a21a')); // false
console.log(isLucky('100200')); // false
console.log(isLucky('22')); // false
console.log(isLucky('abcdef')); // false

/*
### 📊 Time & Space Complexity:

- **Time Complexity:** `O(1)`
  - Because the ticket length is fixed (6 digits), all operations (regex check, slicing, summing) take constant time.

- **Space Complexity:** `O(1)`
  - Uses a constant amount of space regardless of input size.
*/
