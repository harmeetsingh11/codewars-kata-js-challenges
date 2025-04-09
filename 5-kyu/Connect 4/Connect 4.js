class Connect4 {
  constructor() {
    // 6 rows x 7 columns initialized with 0 (empty)
    this.grid = Array.from({ length: 6 }, () => Array(7).fill(0));
    this.currentPlayer = 1;
    this.finished = false;
  }

  play(col) {
    if (this.finished) return 'Game has finished!';

    // Find the first empty row from bottom up in the given column
    const row = this.grid.findIndex((r) => r[col] === 0);
    if (row === -1) return 'Column full!';

    // Place the current player's disc
    this.grid[row][col] = this.currentPlayer;

    // Check win condition
    if (this.checkWin(row, col)) {
      this.finished = true;
      return `Player ${this.currentPlayer} wins!`;
    }

    // Toggle the player (1 ↔ 2)
    const msg = `Player ${this.currentPlayer} has a turn`;
    this.currentPlayer = 3 - this.currentPlayer;
    return msg;
  }

  checkWin(row, col) {
    const directions = [
      [0, 1], // Horizontal →
      [1, 0], // Vertical ↓
      [1, 1], // Diagonal ↘
      [1, -1], // Diagonal ↙
    ];

    const player = this.grid[row][col];

    for (let [dr, dc] of directions) {
      let count = 1;

      // Check in both directions from the placed disc
      for (let dir of [-1, 1]) {
        let r = row + dr * dir,
          c = col + dc * dir;
        while (
          r >= 0 &&
          r < 6 &&
          c >= 0 &&
          c < 7 &&
          this.grid[r][c] === player
        ) {
          count++;
          r += dr * dir;
          c += dc * dir;
        }
      }

      if (count >= 4) return true;
    }

    return false;
  }
}

/*
### Explanation:
- The board is a 6x7 2D array (`grid`) where 0 means empty, 1 and 2 represent Player 1 and Player 2.
- The `play(col)` method:
  - Checks if the game is already won.
  - Finds the lowest available row in the selected column.
  - If the column is full, returns `"Column full!"`.
  - Places the disc, checks for win, and updates the game state accordingly.
- The `checkWin` method:
  - Looks in 4 directions (horizontal, vertical, and two diagonals).
  - Uses a simple loop to count consecutive discs in both directions.
  - If 4 or more connected discs are found, the player wins.
*/
