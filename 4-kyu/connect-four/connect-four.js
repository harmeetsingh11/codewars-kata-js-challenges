function connectFour(piecesPositionList) {
  // Initialize the grid
  const rows = 6,
    cols = 7;
  const grid = Array.from({ length: rows }, () => Array(cols).fill(null));

  // Mapping columns from 'A' to 'G' to indexes
  const colMap = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6 };

  // Function to check if four consecutive pieces exist
  const isWinningMove = (row, col, color) => {
    const directions = [
      [0, 1], // Horizontal
      [1, 0], // Vertical
      [1, 1], // Diagonal down-right
      [1, -1], // Diagonal down-left
    ];

    for (const [dx, dy] of directions) {
      let count = 1;

      // Check in both directions
      for (const sign of [-1, 1]) {
        let r = row + sign * dx;
        let c = col + sign * dy;

        while (
          r >= 0 &&
          r < rows &&
          c >= 0 &&
          c < cols &&
          grid[r][c] === color
        ) {
          count++;
          if (count === 4) return true;
          r += sign * dx;
          c += sign * dy;
        }
      }
    }

    return false;
  };

  // Simulate the dropping of pieces into the grid
  for (const move of piecesPositionList) {
    const [colLetter, color] = move.split('_');
    const col = colMap[colLetter];

    // Drop the piece to the lowest available row in the column
    for (let row = rows - 1; row >= 0; row--) {
      if (grid[row][col] === null) {
        grid[row][col] = color;

        // Check if this move wins the game
        if (isWinningMove(row, col, color)) {
          return color;
        }
        break;
      }
    }
  }

  // If no winner, return "Draw"
  return 'Draw';
}

// Example
const piecesPositionList = [
  'A_Red',
  'B_Yellow',
  'A_Red',
  'B_Yellow',
  'A_Red',
  'B_Yellow',
  'G_Red',
  'B_Yellow',
];

console.log(connectFour(piecesPositionList)); // Output: "Yellow"

/* 
Explanation

Grid Initialization:
A 6x7 grid is created using a 2D array, initialized with null values.

Column Mapping:
Letters A to G are mapped to numerical indices for easier access.

Dropping Pieces:
For each move, the piece is dropped to the lowest available row in the specified column.

Checking for a Winner:
After each move, the isWinningMove function checks all possible directions (horizontal, vertical, and two diagonals) for four consecutive pieces of the same color.
If a winning move is found, the function immediately returns the winner's color.

Returning Results:
If no winner is found after all moves, the result is "Draw".
*/
