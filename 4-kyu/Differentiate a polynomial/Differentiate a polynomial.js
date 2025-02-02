function differentiate(poly, x) {
  return (
    poly
      // Match each term in the polynomial
      .match(/[-+]?\d*x?(?:\^\d+)?/g)
      .filter(Boolean) // Remove empty strings
      .map((term) => {
        // Extract coefficient and exponent from each term
        let match = term.match(/([-+]?\d*)x?(?:\^(\d+))?/);
        if (!match) return [0, 0]; // If no match, return zero contribution

        let coef = match[1]; // Extract coefficient
        let exp = match[2] || (term.includes('x') ? '1' : '0'); // Default exponent

        // Handle cases where coefficient is implied (e.g., "x" => "1x", "-x" => "-1x")
        coef = coef === '-' || coef === '+' || coef === '' ? coef + '1' : coef;

        return [parseInt(coef, 10), parseInt(exp, 10)]; // Convert to integers
      })
      // Apply differentiation rule: d/dx [ax^b] = a * b * x^(b-1)
      .map(([coef, exp]) => (exp > 0 ? coef * exp * x ** (exp - 1) : 0))
      // Sum up all differentiated terms
      .reduce((sum, val) => sum + val, 0)
  );
}

// Test cases
console.log(differentiate('12x+2', 3)); // Output: 12 (Derivative of 12x is 12, constant 2 disappears)
console.log(differentiate('x^2+3x+2', 3)); // Output: 9 (Derivative: 2x + 3, at x=3 => 6+3=9)
console.log(differentiate('-5x^3+4x^2-7x+10', 2)); // Output: -39 (Derivative: -15x^2 + 8x - 7, at x=2 => -15(4) + 8(2) -7 = -39)

/* 
Explanation:

1. **Splitting Terms**:
   - Uses a regular expression to match polynomial terms (`[-+]?\\d*x?(?:\\^\\d+)?`).
   - Filters out empty matches.

2. **Extracting Coefficients and Exponents**:
   - Uses regex to extract the coefficient and exponent.
   - Defaults:
     - If no exponent is given, assumes `1` (e.g., `"x"` → `"x^1"`).
     - If no coefficient is given, assumes `1` or `-1` (e.g., `"x"` → `"1x"`, `"-x"` → `"-1x"`).
     - If no `x` is present, assumes exponent `0` (constant term).

3. **Applying Differentiation Rule**:
   - Differentiates each term using the rule:  
     \[
     \frac{d}{dx} [ax^b] = a \cdot b \cdot x^{b-1}
     \]
   - Constants (exponent `0`) differentiate to `0`.

4. **Summing Up the Result**:
   - Uses `.reduce()` to sum all differentiated terms.
*/
