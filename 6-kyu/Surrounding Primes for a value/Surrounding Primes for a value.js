/**
 * Check if a number is prime
 * Optimized: trial division up to sqrt(num), skip even numbers
 */
function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  let limit = Math.sqrt(num);
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

/**
 * Returns [largest prime < n, smallest prime > n]
 */
function primeBefAft(n) {
  // Find prime before n
  let bef = n - 1;
  while (bef > 1 && !isPrime(bef)) bef--;

  // Find prime after n
  let aft = n + 1;
  while (!isPrime(aft)) aft++;

  return [bef, aft];
}

// Sample tests
console.log(primeBefAft(100)); // [97, 101]
console.log(primeBefAft(97)); // [89, 101]
console.log(primeBefAft(101)); // [97, 103]
console.log(primeBefAft(120)); // [113, 127]
console.log(primeBefAft(130)); // [127, 131]

/*
### Explanation

1. **`isPrime(num)`**

   * Handles edge cases quickly (`<2`, `2`, even numbers).
   * Only checks divisors up to √n.
   * Skips even numbers beyond 2 for speed.

2. **`primeBefAft(n)`**

   * Start from `n-1` and decrement until finding the first prime.
   * Start from `n+1` and increment until finding the first prime.
   * Return `[bef, aft]`.

3. **Efficiency**

   * Each primality check is `O(√n)`.
   * Since primes are relatively frequent, the while loop won’t run too many times.
   * Works very efficiently up to the problem’s limit (`200,000`).

*/
