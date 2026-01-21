function only_oddDigPrimes(n) {
  // Check if a number is prime
  function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i * i <= num; i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // Check if number contains only odd digits
  function hasOnlyOddDigits(num) {
    while (num > 0) {
      const digit = num % 10;
      if (digit % 2 === 0) return false;
      num = Math.floor(num / 10);
    }
    return true;
  }

  let count = 0;
  let largestBelowOrEqual = null;

  // Find count and largest pure odd digit prime <= n
  for (let i = 3; i <= n; i += 2) {
    if (hasOnlyOddDigits(i) && isPrime(i)) {
      count++;
      largestBelowOrEqual = i;
    }
  }

  // Find smallest pure odd digit prime > n
  let nextAbove = n + 1;
  if (nextAbove % 2 === 0) nextAbove++;

  while (true) {
    if (hasOnlyOddDigits(nextAbove) && isPrime(nextAbove)) {
      break;
    }
    nextAbove += 2;
  }

  return [count, largestBelowOrEqual, nextAbove];
}

/* 

## ✅ Key Observations

1. **Pure odd digit primes**:

   * Must be **prime**
   * Must contain **only odd digits** → allowed digits: `1,3,5,7,9`
   * Any even digit (`0,2,4,6,8`) disqualifies the number

2. We must return **three values**:

   1. Count of pure odd digit primes `<= n`
   2. Largest pure odd digit prime `<= n`
   3. Smallest pure odd digit prime `> n`

3. Efficient approach:

   * Use a **fast primality test** (`√n`)
   * **Skip numbers with even digits early**
   * Iterate odd numbers only (except 2 which is invalid anyway)

---

## 🧠 Strategy

* Loop from `3` to `n` → count and track largest valid prime
* After `n`, keep checking numbers until the **next valid prime** is found
* Use helper functions:

  * `isPrime(num)`
  * `hasOnlyOddDigits(num)`

This keeps the solution **simple, fast, and readable**.

---

## 🧪 Example Outputs

```js
only_oddDigPrimes(20); // [7, 19, 31]
only_oddDigPrimes(40); // [9, 37, 53]
only_oddDigPrimes(13); // [5, 13, 17]
```

---

## ⏱️ Time & Space Complexity

* **Time Complexity:**
  `O(n √n)` in worst case (optimized by digit filtering and odd-only iteration)

* **Space Complexity:**
  `O(1)` (no extra storage used)

---

## 🏁 Final Notes

* Early digit filtering avoids unnecessary prime checks
* No precomputed sieve → memory efficient
* Clean, interview-ready, production-safe logic
*/
