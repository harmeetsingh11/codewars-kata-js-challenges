function persistence(num) {
  // Initialize a counter to keep track of the number of times the digits are multiplied
  let count = 0;

  // Continue the loop as long as the number has more than one digit
  while (num.toString().length > 1) {
    // Convert the number to a string, split it into an array of digits,
    // and multiply them together using the reduce() method.
    // The reduce() method automatically converts the string digits to numbers during multiplication.
    num = num
      .toString() // Convert the number to a string so it can be split into individual digits
      .split('') // Split the string into an array of individual characters (digits)
      .reduce((mul, num) => mul * num, 1); // Multiply all digits together

    // Increment the count to reflect one round of multiplication
    count++;
  }

  // Return the total number of multiplication rounds needed to reduce the number to a single digit
  return count;
}
