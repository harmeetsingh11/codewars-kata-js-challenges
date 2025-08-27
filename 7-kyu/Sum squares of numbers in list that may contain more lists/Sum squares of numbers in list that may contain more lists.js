/**
 * Function to sum squares of numbers in a (possibly nested) list
 * @param {Array} arr - Input array that may contain numbers or subarrays
 * @returns {number} Sum of squares of all numbers in the array
 */
function SumSquares(arr) {
  // Use reduce to accumulate the result
  return arr.reduce((sum, val) => {
    // If element is an array, recurse into it
    if (Array.isArray(val)) {
      return sum + SumSquares(val);
    }
    // Otherwise, it's a number → square and add
    return sum + val * val;
  }, 0);
}

// ---- Example Tests ----
console.log(SumSquares([1, 2, 3])); // 14 (1²+2²+3²)
console.log(SumSquares([[1, 2], 3])); // 14
console.log(SumSquares([[[[[[[[[1]]]]]]]]])); // 1
console.log(SumSquares([10, [[10], 10], [10]])); // 400

/*
Explanation:

We need to **sum the squares of numbers** inside an array that can contain deeply nested subarrays. The best approach here is **recursion** since the depth is unknown.

We must also ensure:

* Do **not mutate** the original array.
* Be **efficient and concise**.

---
### 🔑 Explanation of Approach

1. Traverse the array.
2. If the current element is a number → square it and add to sum.
3. If it’s an array → recursively call the function.
4. Return the accumulated sum.

This ensures all nested levels are handled efficiently.
---

### ✅ Why this is Optimal

* **Recursive + reduce** → clean, concise, no manual loops.
* **No mutation** → works purely, original array untouched.
* **Handles arbitrary depth** → recursion takes care of deeply nested lists.
* **Time Complexity: O(n)** → where n = total number of elements (including nested).

*/
