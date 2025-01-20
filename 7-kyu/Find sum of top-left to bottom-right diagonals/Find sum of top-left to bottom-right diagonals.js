function diagonalSum(matrix) {
  // Use reduce to sum the diagonal elements efficiently
  return matrix.reduce((sum, row, index) => sum + row[index], 0);
}

// Example
const array1 = [
  [1, 2],
  [3, 4],
];
console.log(diagonalSum(array1)); // Output: 5

const array2 = [
  [5, 9, 1, 0],
  [8, 7, 2, 3],
  [1, 4, 1, 9],
  [2, 3, 8, 2],
];
console.log(diagonalSum(array2)); // Output: 15

/* 
Explanation:

Matrix Traversal:
Each row's index in the matrix corresponds to the column index of the diagonal element for that row.
For example, in a matrix:
Row 0 → Column 0
Row 1 → Column 1
Row 2 → Column 2, and so on.

Efficient Summation:
The reduce method is used to iterate through the rows of the matrix while maintaining a running total (sum).
For each row, the diagonal element is accessed using row[index], where index is the current row's index.

Initial Sum:
The second argument of reduce is 0, which initializes the sum to 0.

Time Complexity:
The solution iterates through the matrix once, resulting in a time complexity of O(n), where n is the number of rows (or columns) in the square matrix.
*/
