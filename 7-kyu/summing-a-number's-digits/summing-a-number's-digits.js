// Solution 1: using split() method
function sumDigits(number) {
  // Convert the number to a string, then split it into individual characters (digits).
  // Use map to convert each character back to a number, filter out any negative sign ('-'),
  // and finally, reduce the digits by summing them.
  return Math.abs(number) // Take the absolute value of the number to handle negatives.
    .toString() // Convert the number to a string so we can split the digits.
    .split('') // Split the string into an array of individual digits.
    .map(Number) // Convert each string digit back to a number.
    .reduce((sum, digit) => sum + digit, 0); // Sum all the digits using reduce.
}

// Solution 2: using (...) rest operator
const sumDigits = (n) =>
  // Convert the number to absolute value to ignore any negative sign
  [...Math.abs(n).toString()]
    // Use reduce to sum up the digits. 'a' is the accumulator, '+b' converts each character back to a number.
    .reduce((a, b) => a + +b, 0);

/*
  1. `Math.abs(n)` ensures we work with the absolute value of the number (removes negative signs).
  2. `.toString()` converts the number into a string.
  3. `[... ]` (spread operator) splits the string into individual characters, creating an array of digits.
  4. `.reduce((a, b) => a + +b, 0)` loops over the array of digits and sums them up.
     - `a` is the accumulator that stores the sum.
     - `+b` converts each character back to a number, and then adds it to `a`.
     - The initial value of `a` is set to `0`.
  */
