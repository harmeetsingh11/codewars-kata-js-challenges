function diagonalWinner(matrix) {
  let principalSum = 0,
    secondarySum = 0,
    n = matrix.length;

  // Loop through the matrix to compute both diagonal sums
  for (let i = 0; i < n; i++) {
    principalSum += matrix[i][i]; // Principal diagonal (i, i)
    secondarySum += matrix[i][n - 1 - i]; // Secondary diagonal (i, n-1-i)
  }

  // Determine the result based on the sums
  return principalSum > secondarySum
    ? 'Principal Diagonal win!'
    : principalSum < secondarySum
    ? 'Secondary Diagonal win!'
    : 'Draw!';
}

console.log(
  diagonalWinner([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // Output: "Draw!"

/*
### Explanation:
1. **Initialize sums**: `principalSum` and `secondarySum` to store diagonal sums.
2. **Loop through matrix**:  
   - `matrix[i][i]` for the principal diagonal.  
   - `matrix[i][n - 1 - i]` for the secondary diagonal.  
3. **Return result**: Compare the sums and return the appropriate message.

This solution runs in **O(n) time complexity**.
*/
