function mixedFraction(s) {
  // Parse input and convert to numbers
  const [x, y] = s.split('/').map(Number);

  // Handle division by zero
  if (y === 0) throw new Error('Division by zero');

  // If numerator is zero, result is 0
  if (x === 0) return '0';

  // Calculate the integer part
  const integerPart = Math.trunc(x / y);

  // Calculate the remainder (numerator of the fractional part)
  let remainder = Math.abs(x % y);

  // Calculate the absolute value of the denominator
  const denominator = Math.abs(y);

  // If no remainder, return the integer part
  if (remainder === 0) return `${integerPart}`;

  // Simplify the fraction using the GCD
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const divisor = gcd(remainder, denominator);

  remainder /= divisor;
  const simplifiedDenominator = denominator / divisor;

  // Construct the result
  const fractionPart = `${remainder}/${simplifiedDenominator}`;
  return integerPart !== 0
    ? `${integerPart < 0 || x < 0 !== y < 0 ? '-' : ''}${Math.abs(
        integerPart
      )} ${fractionPart}`
    : `${x < 0 !== y < 0 ? '-' : ''}${fractionPart}`;
}

console.log(mixedFraction('42/9')); // "4 2/3"
console.log(mixedFraction('6/3')); // "2"
console.log(mixedFraction('4/6')); // "2/3"
console.log(mixedFraction('0/18891')); // "0"
console.log(mixedFraction('-10/7')); // "-1 3/7"
console.log(mixedFraction('0/0')); // Error: Division by zero

/* 
Explanation:

Input Parsing:
Split the input string on / to extract numerator (x) and denominator (y) and convert them to numbers.

Edge Cases:
If y === 0, throw a division by zero error.
If x === 0, return "0" since the fraction evaluates to zero.

Integer Part:
Use Math.trunc(x / y) to compute the integer part of the fraction.

Fractional Part:
Compute the remainder using x % y and take its absolute value for simplicity.
Compute the absolute value of the denominator for the same reason.

Simplify the Fraction:
Use the Euclidean algorithm to compute the greatest common divisor (GCD).
Divide both the numerator (remainder) and denominator by the GCD to simplify the fraction.

Result Construction:
If there’s no remainder, return the integer part.
If there’s a remainder:
Combine the integer part and the simplified fraction, adjusting the sign based on the original inputs.
*/
