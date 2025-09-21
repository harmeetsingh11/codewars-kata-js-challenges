/**
 * Finds the arrangement of students into groups of consecutive sizes.
 * @param {number} n - Total number of students.
 * @returns {number[]} - Array of group sizes in descending order, or [-1] if impossible.
 */
function arrangeStudents(n) {
  // Try different group counts (k = number of groups)
  for (let k = 2; (k * (k + 1)) / 2 <= n; k++) {
    // Sum of k consecutive numbers ending at x:
    // n = k*(2x - k + 1)/2  =>  2n/k + k - 1 = 2x
    if ((2 * n) % k === 0) {
      let numerator = (2 * n) / k + k - 1;
      if (numerator % 2 === 0) {
        let x = numerator / 2; // largest group
        let start = x - k + 1; // smallest group
        if (start > 0) {
          // Build the sequence from x down to start
          return Array.from({ length: k }, (_, i) => x - i);
        }
      }
    }
  }
  return [-1]; // No arrangement possible
}

// Example runs:
console.log(arrangeStudents(14)); // [5,4,3,2]
console.log(arrangeStudents(10)); // [4,3,2,1]
console.log(arrangeStudents(5)); // [3,2]
console.log(arrangeStudents(2)); // [-1]

/*
This is a **number partitioning problem** with a constraint:

* We need to split `n` students into groups of **consecutive integers** (e.g., `5,4,3,2`).
* Groups must be in **decreasing order**.
* We want the **minimum number of groups**.
* If no such arrangement exists → return `[-1]`.

---

### 🔑 Key Insight

The sum of `k` consecutive integers from `x-k+1` to `x` is:

$$
S = \frac{k(2x - k + 1)}{2}
$$

We need `S = n`.

* Rearranging gives us a quadratic in terms of `x`.
* If we can find integer `x` for some `k`, then groups exist.

We want the **smallest possible `k`** (minimum groups).

---

### ⚡ Optimized Approach

1. Iterate `k` (number of groups) from **2** upwards.
   (since 1 group = whole class = trivial but not valid consecutive sequence)
2. Check if there exists an integer `x` (largest group size) such that the sum of `k` consecutive numbers = `n`.
3. If valid, build the sequence `[x, x-1, ..., x-k+1]` and return it.
4. If no `k` works, return `[-1]`.

This works efficiently because the sum grows quickly, so we don’t need to check large `k`.
---

### 📝 Explanation with Example

For `n = 14`:

* Try `k=2`: not possible.
* Try `k=3`: not possible.
* Try `k=4`:

  $$
  2n/k = 28/4 = 7,\ \ 7 + (4-1) = 10 \implies 2x = 10 \implies x=5
  $$

  Sequence = `[5,4,3,2]`. ✅

For `n=2`:

* No `k` works → return `[-1]`.
*/
