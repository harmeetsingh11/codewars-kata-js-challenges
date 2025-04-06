function streetFighterSelection(fighters, position, moves) {
  const rows = fighters.length;
  const cols = fighters[0].length;
  let [row, col] = position;
  const result = [];

  for (const move of moves) {
    if (move === 'up') {
      // Move up only if the position above is not an empty string
      if (row > 0 && fighters[row - 1][col] !== '') {
        row--;
      }
    } else if (move === 'down') {
      // Move down only if the position below is not an empty string
      if (row < rows - 1 && fighters[row + 1][col] !== '') {
        row++;
      }
    } else {
      // For left and right, rotate within the row, skipping empty slots
      let newCol = col;
      do {
        newCol =
          move === 'left'
            ? (newCol - 1 + cols) % cols // wrap left
            : (newCol + 1) % cols; // wrap right
      } while (fighters[row][newCol] === '');

      col = newCol;
    }

    result.push(fighters[row][col]); // Add the current fighter to result
  }

  return result;
}

const fighters = [
  ['', 'Ryu', 'E.Honda', 'Blanka', 'Guile', ''],
  ['Balrog', 'Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat'],
  ['Vega', 'T.Hawk', 'Fei Long', 'Deejay', 'Cammy', 'M.Bison'],
];

const initialPosition = [0, 1]; // Starting on "Ryu"
const moves = [
  'left',
  'left',
  'left',
  'left',
  'left',
  'right',
  'down',
  'down',
  'right',
  'up',
  'left',
];

console.log(streetFighterSelection(fighters, initialPosition, moves));

/*
### Explanation Summary:

- **Up/Down**: Move only if the destination is **not empty**.
- **Left/Right**: Wrap horizontally and **skip over empty slots** until a valid character is found.
- **Modulus operator** `%` ensures wrapping for horizontal movement.
- Efficient since we iterate once through `moves`, and each move has O(1) logic (or O(cols) in worst case for skipping multiple empties).
*/
