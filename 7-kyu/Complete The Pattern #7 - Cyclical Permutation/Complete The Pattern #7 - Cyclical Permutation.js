function pattern(n) {
  // If n is 0 or negative, return an empty string
  if (n <= 0) return '';

  let result = [];

  // Build each row
  for (let i = 0; i < n; i++) {
    let row = '';

    // For each row, generate n numbers
    for (let j = 0; j < n; j++) {
      // Calculate number using modular arithmetic to wrap around after n
      row += ((i + j) % n) + 1;
    }

    result.push(row);
  }

  // Join all rows with newline character and return the final pattern
  return result.join('\n');
}

console.log(pattern(5));
// Output:
// 12345
// 23451
// 34512
// 45123
// 51234

/*

✅ **Explanation:**
- If `n` is `0` or less, just return an empty string.
- Loop through `n` rows.
- For each row, loop through `n` columns.
- The value is calculated by `(i + j) % n + 1` to wrap around numbers when they go beyond `n`.
- Collect each row into an array and finally join them with `\n` to create the multi-line pattern.
*/
