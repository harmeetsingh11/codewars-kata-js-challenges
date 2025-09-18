/**
 * Generates a sequence of length n based on a given pattern.
 * @param {number} n - Length of the sequence.
 * @param {*} pattern - Either:
 *   1. A function (element, index) => value, describing sequence generation.
 *   2. Any other value (number, string, object, etc.), repeated n times.
 * @returns {Array} - Generated sequence.
 */
function sequence(n, pattern) {
  // If pattern is a function → generate sequence dynamically
  if (typeof pattern === 'function') {
    return Array.from({ length: n }, (el, idx) => pattern(el, idx));
  }

  // Otherwise → repeat the pattern n times
  return Array.from({ length: n }, () => pattern);
}

// -------------------- Examples --------------------

// Case 1: Repeating values
console.log(sequence(3, 4)); // [4, 4, 4]
console.log(sequence(2, 's')); // ["s", "s"]

// Case 2: Objects (⚠️ same reference repeated)
console.log(sequence(3, [])); // [[], [], []]

// Case 3: Function-based sequence
console.log(sequence(5, (x, idx) => idx % 2)); // [0, 1, 0, 1, 0]
console.log(sequence(10, (x, idx) => idx + 1)); // [1..10]

// Case 4: Using with functional methods
let sum = sequence(10, (x, idx) => idx + 1).reduce((s, num) => s + num);
console.log(sum); // 55

/*
### 🔎 Explanation

* **When `pattern` is a function**:
  We use `Array.from({length: n}, (el, idx) => pattern(el, idx))`.

  * `el` is always `undefined` (since `Array.from` starts with empty slots), but it’s passed for compatibility.
  * `idx` gives the index, letting you generate values like a mathematical sequence.

* **When `pattern` is not a function**:
  We just repeat the same value `n` times with `Array.from({length: n}, () => pattern)`.

* **Important Note about Objects**:
  If you pass an object/array, the **same reference** is repeated.
  Example: `sequence(3, [])` creates `[[], [], []]`, but all point to the same array in memory.
  If you want **independent copies**, you’d need to clone inside the generator function.
*/
