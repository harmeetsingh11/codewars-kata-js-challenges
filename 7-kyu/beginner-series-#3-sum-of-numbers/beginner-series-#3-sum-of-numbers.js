function getSum(a, b) {
  let sum = 0; // Initialize a variable to hold the sum

  // Check if 'a' and 'b' are not equal
  if (a !== b) {
    // Loop through all numbers from the smaller of 'a' or 'b' to the larger of 'a' or 'b'
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
      sum += i; // Add each number to 'sum'
    }
  } else {
    // If 'a' and 'b' are equal, just return one of them since the sum of one number is itself
    return a;
  }

  // Return the total sum of numbers from 'a' to 'b' (or vice versa)
  return sum;
}
