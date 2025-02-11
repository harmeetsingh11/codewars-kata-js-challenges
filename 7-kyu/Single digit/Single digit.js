const reduceToSingleDigit = (n) => {
  while (n > 9) {
    // Convert number to binary, split into digits, sum them up
    n = n
      .toString(2)
      .split('')
      .reduce((sum, bit) => sum + +bit, 0);
  }
  return n;
};

console.log(reduceToSingleDigit(5665)); // Output: 5
console.log(reduceToSingleDigit(123456789)); // Output: 1

/* 
Explanation:
1. Convert `n` to its binary representation using `n.toString(2)`.
2. Split the binary string into an array of characters.
3. Convert each character (`bit`) to a number and sum them up using `.reduce()`.
4. Repeat the process until `n` is a single-digit number.
5. Return the final single-digit sum.
*/
