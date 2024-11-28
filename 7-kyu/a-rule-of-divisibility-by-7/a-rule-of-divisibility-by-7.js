function seven(m) {
  let steps = 0; // Initialize step counter
  while (m >= 100) {
    // Continue until m has at most 2 digits
    const lastDigit = m % 10; // Extract the last digit
    m = Math.floor(m / 10) - 2 * lastDigit; // Update m using the rule
    steps++; // Increment step counter
  }
  return [m, steps]; // Return the last number and number of steps
}

/* 
Explanation:
Step Counter: The steps variable tracks the number of iterations needed.
Termination Condition: The while (m >= 100) ensures the loop continues until m is reduced to at most 2 digits.
Last Digit Extraction: m % 10 gives the last digit of the number.
Update Rule: Math.floor(m / 10) - 2 * lastDigit performs the transformation described in the problem.
Result: The final array [m, steps] is returned, containing the last computed number and the total number of steps.
*/
