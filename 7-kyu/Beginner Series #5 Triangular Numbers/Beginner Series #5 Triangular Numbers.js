function isTriangularNumber(T) {
  // Calculate the discriminant (1 + 8 * T)
  let discriminant = 1 + 8 * T;

  // Check if the discriminant is a perfect square
  let sqrtDiscriminant = Math.sqrt(discriminant);

  // If the square root is not an integer, it's not a triangular number
  if (sqrtDiscriminant !== Math.floor(sqrtDiscriminant)) {
    return false;
  }

  // Calculate the potential value of n using the quadratic formula
  let n = (-1 + sqrtDiscriminant) / 2;

  // Check if n is a positive integer
  return n === Math.floor(n) && n > 0;
}

// Example Usage
console.log(isTriangularNumber(6)); // true
console.log(isTriangularNumber(10)); // true
console.log(isTriangularNumber(7)); // false

/*
To check if a given number `T` is a triangular number, we can use the formula for the nth triangular number:

\[
T(n) = \frac{n \cdot (n + 1)}{2}
\]

We want to determine if there exists an integer `n` such that `T = T(n)`. To solve this, we can rearrange the equation:

\[
n^2 + n - 2T = 0
\]

This is a quadratic equation, which can be solved using the quadratic formula:

\[
n = \frac{-1 \pm \sqrt{1 + 8T}}{2}
\]

For `n` to be a valid triangular number, the discriminant \( 1 + 8T \) must be a perfect square, and the result of the quadratic formula must give a positive integer value for `n`.
*/

/*
Explanation:
1. **Discriminant Calculation**: First, we calculate `1 + 8T` (the discriminant) to check if it’s a perfect square.
2. **Perfect Square Check**: We check if the square root of the discriminant is an integer using `Math.sqrt()` and `Math.floor()`.
3. **Quadratic Formula**: If the discriminant is a perfect square, we use the quadratic formula to find `n` and check if it's a positive integer.
4. **Final Check**: If `n` is a positive integer, then `T` is a triangular number, otherwise, it’s not.

This method is efficient because it directly uses mathematical properties of triangular numbers to check if a number is triangular in constant time.
*/
