// Helper function to find all prime numbers up to n using the Sieve of Eratosthenes
function findPrimes(n) {
  const isPrime = Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return isPrime.map((val, idx) => (val ? idx : null)).filter((val) => val);
}

// Function to compute the prime factorization of n!
function decomp(n) {
  // Get all prime numbers up to n
  const primes = findPrimes(n);
  const factors = {};

  // Calculate the power of each prime in n!
  for (const prime of primes) {
    let power = 0;
    let k = prime;

    while (k <= n) {
      power += Math.floor(n / k); // Count multiples of the prime
      k *= prime;
    }

    factors[prime] = power;
  }

  // Format the result as a string
  return Object.entries(factors)
    .map(([prime, power]) => (power === 1 ? prime : `${prime}^${power}`))
    .join(' * ');
}

// Example
console.log(decomp(12)); // "2^10 * 3^5 * 5^2 * 7 * 11"
console.log(decomp(22)); // "2^19 * 3^9 * 5^4 * 7^3 * 11^2 * 13 * 17 * 19"
console.log(decomp(25)); // "2^22 * 3^10 * 5^6 * 7^3 * 11^2 * 13 * 17 * 19 * 23"

/* 
Explanation:

Finding Primes:
The findPrimes function uses the Sieve of Eratosthenes to efficiently find all prime numbers up to n. This ensures we only work with prime factors.

Calculating Powers:
For each prime number, calculate its total power in n! by summing Math.floor(n / k) for powers of the prime (k = prime, prime^2, prime^3, ...) until k > n.

Formatting Result:
The factors object maps each prime to its power. If the power is 1, only the prime is added to the result string; otherwise, it's represented as prime^power.

Efficiency:
The sieve ensures prime calculation is efficient (O(n log log n)).
Calculating powers of primes is proportional to the number of multiples in n!, making the overall approach efficient even for large n.
*/
