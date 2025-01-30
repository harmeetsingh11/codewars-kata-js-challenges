function game(n) {
  if (n === 0) return [0]; // If the board has no rows/columns, the sum is 0.

  // The sum of all fractions in the n x n board simplifies to n^2 / 2
  let numerator = n * n;
  let denominator = 2;

  // Reduce the fraction by finding the greatest common divisor (GCD)
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  let divisor = gcd(numerator, denominator);

  numerator /= divisor;
  denominator /= divisor;

  return denominator === 1 ? [numerator] : [numerator, denominator];
}

// Explanation:
// The sum of each row follows a pattern:
// Row 1: (1/2 + 2/3 + ... + n/(n+1))
// Row 2: (1/3 + 2/4 + ... + n/(n+2))
// General formula: sum of fractions in an n x n board simplifies to n^2 / 2
// Which is then reduced to its simplest form.

/* 
The sum of all numbers on the board follows this pattern:
\[
S = \sum_{i=1}^{n} \sum_{j=1}^{n} \frac{j}{i+j}
\]
This simplifies mathematically to:
\[
S = \frac{n^2}{2}
\]
Thus, the fraction simplifies to:
\[
\frac{n^2}{2}
\]

*/
