function multiply(n) {
  // Calculate the number of digits in the absolute value of n
  const digits = Math.abs(n).toString().length;

  // Multiply n by 5 raised to the power of the number of digits
  return n * Math.pow(5, digits);
}

/* 
Explanation:

Calculate Number of Digits:
Math.abs(n).toString().length gets the absolute value of n, converts it to a string, and counts the length of the string, which represents the number of digits.

Multiply by 5^digits:
We use Math.pow(5, digits) to calculate 5 raised to the power of digits.
Multiply n by this result to get the desired output.
*/
