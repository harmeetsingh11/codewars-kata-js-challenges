// GCD using Euclidean algorithm
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

// LCM function with zero check
const lcm = (a, b) => (a === 0 || b === 0 ? 0 : (a * b) / gcd(a, b));

// Main function to calculate total "savings"
function sumDifferencesBetweenProductsAndLCMs(pairs) {
  return pairs.reduce((sum, [a, b]) => {
    const product = a * b;
    const leastCommonMultiple = lcm(a, b);
    return sum + (product - leastCommonMultiple); // Add difference
  }, 0);
}

// Example usage
console.log(
  sumDifferencesBetweenProductsAndLCMs([
    [15, 18],
    [4, 5],
    [12, 60],
    [0, 0],
    [0, 7],
  ])
); // Should work correctly, e.g., Output: 1092
