function squares(x, n) {
  // If n is non-positive, return an empty array
  if (n <= 0) return [];

  // Use Array.from to create the array with n elements
  return Array.from({ length: n }, (_, i) => Math.pow(x, Math.pow(2, i)));
}

// Explanation:
// 1. If n is zero or negative, we immediately return an empty array.
// 2. Array.from is used to create an array of length n. we avoid manual array creation and filling.
//    - The first argument is an object with a `length` property.
//    - The second argument is a mapping function that takes the index `i` and computes the value as x^(2^i).
// 3. Math.pow(x, Math.pow(2, i)) calculates x raised to the power of 2^i.
// 4. Efficiency: The computation is done in O(n) time since we only iterate n times.

// Examples
console.log(squares(2, 5)); // Output: [2, 4, 16, 256, 65536]
console.log(squares(3, 3)); // Output: [3, 9, 81]
console.log(squares(2, 0)); // Output: []
