function reverse(n) {
  let reversed = 0;

  // Loop until n becomes 0
  while (n !== 0) {
    // Extract the last digit of n
    const digit = n % 10;
    // Add the digit to the reversed number and shift existing digits left
    reversed = reversed * 10 + digit;
    // Remove the last digit from n by performing integer division
    n = (n - digit) / 10; // Ensures n remains an integer
  }

  return reversed;
}

console.log(reverse(123)); // Output: 321
console.log(reverse(-456)); // Output: -654
console.log(reverse(0)); // Output: 0

/* 
Explanation:
Extract the last digit: Use n % 10 to get the last digit of n.
Build the reversed number: Multiply the current reversed number by 10 to shift digits to the left and add the extracted digit.
Remove the last digit from n: Perform integer division using (n - digit) / 10 to avoid fractional results.
Repeat until n becomes 0: Continue extracting digits and building the reversed number.
This approach works efficiently with O(log₁₀(n)) complexity because the number of iterations is proportional to the number of digits in the input. It avoids string operations and adheres to the constraints.
*/
