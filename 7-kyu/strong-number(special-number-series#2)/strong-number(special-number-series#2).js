function isStrongNumber(num) {
  // Helper function to calculate factorial of a number
  const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

  // Convert number to string, split into digits, calculate the sum of their factorials
  const sumOfFactorials = String(num)
    .split('') // Split the number into its digits
    .map(Number) // Convert each digit from string to number
    .reduce((sum, digit) => sum + factorial(digit), 0); // Sum up the factorial of each digit

  // Compare the sum of factorials with the original number and return the result
  return sumOfFactorials === num ? 'STRONG!!!!' : 'Not Strong !!';
}

/* 
Explanation:

Factorial Function:
Defined as a recursive function factorial(n) to compute n!. It stops recursion at n <= 1, returning 1.
Recursive definition is concise and fits well for this purpose.

Process the Digits:
Convert the number to a string and split it into individual digits using String(num).split('').
Convert each digit back to a number with .map(Number).

Sum of Factorials:
Use .reduce() to compute the sum of the factorials of the digits.

Comparison:
Compare the sum of the factorials with the original number to determine if it is a strong number.

Return Result:
Return "STRONG!!!!" if the condition matches; otherwise, return "Not Strong !!".
*/
