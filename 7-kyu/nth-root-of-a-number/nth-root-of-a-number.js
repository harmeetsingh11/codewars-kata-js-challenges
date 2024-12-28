function nthRoot(x, n) {
  // Use Math.pow with the exponent set to 1/n to compute the nth root
  return Math.pow(x, 1 / n);
}

// Test cases
console.log(nthRoot(4, 2)); // Output: 2
console.log(nthRoot(8, 3)); // Output: 2
console.log(nthRoot(256, 4)); // Output: 4
console.log(nthRoot(9, 2)); // Output: 3
console.log(nthRoot(6.25, 2)); // Output: 2.5

/* Explanation:
 * 1. Math.pow(base, exponent) computes the value of base raised to the power of exponent.
 * 2. To find the nth root of x, we use the formula x^(1/n), which is equivalent to Math.pow(x, 1/n).
 */
