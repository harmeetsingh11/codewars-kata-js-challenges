/**
 * Processes an array based on defined transformation rules:
 * 1. Square positive numbers.
 * 2. Multiply every third number by 3 (index % 3 === 2).
 * 3. Multiply every fifth number by -1 (index % 5 === 4).
 * Returns the sum of the transformed sequence.
 *
 * @param {number[]} arr - The input array of integers
 * @returns {number} - The sum of the transformed array
 */
const transformAndSum = (arr) =>
  arr
    .map((num, i) => {
      let val = num > 0 ? num ** 2 : num; // Step 1: Square if > 0
      if (i % 3 === 2) val *= 3; // Step 2: Every 3rd element (0-based index)
      if (i % 5 === 4) val *= -1; // Step 3: Every 5th element
      return val;
    })
    .reduce((sum, val) => sum + val, 0); // Step 4: Sum the final values

// Example
console.log(transformAndSum([-2, -1, 0, 1, 2])); // Output: -6

/*
Why it's optimal:

* **No loops**: Uses `map()` and `reduce()` (highly optimized in JS engines).
* **Immutable**: No in-place mutations.
* **Clean**: Concise one-liner inside `map()`, easy to reason about.
* **Fast**: O(n) time and O(n) space, with one pass to transform and one to reduce.
*/
