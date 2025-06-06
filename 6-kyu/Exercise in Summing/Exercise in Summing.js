// Returns the sum of the 'n' smallest numbers from the array
function minimumSum(values, n) {
  // Handle edge cases: empty array or n = 0
  if (!values.length || n === 0) return 0;

  // Limit n to the length of the array to avoid overflow
  n = Math.min(n, values.length);

  // Sort the array in ascending order and sum the first 'n' elements
  return values
    .sort((a, b) => a - b)
    .slice(0, n)
    .reduce((sum, num) => sum + num, 0);
}

// Returns the sum of the 'n' largest numbers from the array
function maximumSum(values, n) {
  // Handle edge cases: empty array or n = 0
  if (!values.length || n === 0) return 0;

  // Limit n to the length of the array
  n = Math.min(n, values.length);

  // Sort the array in descending order and sum the first 'n' elements
  return values
    .sort((a, b) => b - a)
    .slice(0, n)
    .reduce((sum, num) => sum + num, 0);
}

const values = [5, 4, 3, 2, 1];
console.log(minimumSum(values, 2)); // Output: 3 (1+2)
console.log(maximumSum(values, 3)); // Output: 12 (5+4+3)

/*
### Why this solution works well:

- Uses `.sort()` efficiently to order values.
- Uses `.slice()` to extract the relevant part of the array.
- Uses `.reduce()` for concise and efficient summing.
- Handles edge cases cleanly and clearly at the top of each function.
*/
