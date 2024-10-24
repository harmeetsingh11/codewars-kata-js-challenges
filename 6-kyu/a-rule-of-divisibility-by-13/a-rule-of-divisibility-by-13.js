function thirt(n) {
  // Define the repeating sequence used in the modulo 13 calculation
  const sequence = [1, 10, 9, 12, 3, 4];

  // Helper function to perform one iteration of the sum based on the sequence
  const sumDigits = (num) =>
    String(num)
      .split('') // Convert the number to string, then to an array of digits
      .reverse() // Reverse the digits to match the rightmost multiplication
      .reduce(
        (sum, digit, idx) => sum + digit * sequence[idx % sequence.length],
        0
      );
  // Multiply each digit by the corresponding sequence value and accumulate

  let result = sumDigits(n); // Initial sum

  // Keep iterating until the sum becomes stationary (doesn't change)
  while (result !== sumDigits(result)) {
    result = sumDigits(result);
  }

  return result; // Return the final stationary result
}

/* 
Explanation:

Sequence Definition:
The repeating sequence [1, 10, 9, 12, 3, 4] is defined and will be used to multiply the digits of the number.

sumDigits Function:
This helper function performs one iteration of the multiplication and summation process:
Convert the number n to a string, split it into an array of digits, and reverse it.
Use .reduce() to calculate the sum of the products of each digit multiplied by the corresponding number in the sequence. The sequence is repeated using idx % sequence.length.

Main Logic:
Start with an initial sum of the number by calling sumDigits(n).
Repeat the summation process until the result becomes stationary, i.e., when the sum doesn't change between iterations.

Efficiency:
The function iterates only as many times as necessary until the result stabilizes, making it both concise and efficient.
*/
