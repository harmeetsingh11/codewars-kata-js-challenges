const modifyDiagonal = (matrix) => {
  // Create a new matrix to avoid mutating the input
  const result = matrix.map((row, i) => [...row]);

  // Iterate over the diagonal elements
  for (let i = 0; i < result.length; i++) {
    // Update diagonal: 0 for negative, 1 for non-negative
    result[i][i] = result[i][i] < 0 ? 0 : 1;
  }

  return result;
};

const input = [
  [-1, 4, -5, -9, 3],
  [6, -4, -7, 4, -5],
  [3, 5, 0, -9, -1],
  [1, 5, -7, -8, -9],
  [-3, 2, 1, -5, 6],
];

const output = modifyDiagonal(input);
console.log(output);

/*
**Explanation:**
1. **Immutable Transformation:**  
   - To follow best practices, I create a new matrix using `.map()` and the spread operator `[...]` to avoid mutating the original input.
2. **Efficient Iteration:**  
   - Since only the diagonal elements need modification, I use a `for` loop that iterates through the diagonal by incrementing both row and column indices simultaneously (`matrix[i][i]`).
3. **Conditional Check:**  
   - For each diagonal element:
     - If the value is negative (`< 0`), replace it with `0`.
     - If it is non-negative (including `0`), replace it with `1`.
4. **Time and Space Complexity:**  
   - **Time Complexity:** \(O(n)\) → Only iterating through the diagonal, which has \(n\) elements.  
   - **Space Complexity:** \(O(n^2)\) → Creating a new matrix of the same size as the input.
*/
