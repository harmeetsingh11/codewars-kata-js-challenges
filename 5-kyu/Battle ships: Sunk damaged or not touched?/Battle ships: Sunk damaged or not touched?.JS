function damagedOrSunk(board, attacks) {
  // Reverse the board to match the given coordinate system
  board = board.reverse();

  let boatParts = {},
    hitParts = {};

  // First pass: Identify boats and their parts
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      let boat = board[y][x];
      if (boat) {
        boatParts[boat] = (boatParts[boat] || 0) + 1;
      }
    }
  }

  // Second pass: Process attacks
  for (let [x, y] of attacks) {
    let boat = board[y - 1][x - 1]; // Convert coordinates to array indices
    if (boat) {
      hitParts[boat] = (hitParts[boat] || 0) + 1;
    }
  }

  let sunk = 0,
    damaged = 0,
    notTouched = 0,
    points = 0;

  // Determine boat statuses
  for (let boat in boatParts) {
    if (!hitParts[boat]) {
      notTouched++;
      points -= 1;
    } else if (hitParts[boat] === boatParts[boat]) {
      sunk++;
      points += 1;
    } else {
      damaged++;
      points += 0.5;
    }
  }

  return { sunk, damaged, notTouched, points };
}

const board = [
  [0, 0, 0, 2, 2, 0],
  [0, 3, 0, 0, 0, 0],
  [0, 3, 0, 1, 0, 0],
  [0, 3, 0, 1, 0, 0],
];
const attacks = [
  [2, 1],
  [1, 3],
  [4, 2],
];
console.log(damagedOrSunk(board, attacks));
// Output: { sunk: 0, damaged: 2, notTouched: 1, points: 0 }

/* 
### Explanation:
1. **Reverse the board** to match the given coordinate system where (1,1) is bottom-left.
2. **Identify boats** by counting their occurrences in `boatParts`.
3. **Process attacks** and track how many times each boat is hit in `hitParts`.
4. **Determine the status** of each boat:
   - If a boat is completely hit → it’s sunk (`sunk++`, `points+1`).
   - If a boat is hit but not sunk → it's damaged (`damaged++`, `points+0.5`).
   - If a boat is never hit → it's untouched (`notTouched++`, `points-1`).

This ensures an efficient O(n) solution with two passes over the board and a single loop over boats. 
*/
