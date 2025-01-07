function jumpingNumber(number) {
  // Convert the number to a string for easy digit-by-digit comparison
  const digits = number.toString();

  // Single-digit numbers are always Jumping numbers
  if (digits.length === 1) return 'Jumping!!';

  // Iterate through the digits to check the difference between adjacent digits
  for (let i = 0; i < digits.length - 1; i++) {
    // Calculate the absolute difference between two adjacent digits
    if (Math.abs(digits[i] - digits[i + 1]) !== 1) {
      return 'Not!!'; // Return "Not!!" if the condition is violated
    }
  }

  // If all adjacent digits satisfy the condition, it's a Jumping number
  return 'Jumping!!';
}

/* 
Explanation:

Convert to String: The number is converted to a string so that we can easily access each digit using indexing.

Handle Single-Digit Numbers: All single-digit numbers are automatically Jumping numbers.

Check Adjacent Digits: Loop through the digits of the number. For each adjacent pair of digits, calculate the absolute difference:
If the difference is not 1, immediately return "Not!!".

Return Result: If the loop completes without finding a violation, return "Jumping!!".

Efficiency:
The function runs in O(n), where n is the number of digits in the input number. This is efficient given the constraints.
The space complexity is O(1) additional space, apart from the input and output.
*/
