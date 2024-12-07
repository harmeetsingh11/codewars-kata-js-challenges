function generateSequence(n) {
  // Determine the sign of the series (positive or negative)
  const sign = n < 0 ? -1 : 1;
  const length = Math.abs(n) + 1;

  // Generate the sequence using a formula for the nth triangular number
  return Array.from({ length }, (_, i) => (sign * (i * (i + 1))) / 2);
}

// Examples
console.log(generateSequence(5)); // [0, 1, 3, 6, 10, 15]
console.log(generateSequence(-5)); // [0, -1, -3, -6, -10, -15]
console.log(generateSequence(7)); // [0, 1, 3, 6, 10, 15, 21, 28]

/* 
Explanation

Triangular Number Formula:
The nth term of the sequence is the sum of numbers from 0 to n, which can be computed using the formula:
Tn=n*(n+1)/2
​This avoids explicitly summing all numbers, making the computation efficient.

Handle Sign:
If n is negative, all terms in the sequence are negative. We determine the sign based on whether n is positive or negative and apply it to each term.

Array Generation:
Use Array.from to generate the sequence. It takes two arguments:
{ length } creates an array of the desired length (abs(n) + 1).
(_, i) => is a mapping function where i is the current index, and the formula computes the corresponding term.

This approach efficiently computes the sequence with a time complexity of O(n).
*/
