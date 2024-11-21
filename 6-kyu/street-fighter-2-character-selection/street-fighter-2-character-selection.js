function streetFighterSelection(fighters, initialPosition, moves) {
  const result = []; // Array to store hovered characters
  let [row, col] = initialPosition; // Initial cursor position

  moves.forEach((move) => {
    // Handle vertical movement (row)
    if (move === 'up') row = Math.max(row - 1, 0); // Prevent moving above the top row
    if (move === 'down') row = Math.min(row + 1, fighters.length - 1); // Prevent moving below the bottom row

    // Handle horizontal movement (col), wrap around horizontally
    if (move === 'left')
      col = (col - 1 + fighters[0].length) % fighters[0].length;
    if (move === 'right') col = (col + 1) % fighters[0].length;

    result.push(fighters[row][col]); // Add the hovered character to the result
  });

  return result; // Return the list of hovered characters
}

/* 
Explanation:

Initialization:
result is an array that stores the characters hovered during the moves.
[row, col] stores the current position of the cursor.

Processing Moves:
Vertical Movement:
up: Decrease the row index but clamp it to 0 to avoid going out of bounds.
down: Increase the row index but clamp it to the maximum valid index.
Horizontal Movement:
left and right handle horizontal wrapping using the modulo operator %.
If moving left results in a negative column index, wrap it to the last column by adding the column count.

Add Hovered Character:
After updating the position based on the move, append the character at fighters[row][col] to result.

Return Result:
After processing all moves, return the result array.
*/
