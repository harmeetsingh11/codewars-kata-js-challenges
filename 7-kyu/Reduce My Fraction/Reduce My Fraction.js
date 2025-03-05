function gcd(a, b) {
  // Calculate the greatest common divisor (GCD) using the Euclidean algorithm
  return b === 0 ? a : gcd(b, a % b);
}

function reduceFraction([numerator, denominator]) {
  // Get the GCD of numerator and denominator
  const divisor = gcd(numerator, denominator);

  // Divide both numerator and denominator by the GCD to simplify the fraction
  return [numerator / divisor, denominator / divisor];
}

console.log(reduceFraction([45, 120])); // Output: [3, 8]

/*
### Explanation:
1. The `gcd` function calculates the Greatest Common Divisor (GCD) using the **Euclidean algorithm**, which is efficient with a time complexity of **O(log(min(a, b)))**.
2. The `reduceFraction` function:
   - Computes the GCD of the numerator and denominator.
   - Divides both by the GCD to simplify the fraction.
*/
