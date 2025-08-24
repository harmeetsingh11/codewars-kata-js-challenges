/**
 * Returns the multiplication table (1 to 10) for a given number.
 * @param {number} n - The number for which table is generated (1 ≤ n ≤ 10).
 * @returns {string} - Multiplication table as a single string with newline characters.
 */
function multiplicationTable(n) {
  // Use Array.from to generate numbers 1 to 10 efficiently
  return Array.from({ length: 10 }, (_, i) => {
    const multiplier = i + 1; // i starts from 0, so add 1
    return `${multiplier} * ${n} = ${multiplier * n}`;
  }).join('\n'); // Join with newline, no trailing newline
}

// Example usage:
console.log(multiplicationTable(5));

// Output
/*
1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
*/

/*
### 🔎 Explanation:

1. **`Array.from({ length: 10 }, ...)`**

   * Creates an array of length 10 (indexes 0–9).
   * For each index `i`, we calculate the multiplier (`i + 1`).

2. **Template literals (`${}`)**

   * Format each line as `"multiplier * n = product"`.

3. **`.join('\n')`**

   * Joins all 10 lines with newline characters.
   * Ensures no trailing newline at the end.

---
This is **concise, optimized (O(1) space & O(10) time, i.e., constant), beginner-friendly, and avoids unnecessary loops or string concatenation overhead.
*/
