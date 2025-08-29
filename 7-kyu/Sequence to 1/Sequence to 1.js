/**
 * Generate a sequence from n to 1
 * If n > 0 → [n, n-1, ..., 1]
 * If n <= 0 → [n, n+1, ..., 1]
 * @param {number} n - Input number (range: -9999 < n < 9999)
 * @returns {number[]} - Sequence from n to 1
 */
function sequenceToOne(n) {
  const result = [];

  if (n > 0) {
    // Case 1: Positive n → count down to 1
    for (let i = n; i >= 1; i--) {
      result.push(i);
    }
  } else {
    // Case 2: Negative or zero → count up to 1
    for (let i = n; i <= 1; i++) {
      result.push(i);
    }
  }

  return result;
}

// ---- Examples ----
console.log(sequenceToOne(5)); // [5, 4, 3, 2, 1]
console.log(sequenceToOne(-1)); // [-1, 0, 1]
console.log(sequenceToOne(1)); // [1]
console.log(sequenceToOne(0)); // [0, 1]

/*
We need to return a sequence from `n` down to `1` **if n is positive**, and from `n` up to `1` **if n is negative or zero**.

---
### Explanation

* If `n > 0`: generate numbers decreasing from `n` to `1`.
  Example: `n=5 → [5,4,3,2,1]`
* If `n <= 0`: generate numbers increasing from `n` to `1`.
  Example: `n=-1 → [-1,0,1]`

Since the range is limited (`-9999 < n < 9999`), an **iterative loop** is the simplest, most efficient, and memory-friendly solution.
---

### ⚡ Why this is optimal?

* **O(|n|)** time complexity (only loop once through the required range).
* **O(|n|)** space complexity (just the output array).
* Handles negative, zero, and positive values cleanly.
* No unnecessary sorting or array manipulation.

---
*/
