/**
 * Computes the required sum efficiently.
 * @param {number[]} table - Array of integers.
 * @param {number} min - Lower bound (inclusive).
 * @param {number} max - Upper bound (inclusive).
 * @returns {number} The computed sum.
 */
function sumMultiples(table, min, max) {
  // Edge case: if table is empty, result is 0
  if (table.length === 0) return 0;

  // Formula: sum of integers from min to max
  const rangeSum = (max * (max + 1)) / 2 - (min * (min - 1)) / 2;

  // Sum of elements in the table
  const tableSum = table.reduce((acc, val) => acc + val, 0);

  // Final result
  return tableSum * rangeSum;
}

// Example:
console.log(sumMultiples([2, 5], 1, 3)); // Output: 36

/* 
We need to **efficiently** compute the sum of multiples of each number in `table` between `min` and `max` (inclusive).

### Key Observations:

1. Naively iterating from `min` to `max` would be too slow if `max` is very large.

2. Instead, notice that for each element `x` in `table`, its contribution is:

   ```
   x * min + x * (min+1) + ... + x * max
   ```

   This is the same as:

   ```
   x * (sum of all integers from min to max)
   ```

3. Formula for the sum of integers from `a` to `b` is:

   ```
   sum = (b*(b+1))/2 - (a*(a-1))/2
   ```

   Works with negatives too.

4. Therefore, we only need to compute the sum from `min` to `max` once, then multiply it by the sum of all numbers in `table`.
---

### Explanation:

* For `[2,5], min=1, max=3`:

  * Range sum from 1 to 3 = `1 + 2 + 3 = 6`.
  * Table sum = `2 + 5 = 7`.
  * Final result = `7 * 6 = 42`.
    Wait! Let's double-check:

  ```
  2*1 + 2*2 + 2*3 = 12
  5*1 + 5*2 + 5*3 = 30
  Total = 42
  ```

  ✅ Matches.

---

This solution runs in **O(n)** (where n = table size), and does **not depend on min..max size**, so it’s efficient even for huge ranges.
*/
