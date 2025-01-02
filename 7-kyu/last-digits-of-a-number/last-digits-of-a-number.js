function lastDigits(N, D) {
  // Convert the number to a string and split it into an array of digits
  const digits = String(N).split('');

  // Handle special cases:
  // If D <= 0, return an empty list
  if (D <= 0) return [];

  // If D is greater than or equal to the number of digits, return all digits
  if (D >= digits.length) return digits.map(Number);

  // Otherwise, return the last D digits as numbers
  return digits.slice(-D).map(Number);
}

// Examples
console.log(lastDigits(1, 1)); // [1]
console.log(lastDigits(1234, 2)); // [3, 4]
console.log(lastDigits(637547, 6)); // [6, 3, 7, 5, 4, 7]
console.log(lastDigits(1234, 0)); // []
console.log(lastDigits(1234, 5)); // [1, 2, 3, 4]

/* 
Explanation:

Convert to String:
String(N).split('') converts the integer N into a string and splits it into an array of its digits.

Special Cases:
If D <= 0, we directly return an empty array.
If D is greater than or equal to the number of digits in N (i.e., D >= digits.length), we return all the digits.

Extract Last D Digits:
Use slice(-D) to extract the last D elements from the digits array.
Then, use .map(Number) to convert the string digits back to numbers.
*/
