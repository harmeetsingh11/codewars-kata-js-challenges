function primeFactors(n) {
  const factors = {}; // Object to store prime factors and their counts
  let divisor = 2; // Start with the smallest prime number

  // Find prime factors and their exponents
  while (n > 1) {
    if (n % divisor === 0) {
      factors[divisor] = (factors[divisor] || 0) + 1;
      n /= divisor; // Divide by the prime factor
    } else {
      divisor++; // Move to the next possible prime
    }
  }

  // Construct the result string
  return Object.entries(factors)
    .map(([prime, exp]) => (exp > 1 ? `(${prime}**${exp})` : `(${prime})`))
    .join('');
}

// Explanation:
// 1. Factors Object:
// We use an object factors to store the prime numbers as keys and their exponents (counts) as values.

// 2. Prime Factorization:
// Start with the smallest prime divisor = 2.
// While n % divisor == 0, it means the divisor is a prime factor, so increment its count and divide n by the divisor.
// If n is not divisible by the current divisor, increment divisor to check the next possible prime.

// 3. Constructing the Result:
// Convert the factors object into an array of entries, where each entry is a prime factor and its exponent.
// If the exponent is 1, the format is (prime). If it's greater than 1, the format is (prime**exp).
// Finally, join the array elements into the required string format.
