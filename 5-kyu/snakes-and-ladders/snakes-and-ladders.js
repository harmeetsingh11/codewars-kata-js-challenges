class SnakesLadders {
  constructor() {
    // Initialize the game state
    this.positions = [0, 0]; // Player positions: [Player 1, Player 2]
    this.currentPlayer = 0; // Index of the current player (0 or 1)
    this.gameOver = false; // Game state

    // Define snakes and ladders on the board
    this.snakesLaddersMap = {
      2: 38,
      7: 14,
      8: 31,
      15: 26,
      16: 6,
      21: 42,
      28: 84,
      36: 44,
      46: 25,
      49: 11,
      51: 67,
      62: 19,
      64: 60,
      71: 91,
      74: 53,
      78: 98,
      87: 94,
      89: 68,
      92: 88,
      95: 75,
      99: 80,
    };
  }

  play(die1, die2) {
    if (this.gameOver) return 'Game over!'; // If game is over, reject further moves

    const player = this.currentPlayer; // Get current player index
    let position = this.positions[player]; // Get current position of the player

    // Move the player based on dice rolls
    position += die1 + die2;

    // Handle "bounce back" if overshooting square 100
    if (position > 100) {
      position = 100 - (position - 100);
    }

    // Check if the position lands on a snake or ladder
    if (this.snakesLaddersMap[position]) {
      position = this.snakesLaddersMap[position];
    }

    // Update the player's position
    this.positions[player] = position;

    // Check for a win condition
    if (position === 100) {
      this.gameOver = true; // End the game
      return `Player ${player + 1} Wins!`;
    }

    // Determine if the player gets another turn
    if (die1 !== die2) {
      this.currentPlayer = 1 - player; // Switch turn to the other player
    }

    // Return the player's updated position
    return `Player ${player + 1} is on square ${position}`;
  }
}

/* 
Explanation

Initialization:
positions: Tracks the board positions of both players.
currentPlayer: Indicates which player's turn it is (Player 1 or Player 2).
gameOver: Tracks whether the game has concluded.

Snakes and Ladders Map:
A mapping of squares to their destinations due to snakes or ladders.

play Method:
If the game is over, reject additional moves.
Update the player's position based on dice rolls.
Handle overshooting square 100 by bouncing back.
Adjust for snakes or ladders if the player lands on a mapped square.
Check if the player wins by landing exactly on square 100.
Allow another turn if the dice rolls are the same, otherwise switch turns.
Return the player's status or the game's outcome.
*/
