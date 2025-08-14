/**
 * Creates an m (width) by n (height) layered matrix.
 * @param {number} m - Number of columns (width)
 * @param {number} n - Number of rows (height)
 * @returns {number[][]} - The filled 2D layered matrix
 */
function layeredMatrix(m, n) {
  // Initialize n rows, each with m columns filled with 0
  const matrix = Array.from({ length: n }, () => Array(m).fill(0));

  // For each cell, determine its "layer" by calculating distance
  // from nearest edge and adding 1
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < m; col++) {
      const layer = Math.min(row, col, n - 1 - row, m - 1 - col) + 1;
      matrix[row][col] = layer;
    }
  }

  return matrix;
}

// Example usage:
console.log(layeredMatrix(5, 8));
console.log(layeredMatrix(10, 9));

/*
### **How It Works**

1. **Key Insight**
   The "layer number" of each cell depends on the **minimum distance to any edge**.

   * If a cell is on the edge → distance is 0 → layer = 1.
   * If it’s one cell inside → distance is 1 → layer = 2.
   * And so on.

2. **Layer Formula**

   ```
   layer = min(
     distance from top,
     distance from left,
     distance from bottom,
     distance from right
   ) + 1
   ```

3. **Efficiency**

   * **Time complexity:** `O(m * n)` → We visit each cell exactly once.
   * **Space complexity:** `O(m * n)` → For the output matrix.

---------
let’s break down the code step-by-step:


### **Step 1 – Function setup**

```javascript
function layeredMatrix(m, n) {
```

* `m` → number of **columns** (width).
* `n` → number of **rows** (height).

Example: If `m = 5` and `n = 8`, you have a 5×8 grid.

---

### **Step 2 – Create an empty matrix**

```javascript
const matrix = Array.from({ length: n }, () => Array(m).fill(0));
```

* `Array.from({ length: n })` → creates an array with `n` slots (for `n` rows).
* Inside, `() => Array(m).fill(0)` → each row is an array of `m` columns, all starting as `0`.
* Result (if `m = 5`, `n = 8`):

```js
[
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  ...
]
```

---

### **Step 3 – Loop through each cell**

```javascript
for (let row = 0; row < n; row++) {
  for (let col = 0; col < m; col++) {
```

* Outer loop → goes through **rows** (top to bottom).
* Inner loop → goes through **columns** (left to right).
* This visits **every cell** in the grid exactly once.

---

### **Step 4 – Determine the layer number**

```javascript
const layer = Math.min(
  row,               // distance from top
  col,               // distance from left
  n - 1 - row,       // distance from bottom
  m - 1 - col        // distance from right
) + 1;
```

* **Idea:** The layer is based on the smallest distance from any edge.

  * If `row = 0` → distance from top = 0 → **layer 1** (outermost).
  * If `row = 1` and `col = 1` → closest edge is 1 cell away → **layer 2**.
* `+ 1` → because if distance is `0`, layer should be `1`.

Example for `m = 5, n = 8`:

* Top-left corner (0,0): `min(0,0,7,4) + 1 = 1` → outer layer.
* Cell (2,2): `min(2,2,5,2) + 1 = 3` → third layer.

---

### **Step 5 – Assign the value**

```javascript
matrix[row][col] = layer;
```

* Puts the calculated layer number into the cell.

---

### **Step 6 – Return the completed matrix**

```javascript
return matrix;
```

* After all cells are filled, we send the final matrix back.
*/
