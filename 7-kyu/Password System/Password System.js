/**
 * Check if given 1D binary grid is symmetric about the center.
 * @param {number[]} arr - Flattened binary grid.
 * @returns {string} "Yes" if symmetric, otherwise "No".
 */
function isSymmetric(arr) {
  const len = arr.length;
  const n = Math.sqrt(len); // side length of square matrix

  // If length is not a perfect square, return "No"
  if (!Number.isInteger(n)) return 'No';

  // Check 180-degree rotational symmetry
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const idx1 = i * n + j; // index for (i, j)
      const idx2 = (n - 1 - i) * n + (n - 1 - j); // index for symmetric position
      if (arr[idx1] !== arr[idx2]) return 'No';
    }
  }

  return 'Yes';
}

// ---- Examples ----
console.log(isSymmetric([1, 1, 0, 0, 0, 0, 0, 1, 1])); // Yes
console.log(isSymmetric([1, 1, 0, 0, 1, 0, 0, 1])); // No
console.log(isSymmetric([1, 0, 1, 1, 0, 0, 0, 0, 0])); // No

/*
## 🔍 Problem Breakdown

* Input: A **1D array** of `0`s and `1`s.
* Step 1: Check if the array length is a **perfect square** (so it can form an `n x n` grid).
* Step 2: If not → return `"No"`.
* Step 3: If yes, reshape into an `n x n` matrix.
* Step 4: Check **point symmetry (180° rotation symmetry)** about the center:

  * For every `(i, j)`, `grid[i][j]` should equal `grid[n-1-i][n-1-j]`.
* Step 5: Return `"Yes"` if symmetric, else `"No"`.
---

## 📝 Explanation

1. We compute `n = sqrt(len)` to check if the array can form an `n x n` matrix.

   * Example: length `9` → `n = 3` ✅
   * Example: length `8` → not a perfect square ❌ return `"No"`.

2. For symmetry:

   * Compare `(i, j)` with `(n-1-i, n-1-j)`.
   * Example grid:

     ```
     1 1 0
     0 0 0
     0 1 1
     ```

     * `(0,0)` ↔ `(2,2)` → both `1`
     * `(0,1)` ↔ `(2,1)` → both `1`
     * `(1,0)` ↔ `(1,2)` → both `0`
       ✅ Symmetric.

3. Time Complexity → **O(n²)** (must check each element once).
   Space Complexity → **O(1)** (in-place, no extra structures).

---
*/
