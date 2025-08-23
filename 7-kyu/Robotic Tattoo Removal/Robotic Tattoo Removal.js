/**
 * Replaces all 'X' in the 2D array with '*'
 * @param {string[][]} skinScan - 2D array representing the skin
 * @returns {string[][]} - Modified 2D array with tattoos zapped
 */
function robot(skinScan) {
  // Use map to iterate through rows and columns efficiently
  return skinScan.map(
    (row) => row.map((cell) => (cell === 'X' ? '*' : cell)) // Replace only 'X'
  );
}

// Example usage:
const skinScan = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', 'X', 'X', ' ', ' ', ' ', 'X', 'X', ' ', ' '],
  [' ', 'X', ' ', ' ', 'X', ' ', 'X', ' ', ' ', 'X', ' '],
  [' ', 'X', ' ', ' ', ' ', 'X', ' ', ' ', ' ', 'X', ' '],
  [' ', 'X', ' ', ' ', ' ', 'X', ' ', ' ', ' ', 'X', ' '],
  [' ', 'X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X', ' '],
  [' ', 'X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X', ' '],
  [' ', 'X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X', ' '],
  [' ', ' ', 'X', ' ', ' ', ' ', ' ', ' ', 'X', ' ', ' '],
  [' ', ' ', ' ', 'X', ' ', ' ', ' ', 'X', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', 'X', ' ', 'X', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', 'X', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', 'X', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
];

console.log(robot(skinScan));

/*
### 🔍 Explanation:

* We use **`map`** twice:

  * Outer `map` → iterates over each row of the 2D array.
  * Inner `map` → iterates over each cell in that row.
* For each cell:

  * If it's `'X'`, replace it with `'*'`.
  * Otherwise, leave it unchanged.
* This ensures we don’t mutate the original array (functional, safe approach).
* ✅ Time Complexity: **O(m × n)**, where `m` = rows and `n` = columns.
* ✅ Space Complexity: **O(m × n)** (new array created).
*/
