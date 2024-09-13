function expandedForm(num) {
  // Convert the number to a string and split it into an array of its individual digits
  let strArr = num.toString().split('');

  // Initialize an empty array to store the expanded parts of the number
  let result = [];

  // Loop through each digit in the string array
  for (let i = 0; i < strArr.length; i++) {
    // Multiply the current digit by 10 raised to the power of its position in the number
    // (number of digits left in the number determines its place value)
    let expandedNum = strArr[i] * Math.pow(10, strArr.length - i - 1);

    // If the expanded number is greater than 0, add it to the result array
    expandedNum > 0 && result.push(String(expandedNum));
  }

  // Join the elements of the result array with ' + ' to return the expanded form
  return result.join(' + ');
}

// EXAMPLE:
// For the input 70304, the steps would be:

// Convert to string and split: ["7", "0", "3", "0", "4"]
// Calculate expanded values: ["70000", "0", "300", "0", "4"]
// Non-zero values are pushed to the result: ["70000", "300", "4"]
// Join the array with ' + ': "70000 + 300 + 4"
// The output is "70000 + 300 + 4".
