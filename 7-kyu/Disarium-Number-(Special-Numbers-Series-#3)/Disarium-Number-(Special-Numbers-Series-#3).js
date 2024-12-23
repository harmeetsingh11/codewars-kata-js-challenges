function disariumNumber(n) {
  // Convert number to string and split into digits, calculate sum of powered digits
  const sum = String(n)
    .split('') // Split number into array of digits
    .reduce((acc, digit, index) => acc + Math.pow(Number(digit), index + 1), 0); // Calculate sum of digits raised to their positions

  // Check if the sum equals the original number and return result
  return sum === n ? 'Disarium !!' : 'Not !!';
}

// Example
console.log(disariumNumber(89)); // "Disarium !!"
console.log(disariumNumber(564)); // "Not !!"

/* 
Explanation:

Convert the Number to a String:
String(n) converts the number n to a string for easy manipulation of digits.

Split Digits:
.split('') splits the string into an array of its individual digits.

Calculate Sum of Powered Digits:
.reduce((acc, digit, index) => acc + Math.pow(Number(digit), index + 1), 0):
acc is the accumulator to keep the running sum.
digit is the current digit in the array.
index is the position of the digit (starting at 0).
Math.pow(Number(digit), index + 1) raises the digit to its position (1-based index).

Compare and Return:
Compare sum with the original number n.
Return "Disarium !!" if equal, otherwise "Not !!".
*/
