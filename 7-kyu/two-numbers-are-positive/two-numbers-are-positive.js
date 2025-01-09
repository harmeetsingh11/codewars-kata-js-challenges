function twoArePositive(a, b, c) {
  // Count the number of positive numbers by checking if each number is greater than 0
  const positives = [a, b, c].filter((num) => num > 0).length;
  // Return true if exactly two numbers are positive, false otherwise
  return positives === 2;
}

// Test cases
console.log(twoArePositive(2, 4, -3)); // true
console.log(twoArePositive(-4, 6, 8)); // true
console.log(twoArePositive(4, -6, 9)); // true
console.log(twoArePositive(-4, 6, 0)); // false
console.log(twoArePositive(4, 6, 10)); // false
console.log(twoArePositive(-14, -3, -4)); // false
