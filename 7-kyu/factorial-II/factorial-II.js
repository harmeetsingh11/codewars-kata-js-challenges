function factorial(n) {
  // Validate the input range; throw an error if out of bounds.
  if (n < 0 || n > 12) {
    throw new RangeError('Input must be between 0 and 12 inclusive.');
  }

  // Use a simple iterative approach to calculate factorial.
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i; // Multiply result by the current number.
  }

  return result; // Return the final factorial value.
}

/* 
Explanation:

Input Validation: The function first checks if n is within the range 0 to 12. If it's not, a RangeError is thrown. This is necessary because factorials grow very large, and values beyond 12! can exceed JavaScript's number handling efficiently.

Iterative Calculation: Instead of recursion, a simple loop multiplies numbers from 2 to n (skipping 1 as it doesn't affect the result). This avoids potential stack overflow issues with recursion for larger inputs.

Edge Case for 0!: The loop does not run when n is 0, so the initialized value result = 1 handles the special case where 0! = 1.
*/
