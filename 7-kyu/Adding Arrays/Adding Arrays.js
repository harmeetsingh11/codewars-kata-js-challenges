function combineWords(arr) {
  // Transpose the 2D array: iterate over columns (indexes of sub-arrays)
  return arr[0]
    .map(
      (_, colIndex) => arr.map((row) => row[colIndex]).join('') // Combine letters vertically
    )
    .join(' '); // Join words with spaces
}

// Test cases
console.log(
  combineWords([
    ['J', 'L', 'L', 'M'],
    ['u', 'i', 'i', 'a'],
    ['s', 'v', 'f', 'n'],
    ['t', 'e', 'e', ''],
  ])
); // "Just Live Life Man"

console.log(
  combineWords([
    ['T', 'M', 'i', 't', 'p', 'o', 't', 'c'],
    ['h', 'i', 's', 'h', 'o', 'f', 'h', 'e'],
    ['e', 't', '', 'e', 'w', '', 'e', 'l'],
    ['', 'o', '', '', 'e', '', '', 'l'],
    ['', 'c', '', '', 'r', '', '', ''],
    ['', 'h', '', '', 'h', '', '', ''],
    ['', 'o', '', '', 'o', '', '', ''],
    ['', 'n', '', '', 'u', '', '', ''],
    ['', 'd', '', '', 's', '', '', ''],
    ['', 'r', '', '', 'e', '', '', ''],
    ['', 'i', '', '', '', '', '', ''],
    ['', 'a', '', '', '', '', '', ''],
  ])
); // "The Mitochondria is the powerhouse of the cell"

/*
### Explanation:
1. **Transpose the 2D array**:  
   - The outer `map` iterates over the column indexes (based on `arr[0]` length).
   - The inner `map` gathers all letters from each row at the current column index.
2. **Join each column’s letters to form words**.
3. **Join words with spaces** to create the final sentence.

This approach is **concise (one-liner inside `map`)**, **efficient (avoids unnecessary loops)**, and **easy to read**.
*/
