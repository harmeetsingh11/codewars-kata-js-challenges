function convertFracs(lst) {
  // Helper function to compute GCD of two numbers
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  // Helper function to compute LCM of two numbers
  const lcm = (a, b) => (a * b) / gcd(a, b);

  // Compute the least common denominator (D) for all fractions
  const commonDenom = lst.reduce((acc, [, denom]) => lcm(acc, denom), 1);

  // Map the fractions to the new common denominator and format the result
  return lst
    .map(
      ([numer, denom]) => `(${numer * (commonDenom / denom)},${commonDenom})`
    )
    .join('');
}

/* 
Explanation:

GCD Function:
Computes the greatest common divisor of two numbers using the Euclidean algorithm. This is used to simplify calculations for the LCM.

LCM Function:
Computes the least common multiple of two numbers using the relationship:
LCM(a,b)=(axb)/GCD(a,b)
​
Calculate Common Denominator:
Iteratively calculate the least common multiple of all denominators in the input list using Array.reduce().

Normalize Fractions:
For each fraction, scale the numerator to match the new common denominator by multiplying it by the appropriate factor (commonDenom/denom).

Return Result:
The result is a list of fractions with the same denominator and adjusted numerators.
we format each fraction as a string in the required form (N, D) and join these strings together.
The .join('') method combines all formatted strings into one continuous string without separators, matching the desired output.
*/
