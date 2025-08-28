/**
 * Checks if all elements in a sequence satisfy the given function.
 * @param {Array} sequence - The array of elements to test.
 * @param {Function} fn - The predicate function to apply to each element.
 * @returns {boolean} - True if all elements satisfy fn, false otherwise.
 */
function all(sequence, fn) {
  // Use Array.every() which short-circuits on first false
  return sequence.every(fn);
}

// Example usage:
const greaterThan9 = (x) => x > 9;
const lessThan9 = (x) => x < 9;

console.log(all([1, 2, 3, 4, 5], greaterThan9)); // false
console.log(all([1, 2, 3, 4, 5], lessThan9)); // true
console.log(all([], greaterThan9)); // true (empty sequence case)

/*
This is basically asking us to **implement a function `all`** that checks whether *all* elements in a sequence satisfy a given predicate (function).

We should aim for:

* **Efficiency**: Stop iterating as soon as one element fails (short-circuit).
* **Conciseness**: Use modern JS methods if possible.
* **Correctness**: Handle empty sequences (should return `true`).
---

### 🔹 Explanation

1. **Core Logic**
   We use **`Array.prototype.every()`**, which:

   * Returns `true` if **all elements** satisfy the condition.
   * Stops immediately if one element fails (efficient).
   * Returns `true` by default on an empty array, matching the requirement.

2. **Time Complexity**

   * **Best case**: `O(1)` (first element fails).
   * **Worst case**: `O(n)` (all elements pass).

3. **Why concise?**

   * Instead of writing a manual `for` loop, `every()` directly expresses the intent (all elements must satisfy a condition).
   * Readable and optimized under the hood.

*/
