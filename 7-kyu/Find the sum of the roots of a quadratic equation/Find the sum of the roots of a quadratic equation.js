function sumOfRoots(a, b, c) {
  // Calculate the discriminant: D = b^2 - 4ac
  let D = b * b - 4 * a * c;

  // If discriminant is negative, no real roots exist, return null
  if (D < 0) return null;

  // Calculate the sum of roots using the formula: x1 + x2 = -b/a
  return parseFloat((-b / a).toFixed(2));
}

console.log(sumOfRoots(1, -3, 2)); // 3.00 (roots: 1 and 2)
console.log(sumOfRoots(1, 2, 1)); // -2.00 (root: -1 repeated)
console.log(sumOfRoots(1, 0, 1)); // null (no real roots)

/* 
### Explanation:
1. **Discriminant Calculation**: The discriminant \( D = b^2 - 4ac \) determines the nature of the roots.
2. **Check for Real Roots**: If \( D < 0 \), the equation has no real solutions, so return `null`.
3. **Sum of Roots Formula**: Using the quadratic formula, the sum of the roots is derived as \( x_1 + x_2 = -b/a \).
4. **Rounding**: The result is rounded to 2 decimal places using `.toFixed(2)`, and `parseFloat` ensures it's returned as a number.
*/
