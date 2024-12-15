function calcDifference(str) {
  // Convert each character to its ASCII value and join to form total1
  const total1 = str
    .split('') // Split the string into characters
    .map((char) => char.charCodeAt(0)) // Convert each character to ASCII code
    .join(''); // Join the ASCII codes to form a single number as a string

  // Replace '7' with '1' in total1 to create total2
  const total2 = total1.replace(/7/g, '1');

  // Helper function to compute the sum of digits in a number string
  const sumDigits = (numStr) =>
    numStr.split('').reduce((sum, digit) => sum + Number(digit), 0);

  // Calculate the digit sums of total1 and total2
  const sum1 = sumDigits(total1);
  const sum2 = sumDigits(total2);

  // Return the difference between the two sums
  return sum1 - sum2;
}

// Example
console.log(calcDifference('ABC')); // Output: 6

/* 
Explanation:

Convert Characters to ASCII:
The map(char => char.charCodeAt(0)) step turns each character in the string into its ASCII code.
The .join("") method concatenates all ASCII values into a single string.

Replace '7' with '1':
total1.replace(/7/g, "1") replaces every occurrence of the digit 7 with 1 in total1.

Sum the Digits:
The helper function sumDigits splits the string into individual digits, converts them to numbers, and calculates their sum using .reduce.

Calculate the Difference:
The difference between the sums of the digits in total1 and total2 is computed and returned.
*/
