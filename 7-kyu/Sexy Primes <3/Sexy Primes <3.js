/**
 * Checks whether two numbers form a pair of Sexy Primes (difference of 6).
 * @param {number} x - First positive integer.
 * @param {number} y - Second positive integer.
 * @returns {boolean} - True if x and y are sexy primes, false otherwise.
 */
function sexyPrime(x, y) {
  // Helper function to check if a number is prime
  const isPrime = (n) => {
    if (n < 2) return false; // 0, 1, and negatives are not prime
    if (n === 2 || n === 3) return true; // 2 and 3 are prime
    if (n % 2 === 0 || n % 3 === 0) return false; // Eliminate multiples of 2 and 3

    // Check divisors up to sqrt(n), skipping even numbers
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
  };

  // Check if both numbers are prime and differ by exactly 6
  return Math.abs(x - y) === 6 && isPrime(x) && isPrime(y);
}

/*

### **Explanation**

1. **Prime Check (`isPrime`)**

   * **Elimination early**: Any number `< 2` is not prime.
   * Check for **small primes** (2, 3) directly.
   * Skip even numbers and multiples of 3 early for efficiency.
   * Only test possible factors up to `√n` using the `6k ± 1` optimization (fast for large numbers).

2. **Sexy Prime Condition**

   * Sexy primes are **exactly 6 apart**: `Math.abs(x - y) === 6`.
   * Both numbers must be **prime**: `isPrime(x) && isPrime(y)`.

---

✅ **Complexity**

* **Prime check**: `O(√n)` per number.
* **Overall**: `O(√x + √y)` → efficient for large inputs.
*/
