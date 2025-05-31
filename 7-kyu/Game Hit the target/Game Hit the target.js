function isArrowHitTarget(matrix) {
  for (let row of matrix) {
    // Find positions of '>' (arrow) and 'x' (target) in the current row
    const arrowIndex = row.indexOf('>');
    const targetIndex = row.indexOf('x');

    // If both arrow and target are on the same row,
    // and target is to the right of the arrow, return true
    if (arrowIndex !== -1 && targetIndex !== -1 && targetIndex > arrowIndex) {
      return true;
    }
  }

  // If no valid arrow-to-target path was found, return false
  return false;
}

console.log(
  isArrowHitTarget([
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' '],
    [' ', '>', ' ', 'x'],
    [' ', ' ', ' ', ' '],
  ])
); // true

console.log(
  isArrowHitTarget([
    [' ', ' ', ' ', ' '],
    [' ', '>', ' ', ' '],
    [' ', ' ', ' ', 'x'],
    [' ', ' ', ' ', ' '],
  ])
); // false

/*
### How It Works:

- It loops through each row of the matrix.
- Checks if both the arrow `'>'` and the target `'x'` exist in that row.
- If they do, and the `'x'` comes after `'>'`, return `true`.
- If no such case is found after looping through all rows, return `false`.
*/
