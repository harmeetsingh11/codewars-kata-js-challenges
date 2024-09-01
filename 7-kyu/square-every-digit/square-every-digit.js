function squareDigits(num) {
  // Convert the number to a string so we can work with each digit individually.
  return Number(
    num
      .toString() // Step 1: Convert the number to a string.
      .split('') // Step 2: Split the string into an array of individual characters (digits).
      .map((digit) => Math.pow(digit, 2)) // Step 3: Use map to square each digit.
      .join('') // Step 4: Join the array of squared digits back into a single string.
  ); // Number() function converts the resulting string back to a number.
}

// Example:
// If num is 9119:
//
// Convert 9119 to string: "9119"
// Split into array: ['9', '1', '1', '9']
// Square each digit: [81, 1, 1, 81]
// Join back into string: "811181"
// Convert to number using Number(): 811181
// The function would return 811181.
