function averageColumns(arr) {
  // Get the number of columns (length of the first row)
  const cols = arr[0].length;

  // Use Array.from to create a new array and map each index
  return Array.from(
    { length: cols },
    (_, i) => arr.reduce((sum, row) => sum + row[i], 0) / arr.length
  );
}

// Test cases
console.log(
  averageColumns([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
  ])
);
// Output: [3, 4, 5, 6]

console.log(
  averageColumns([
    [2, 3, 9, 10, 7],
    [12, 6, 89, 45, 3],
    [9, 12, 56, 10, 34],
    [67, 23, 1, 88, 34],
  ])
);
// Output: [22.5, 11, 38.75, 38.25, 19.5]

/* 
### Explanation:
1. **Determine the number of columns**: Since the arrays are assumed to be uniform, the number of columns is taken from the length of the first row.
2. **Iterate over each column index (`i`)**:
   - Use `reduce` to sum all elements at index `i` across all rows.
   - Divide by the number of rows to get the average.
3. **Return the computed averages as an array**.

This solution is concise, efficient (`O(n*m)`, where `n` is rows and `m` is columns), and works with all number types (integers, negatives, and floats). 
*/
