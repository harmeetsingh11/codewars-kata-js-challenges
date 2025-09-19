/**
 * Find the largest partition after inserting k commas
 * @param {string} s - number as string
 * @param {number} k - number of commas to insert
 * @returns {number} - largest partition value
 */
function solve(s, k) {
  let max = 0; // track largest number found

  /**
   * Backtracking function
   * @param {number} start - current index in string
   * @param {number} cuts - number of commas left to insert
   * @param {string[]} parts - collected partitions
   */
  function backtrack(start, cuts, parts) {
    // Base case: all commas used → last part is remainder of string
    if (cuts === 0) {
      parts.push(s.slice(start));
      // Update max with the largest part in this partition
      for (let p of parts) max = Math.max(max, Number(p));
      parts.pop();
      return;
    }

    // Try splitting at every possible point
    for (let i = start + 1; i < s.length; i++) {
      parts.push(s.slice(start, i));
      backtrack(i, cuts - 1, parts);
      parts.pop(); // backtrack
    }
  }

  backtrack(0, k, []);
  return max;
}

/*
### 🔎 Problem Breakdown

We are given:

* A number as a string (`s`)
* An integer `k` → how many commas we can insert

Goal: Insert exactly `k` commas to split the string into **k+1 parts**.
From all possible splits, return the **largest partition (as a number)**.

---

### ⚡ Approach

1. **Combinatorial Splitting**

   * We must choose `k` positions out of `s.length - 1` possible split points.
   * Each split defines a way to partition the string.

2. **Generate all possible partitions**

   * Use recursion or backtracking to try all splits.
   * Convert partitions to numbers and track the maximum.

3. **Optimization**

   * Instead of storing all partitions, keep a running maximum.
   * No need to actually insert commas, just slice substrings.

---

### Explanation

* We use **backtracking** to explore all ways of inserting `k` commas.
* Each recursive call decides **where to cut next**.
* Once `k` commas are used, we finalize the last partition and compute the max.
* Instead of storing all results, we **update `max` on the fly**.

---

### Example Walkthrough

`s = "1234", k = 1`

* Possible splits:

  * `1 | 234` → max part = 234
  * `12 | 34` → max part = 34
  * `123 | 4` → max part = 123

Answer = `234`.

---

This is **efficient enough** because string length is usually small in such katas (<= 12–15).
It avoids unnecessary array allocations and computes `max` directly.
*/
