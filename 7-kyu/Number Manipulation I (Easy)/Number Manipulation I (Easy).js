/**
 * Replaces the second half of a number's digits with zeros.
 * For odd digit counts, masking starts from the middle digit.
 *
 * @param {number} num - The input number
 * @returns {number} - The masked number
 */
function maskSecondHalf(num) {
  const str = String(num); // Convert to string
  const len = str.length;

  // Find index where masking starts
  const mid = Math.floor(len / 2);

  // Keep first half intact, replace second half with zeros
  const masked = str.slice(0, mid) + '0'.repeat(len - mid);

  return Number(masked); // Convert back to number
}

// ---- Examples ----
console.log(maskSecondHalf(192827764920)); // 192827000000
console.log(maskSecondHalf(938473)); // 938000
console.log(maskSecondHalf(2837743)); // 2830000

/* 
We need to **mask the second half of digits with zeros** while keeping the first half intact.
The key is handling **odd and even digit lengths** properly.

---
### 🔑 Explanation

1. Convert the number to a string (easy to split digits).
2. Find the **midpoint**:

   * If length is even → mask from `length/2` onward.
   * If length is odd → mask from `Math.floor(length/2)` onward (includes the middle digit).
3. Replace all digits in the second half with zeros.
4. Return the final number.
---

### ⚡ Why this is efficient?

* Works in **O(n)** where n = number of digits (string length).
* Uses **string slicing and repeat** instead of loops → concise and fast.
* Handles both odd and even digit cases correctly.
*/
