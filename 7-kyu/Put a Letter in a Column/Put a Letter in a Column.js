function placeCharAtIndex(index, char) {
  // Create an array of 9 spaces
  const columns = Array(9).fill(' ');
  // Place the character at the specified index
  columns[index] = char;
  // Join the array with '|' to form the columns string, surrounded by '|'
  return '|' + columns.join('|') + '|';
}

console.log(placeCharAtIndex(2, 'B')); // Output: | | |B| | | | | | |

/*
**Explanation:**

- Initialize an array of 9 spaces to represent empty columns.
- Replace the element at the given `index` with the provided `char`.
- Join the array elements with `'|'` between them.
- Add a leading and trailing `'|'` to frame the string as columns.

This approach is simple, efficient (O(1) index assignment), and very readable.
*/
