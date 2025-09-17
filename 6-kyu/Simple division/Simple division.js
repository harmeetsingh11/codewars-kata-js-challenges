/**
 * Check if 'a' is divisible by all prime factors of 'b'
 * @param {number} a - The number to check divisibility
 * @param {number} b - The number whose prime factors are considered
 * @returns {boolean} - True if divisible by all prime factors, else false
 */
function solve(a, b) {
  const primeFactors = new Set();

  // Extract factor 2 separately
  while (b % 2 === 0) {
    primeFactors.add(2);
    b /= 2;
  }

  // Extract odd prime factors
  for (let i = 3; i * i <= b; i += 2) {
    while (b % i === 0) {
      primeFactors.add(i);
      b /= i;
    }
  }

  // If b > 2, it itself is a prime
  if (b > 2) primeFactors.add(b);

  // Check if 'a' is divisible by all prime factors
  for (let p of primeFactors) {
    if (a % p !== 0) return false;
  }

  return true;
}

// Example test cases
console.log(solve(15, 12)); // false (15 not divisible by 2)
console.log(solve(60, 12)); // true (60 divisible by 2 & 3)
console.log(solve(7, 49)); // true (7 divisible by 7)
console.log(solve(10, 5)); // true (10 divisible by 5)
console.log(solve(15, 75)); // true (prime factors {3,5}, 15 divisible by both)

/*
### Problem Understanding

We are asked:

> Check if number `a` is divisible by **all the prime factors** of number `b`.

Example:
`solve(15, 12)`

* Prime factors of 12 = {2, 3}
* 15 is divisible by 3 ✅ but **not divisible by 2 ❌**
  So → **False**.

---

### Approach

1. **Find prime factors of `b`:**

   * Only unique prime factors matter.
   * Example: 12 → {2, 3}, not `[2,2,3]`.
2. **Check divisibility:**

   * For each prime factor `p` of `b`, check if `a % p === 0`.
   * If all pass → return `true`, else `false`.

---

### Optimizations

* We only need to check **up to √b** to factorize efficiently.
* Use a **Set** to avoid duplicate prime factors.
* Time complexity: `O(√b + log a)` → efficient.

---
### Explanation

* We factorize `b` using trial division:

  * Divide out `2` fully.
  * Check odd numbers up to √b.
  * If any prime factor remains (`b > 2`), add it.
* Store prime factors in a **Set** (ensures uniqueness).
* Finally, check if `a` is divisible by all stored prime factors.
*/
