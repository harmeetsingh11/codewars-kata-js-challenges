function redKnight(N, P) {
  // Determine which pawn the knight can catch:
  // The knight moves 2 forward and 1 vertically (up/down)
  // Since pawns move 1 forward each turn, and the knight moves 2 forward,
  // the knight gains 1 horizontal square per turn.
  // So knight can catch pawn only if both reach same horizontal at same time.

  // White pawn starts at vertical 0, black at 1
  // Calculate number of knight moves needed to reach vertical of pawn:
  // Since knight moves 1 up/down per 2 forward, vertical and horizontal parity must match
  // i.e., (P - 0) % 2 === (N - 0) % 2 to reach vertical 0 (white)
  // and     (P - 0) % 2 === (N - 1) % 2 to reach vertical 1 (black)

  // So we just check which of white or black pawn can be caught
  const canCatchWhite = P % 2 === N % 2; // parity match with white (0)
  const canCatchBlack = P % 2 === (1 - N) % 2; // parity match with black (1)

  if (canCatchWhite) {
    return ['White', P * 2]; // caught at double the pawn's start horizontal
  } else {
    return ['Black', P * 2]; // same for black if white can't be caught
  }
}

console.log(redKnight(0, 4)); // ["White", 8]

/*
### Explanation:

* Pawns move first: 1 square per turn
* Red Knight: 2 forward + 1 up/down = gains 1 forward per pawn's 1 move
* To catch a pawn at `(vertical, horizontal)`:

  * Red Knight must match both `vertical` and `horizontal` after same number of turns
  * Parity check ensures the knight can land on the same row as the pawn when it reaches the column
*/
