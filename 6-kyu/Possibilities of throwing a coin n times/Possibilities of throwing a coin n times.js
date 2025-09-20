/**
 * Generate all possible outcomes of n coin tosses
 * @param {number} n - Number of coin tosses (1 <= n < 18)
 * @returns {string[]} - Sorted array of all possible outcomes
 */
function coinTosses(n) {
  const results = [];
  const total = 1 << n; // 2^n possible outcomes (bit manipulation for efficiency)

  for (let i = 0; i < total; i++) {
    // Convert each number (0..2^n-1) to binary string of length n
    // Replace '0' with 'H' and '1' with 'T'
    const outcome = i
      .toString(2) // binary representation
      .padStart(n, '0') // ensure length = n
      .replace(/0/g, 'H') // 0 → H
      .replace(/1/g, 'T'); // 1 → T

    results.push(outcome);
  }

  return results; // Already generated in sorted order
}

/*
### Explanation

1. **Total Outcomes**
   Each coin toss has 2 possibilities (`H` or `T`), so for `n` tosses there are `2^n` possibilities.
   We calculate this efficiently using bitwise shift: `1 << n`.

2. **Binary Representation Trick**

   * We loop from `0` to `2^n - 1`.
   * Each number in this range, when converted to binary, uniquely represents an outcome.

     * Example for `n = 3`:

       ```
       0 -> 000 -> HHH
       1 -> 001 -> HHT
       2 -> 010 -> HTH
       ...
       7 -> 111 -> TTT
       ```

3. **Sorting**
   No explicit sort is needed because iterating `0..2^n - 1` naturally produces lexicographically sorted outcomes (`H` < `T`).

4. **Efficiency**

   * **Time Complexity:** `O(2^n * n)` (must generate all strings, unavoidable).
   * **Space Complexity:** `O(2^n * n)` (store all outcomes).
     This is optimal because we can’t avoid generating all `2^n` possibilities.

---

✅ Handles **large inputs up to n=17** efficiently without recursion.
✅ Avoids stack overflows and extra sorting.
✅ Compact and clear with comments.
*/
