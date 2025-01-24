function sumFractions(lst) {
  // If the list is empty, return null
  if (lst.length === 0) return null;

  // Helper function to calculate the greatest common divisor (GCD)
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  // Reduce the list of fractions to a single numerator and denominator
  let [numerator, denominator] = lst.reduce(
    ([num1, den1], [num2, den2]) => {
      // Find the least common denominator (LCD)
      const lcd = (den1 * den2) / gcd(den1, den2);

      // Adjust numerators to match LCD and sum them
      const sumNumerator = num1 * (lcd / den1) + num2 * (lcd / den2);

      // Return the resulting numerator and denominator
      return [sumNumerator, lcd];
    },
    [0, 1] // Initial numerator and denominator (representing 0/1)
  );

  // Simplify the fraction by dividing by the GCD
  const divisor = gcd(numerator, denominator);
  numerator /= divisor;
  denominator /= divisor;

  // If the fraction is an integer, return the integer
  if (denominator === 1) return numerator;

  // Otherwise, return the fraction in the form [N, D]
  return [numerator, denominator];
}

console.log(
  sumFractions([
    [1, 2],
    [1, 3],
    [1, 4],
  ])
); // Output: [13, 12]
console.log(
  sumFractions([
    [1, 3],
    [5, 6],
  ])
); // Output: [7, 6]
console.log(sumFractions([])); // Output: null

/* 
Explanation:

Edge Case: Check if the input list is empty and return null if true.

GCD Calculation: Use the Euclidean algorithm to compute the greatest common divisor (GCD), a utility function for simplifying fractions.

Reduce Function: Use reduce to iterate through the list of fractions:
Compute the least common denominator (LCD) for two fractions.
Adjust numerators to match the LCD and sum them.
Return the resulting numerator and denominator for the next iteration.

Simplify Fraction: After summing all fractions, simplify the resulting fraction by dividing both numerator and denominator by their GCD.

Return Result: If the denominator is 1, return the numerator as an integer. Otherwise, return the simplified fraction [N, D].
*/
