function notPrimeButPrimeDigits(a, b) {
  // Set of allowed prime digits
  const primeDigits = new Set(['2', '3', '5', '7']);

  // Helper to check if number is prime
  const isPrime = (n) => {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i * i <= n; i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  };

  const result = [];

  for (let i = a; i < b; i++) {
    const digits = String(i);

    // Check if all digits are in primeDigits
    if ([...digits].every((d) => primeDigits.has(d))) {
      // Include only if number is NOT prime
      if (!isPrime(i)) {
        result.push(i);
      }
    }
  }

  return result;
}

/* 
🔍 Explanation:

- primeDigits: A Set for O(1) digit lookups.
- isPrime(n): Fast primality check up to √n.
- The loop runs from a to b - 1:
    - Convert number to string → split into digits.
    - Check if every digit is in {2, 3, 5, 7}.
    - Then, if the number itself is not prime, add it to the result.

⚡️ Efficiency:
Uses short-circuiting with .every() and skips unnecessary work.
Efficient prime checking using odd step loop up to √n.
No external libraries or extra memory used.
*/
