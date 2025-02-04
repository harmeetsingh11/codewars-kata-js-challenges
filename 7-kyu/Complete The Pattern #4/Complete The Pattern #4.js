function pattern(n) {
  if (n <= 0) return ''; // Return empty string for non-positive numbers

  return Array.from({ length: n }, (_, i) =>
    Array.from({ length: n - i }, (_, j) => j + i + 1).join('')
  ).join('\n');
}

console.log(pattern(4)); // Test case
console.log(pattern(6)); // Test case

/*Explanation:
1. **Handle Edge Case**: If `n` is `0` or negative, return an empty string immediately.
2. **Use `Array.from` to Generate Rows**:
   - We create an array of `n` elements where each index `i` represents a row.
   - Each row is generated using another `Array.from`, where:
     - The inner array's length is `n - i` (ensuring decreasing row size).
     - The elements are generated using `j + i + 1`, starting from `i+1` up to `n`.
   - The numbers are joined together into a string.
3. **Join Rows with `\n`**: The rows are joined using `\n` to form the final output.

### Complexity:
- **Time Complexity**: \(O(n^2)\) — Since we iterate `n` times and each row creation takes at most `n` iterations.
- **Space Complexity**: \(O(n^2)\) — The result stores all rows, leading to quadratic space usage.
*/
