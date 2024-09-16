function digPow(n, p) {
  // Convert the number 'n' to a string, then split it into individual digits
  let sumOfDigits = n
    .toString() // Convert the number to a string
    .split('') // Split the string into an array of digits (as strings)
    .reduce(
      // Use reduce to calculate the sum of each digit raised to the power of 'p' plus its index position
      (sum, num, index) => sum + Math.pow(num, p + index),
      0 // Initialize the sum at 0
    );

  // Check if the sum of the powered digits is divisible by 'n'
  // If true, return the quotient of the division, else return -1
  return sumOfDigits % n === 0 ? sumOfDigits / n : -1;
}
