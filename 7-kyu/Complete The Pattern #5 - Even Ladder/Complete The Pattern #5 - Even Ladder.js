function pattern(n) {
  // Return empty string if n <= 1
  if (n <= 1) return '';

  // If n is odd, reduce it by 1 to make it the largest even number less than n
  if (n % 2 !== 0) n--;

  // Initialize an array to store each line of the pattern
  const lines = [];

  // Loop through even numbers from 2 to n
  for (let i = 2; i <= n; i += 2) {
    // Push a string of 'i' repeated 'i' times into the lines array
    lines.push(String(i).repeat(i));
  }

  // Join all lines with newline characters and return the result
  return lines.join('\n');
}

// Examples
console.log(pattern(8));
/*
22
4444
666666
88888888
*/

console.log(pattern(5));
/*
22
4444
*/

/*
### Highlights:
- Handles edge case `n <= 1`.
- Reduces odd `n` to the nearest smaller even number.
- Uses `String(i).repeat(i)` for clean line construction.
- Uses `Array.join('\n')` for efficient string joining.
*/
