function predictAge(...ages) {
  // Square each age, sum them up, take the square root, and divide by 2
  return Math.floor(
    Math.sqrt(ages.reduce((sum, age) => sum + age ** 2, 0)) / 2
  );
}

/*
Explanation:
Input Handling: The ...ages syntax captures all input arguments as an array.
Square and Sum: Use reduce to iterate over the array and calculate the sum of squares (age ** 2).
Square Root and Division: Compute the square root of the sum and divide by 2.
Round Down: Use Math.floor to round the final result down to the nearest integer.
*/
