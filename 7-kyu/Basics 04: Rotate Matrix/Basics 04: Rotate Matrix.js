function rotateMatrixLeft(matrix) {
  // Get dimensions of original matrix
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Create a new matrix with dimensions cols x rows (transposed and reversed)
  const rotated = Array.from({ length: cols }, () => Array(rows));

  // Fill the new matrix by reversing columns into rows
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // Place element from [i][j] to [cols - j - 1][i]
      rotated[cols - j - 1][i] = matrix[i][j];
    }
  }

  return rotated;
}

// Example
const input = [
  [-1, 4, 5],
  [2, 3, 4],
];

console.log(rotateMatrixLeft(input));
// Output:
// [
//   [5, 4],
//   [4, 3],
//   [-1, 2]
// ]

/*
### 🧠 Explanation:

* When rotating a matrix 90° counter-clockwise:

  * The element at position `[i][j]` moves to `[cols - j - 1][i]`.
* This solution uses a **single pass (O(n \* m))** with a pre-allocated output matrix for best performance.
* `Array.from({ length: cols }, () => Array(rows))` is a clean way to initialize a 2D array.
*/
