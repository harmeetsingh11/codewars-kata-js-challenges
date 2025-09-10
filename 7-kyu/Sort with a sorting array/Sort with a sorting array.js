/**
 * Reorders `arr` according to the positions specified in `indices`.
 * @param {any[]} arr - Array of elements to be sorted.
 * @param {number[]} indices - Array of target indices for elements.
 * @returns {any[]} - Reordered array.
 */
function sort(arr, indices) {
  const result = new Array(arr.length); // Pre-allocate result array

  // Place each element from arr into its target index
  for (let i = 0; i < arr.length; i++) {
    result[indices[i]] = arr[i];
  }

  return result;
}

// ✅ Example usage:
console.log(sort(['x', 'y', 'z'], [1, 2, 0])); // ['z', 'x', 'y']
console.log(sort(['z', 'x', 'y'], [0, 2, 1])); // ['z', 'y', 'x']

/*
We need to **reorder one array based on the indices given in another array**. Since the indices array always has all required indices (`0 ... n-1`), the solution can be **done in O(n)** time with direct mapping (instead of sorting).

---

### 📖 Explanation

* We create a new array `result` with the same length as the input.
* For each element in `arr`, we use `indices[i]` to decide its new position.
* Example:
  `sort(['x', 'y', 'z'], [1, 2, 0])`

  * `'x'` goes to index `1`
  * `'y'` goes to index `2`
  * `'z'` goes to index `0`
    → `['z', 'x', 'y']`

---

### ⚡ Complexity Analysis

* **Time Complexity:** `O(n)` (single pass through the array).
* **Space Complexity:** `O(n)` (extra array for result).

*/
