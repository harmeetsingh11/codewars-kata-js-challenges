/**
 * Formats a linear array into a TicTacToe-like board.
 * @param {string[]} values - Array of cell values ("X", "O", " ").
 * @param {number} width - Number of columns in the board.
 * @returns {string} - Formatted board as a string.
 */
function formatBoard(values, width) {
  // Calculate number of rows
  const rows = values.length / width;

  // Build each row by slicing the array
  const board = Array.from({ length: rows }, (_, r) => {
    const row = values.slice(r * width, (r + 1) * width);
    return ' ' + row.join(' | ') + ' '; // Add padding & separators
  });

  // Separator line (--- based on row width)
  const separator = '-'.repeat(board[0].length);

  // Join rows with separator line in between
  return board.join('\n' + separator + '\n');
}

// Example usage:
console.log(formatBoard(['O', 'X', ' ', ' ', 'X', ' ', 'X', 'O', ' '], 3));
console.log(formatBoard(['O', 'X', ' ', ' ', 'X', ' ', 'X', 'O', ' ', 'O'], 5));

/*
We need to format a **1D array of symbols** (`["O","X"," "," ",...]`) into a **string board representation** with a given width (number of columns).

---

### 🔑 Key Points

1. Input:

   * `values` → array of symbols (`["O", "X", " ", ...]`)
   * `width` → number of columns per row

2. Output:

   * A **string** formatted as a grid, where:

     * Each cell is wrapped with spaces `" O "`
     * Cells are separated by `" | "`
     * Rows are separated by a line of `"-"`

3. Constraints:

   * `values.length % width === 0` (always exact multiple → no partial rows).

---

### 📝 Explanation with Example

#### Input:

```js
["O","X"," "," ","X"," ","X","O"," "], width = 3
```

#### Steps:

* Split into rows of 3:

  * `["O","X"," "]`
  * `[" ","X"," "]`
  * `["X","O"," "]`

* Format each row:

  * `" O | X |   "`
  * `"   | X |   "`
  * `" X | O |   "`

* Separator length = row length → `"-----------"`

* Final board:

```
 O | X |   
-----------
   | X |   
-----------
 X | O |   
```
---
⚡ This approach is:

* **Efficient** → O(n) (each element visited once).
* **Concise** → Uses array slicing + `join`.
* **Generalized** → Works for any rectangular board size.

---
*/
