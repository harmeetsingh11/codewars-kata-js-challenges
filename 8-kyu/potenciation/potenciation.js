function power(x, y) {
  // Special case: 0^0 is defined as 1
  if (x === 0 && y === 0) return 1;

  // Initialize result to 1 (any number to the power of 0 is 1)
  let result = 1;

  // Multiply x by itself y times
  for (let i = 0; i < y; i++) {
    result *= x;
  }

  // Return the final result
  return result;
}

// Examples
console.log(power(2, 3)); // 8
console.log(power(0, 0)); // 1
console.log(power(5, 0)); // 1
console.log(power(3, 4)); // 81
