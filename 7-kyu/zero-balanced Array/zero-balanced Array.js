/**
 * Checks whether an array is zero-balanced.
 * A zero-balanced array:
 *  - has a total sum of 0
 *  - has equal occurrences of each number and its negative
 *  - empty array is NOT zero-balanced
 *
 * @param {number[]} arr - Input array of integers
 * @returns {boolean} - True if zero-balanced, else false
 */
function isZeroBalanced(arr) {
  if (arr.length === 0) return false; // empty array not zero-balanced

  const freq = new Map();
  let sum = 0;

  for (const num of arr) {
    sum += num;

    // Count frequency of each number
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  if (sum !== 0) return false; // sum must be zero

  // Check each number has matching negative counterpart
  for (const [num, count] of freq.entries()) {
    if (num === 0) continue; // 0 is its own negative

    if (freq.get(-num) !== count) return false; // must have same count as its negative
  }

  return true;
}

console.log(isZeroBalanced([1, -1, 2, -2])); // true
console.log(isZeroBalanced([0, 1, -1])); // true
console.log(isZeroBalanced([3])); // false
console.log(isZeroBalanced([3, -2, -1])); // false
console.log(isZeroBalanced([1, 1, 1, 1, -1, 3, -3, -3])); // false
console.log(isZeroBalanced([])); // false

/*
Explanation:

1. **Empty check**:

   * If array is empty, return `false`.

2. **Sum check**:

   * Use a running sum while looping.
   * If total sum is not `0`, return `false`.

3. **Frequency map**:

   * Track frequency of each number using a `Map` for efficient O(1) lookups.

4. **Validation**:

   * For each unique number:

     * If `num !== 0`, check if its opposite `-num` exists in equal quantity.
     * `0` is ignored in this check since `0 === -0`.


⏱ Time & Space Complexity:

* **Time**: `O(n)` — Single pass to build frequency map and compute sum.
* **Space**: `O(n)` — For frequency map.

This solution is optimal for any size of input.
*/
