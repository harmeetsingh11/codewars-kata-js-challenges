/**
 * Maps x, y coordinates to the battlefield grid sector.
 * @param {number} x - Column index (0 = left, 1 = middle, 2 = right)
 * @param {number} y - Row index (0 = top, 1 = middle, 2 = bottom)
 * @returns {string} - The corresponding sector name
 */
function fire(x, y) {
  // Battlefield grid (flattened 1D array)
  const grid = [
    'top left',
    'top middle',
    'top right',
    'middle left',
    'center',
    'middle right',
    'bottom left',
    'bottom middle',
    'bottom right',
  ];

  // Compute index using formula (row * 3 + column)
  const index = y * 3 + x;

  // Return the sector name
  return grid[index];
}

// Example test cases
console.log(fire(0, 0)); // "top left"
console.log(fire(1, 2)); // "bottom middle"
console.log(fire(2, 1)); // "middle right"

/*
This is basically mapping `(x, y)` coordinates of a **3x3 grid** into a **1D array index**.

### 🔑 Core Idea

* The battlefield is a **3x3 grid** (3 rows × 3 columns).
* Array index = `rowIndex * numberOfColumns + colIndex`
* Since we have 3 columns:
  `index = y * 3 + x`

---

### 📝 Explanation

1. The grid is stored as a **1D array** of 9 strings (row-wise order).
2. Given coordinates `(x, y)`:

   * `x` → column (0 = left, 1 = middle, 2 = right)
   * `y` → row (0 = top, 1 = middle, 2 = bottom)
3. To find the corresponding index:

   * Each row has **3 elements**.
   * Formula: `index = y * 3 + x`
   * Example: `(1, 2)` → `2 * 3 + 1 = 7` → `"bottom middle"`.
*/
