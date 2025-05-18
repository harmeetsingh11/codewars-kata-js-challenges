function validateSudoku(board) {
  // Helper to check if an array contains digits 1-9 exactly once
  const isValidGroup = (nums) => {
    const seen = new Set();
    for (const n of nums) {
      if (n === 0 || n < 1 || n > 9 || seen.has(n)) return false;
      seen.add(n);
    }
    return true;
  };

  for (let i = 0; i < 9; i++) {
    // Check row i
    if (!isValidGroup(board[i])) return false;

    // Check column i
    const col = [];
    for (let j = 0; j < 9; j++) col.push(board[j][i]);
    if (!isValidGroup(col)) return false;

    // Check 3x3 block i
    // Blocks indexed 0..8 from top-left to bottom-right
    const block = [];
    const rowStart = 3 * Math.floor(i / 3);
    const colStart = 3 * (i % 3);
    for (let r = rowStart; r < rowStart + 3; r++) {
      for (let c = colStart; c < colStart + 3; c++) {
        block.push(board[r][c]);
      }
    }
    if (!isValidGroup(block)) return false;
  }

  // All rows, columns, and blocks valid
  return true;
}

/*
### Explanation:

* `isValidGroup` checks a list of 9 numbers to confirm they contain digits 1-9 exactly once (no zeros, no duplicates).
* For each `i` from 0 to 8:

  * Validate the i-th row.
  * Validate the i-th column by collecting its values.
  * Validate the i-th 3x3 block by calculating its starting indices and extracting the block's cells.
* If any group is invalid, return `false`.
* If all checks pass, return `true`.

This approach ensures O(1) space (just sets of size 9) and O(9\*9) = O(81) time, which is efficient for Sudoku.
*/

/* 
### Example 1: Valid Board

```js
const validBoard = [
  [5,3,4,6,7,8,9,1,2],
  [6,7,2,1,9,5,3,4,8],
  [1,9,8,3,4,2,5,6,7],
  [8,5,9,7,6,1,4,2,3],
  [4,2,6,8,5,3,7,9,1],
  [7,1,3,9,2,4,8,5,6],
  [9,6,1,5,3,7,2,8,4],
  [2,8,7,4,1,9,6,3,5],
  [3,4,5,2,8,6,1,7,9]
];

console.log(validateSudoku(validBoard));  // Output: true
```

**Explanation:**

* Each row contains numbers 1 through 9 without duplicates.
* Each column contains numbers 1 through 9 without duplicates.
* Each 3x3 sub-block also contains numbers 1 through 9 without duplicates.
* No zeros in the board.
* Hence the function returns `true`.

---

### Example 2: Invalid Board (due to zeros and duplicates)

```js
const invalidBoard = [
  [5,3,4,6,7,8,9,1,2],
  [6,7,2,1,9,5,3,4,8],
  [1,9,8,3,4,2,5,6,7],
  [8,5,9,7,6,1,4,2,3],
  [4,2,6,8,0,3,7,9,1], // zero present here
  [7,1,3,9,2,4,8,5,6],
  [9,6,1,5,3,7,2,8,4],
  [2,8,7,4,1,9,6,3,5],
  [3,4,5,2,8,6,1,7,9]
];

console.log(validateSudoku(invalidBoard));  // Output: false
```

**Explanation:**

* Row 4 has a zero, which makes it invalid immediately (no empty cells allowed).
* If you changed the zero to a number that causes duplicates in the row, column, or block, it would also fail.
* Function returns `false` right away.

---

### How the function checks each part:

* **Row check:** Directly uses `board[i]` for each row `i`.
* **Column check:** Collects each `board[j][i]` where `j` goes 0 to 8 (all rows in column `i`).
* **3x3 block check:** Blocks are indexed from 0 to 8. For block `i`:

  * `rowStart = 3 * Math.floor(i / 3)` determines the starting row of the block.
  * `colStart = 3 * (i % 3)` determines the starting column of the block.
  * Then it iterates the 3x3 cells from these start positions.

Example: For block 0, `rowStart=0`, `colStart=0`, so it covers rows 0-2 and cols 0-2 (top-left block).

For block 4 (center block), `rowStart=3`, `colStart=3`, covering rows 3-5 and cols 3-5.

*/
