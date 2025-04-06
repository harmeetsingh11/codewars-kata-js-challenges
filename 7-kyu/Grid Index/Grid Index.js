function gridIndex(grid, indices) {
  const n = grid.length; // Get the size of the grid (n x n)

  return indices
    .map((index) => {
      // Convert 1-based index to 0-based row and column
      const row = Math.floor((index - 1) / n);
      const col = (index - 1) % n;
      return grid[row][col]; // Access the character from the grid
    })
    .join(''); // Join the characters into a string
}

const grid = [
  ['m', 'y', 'e'],
  ['x', 'a', 'm'],
  ['p', 'l', 'e'],
];
const indices = [1, 3, 5, 8];
console.log(gridIndex(grid, indices)); // Output: "meal"

/*
### Explanation:

- **`(index - 1)`**: Since the input index is 1-based, subtracting 1 makes it zero-based.
- **`Math.floor((index - 1) / n)`**: Gets the row number.
- **`(index - 1) % n`**: Gets the column number.
- **`.map(...).join('')`**: Transforms each index to its character and joins them to form the result string.
*/
