const rpsls = (p1, p2) => {
  // Define winning conditions in a Set for quick lookup
  const winMap = new Set([
    'scissors paper',
    'paper rock',
    'rock lizard',
    'lizard spock',
    'spock scissors',
    'scissors lizard',
    'lizard paper',
    'paper spock',
    'spock rock',
    'rock scissors',
  ]);

  // If both choices are the same, it's a draw
  if (p1 === p2) return 'Draw!';

  // Determine winner using the winning conditions map
  return winMap.has(`${p1} ${p2}`) ? 'Player 1 Won!' : 'Player 2 Won!';
};

console.log(rpsls('rock', 'scissors')); // "Player 1 Won!"
console.log(rpsls('spock', 'lizard')); // "Player 2 Won!"
console.log(rpsls('lizard', 'lizard')); // "Draw!"

/* 
Explanation:
1. **Winning Conditions**: Stored in a `Set` for quick lookup.
2. **Draw Check**: If both players choose the same item, return `"Draw!"`.
3. **Win Check**: If Player 1's choice beats Player 2's, return `"Player 1 Won!"`, else return `"Player 2 Won!"`.
4. **Efficiency**: Uses constant-time lookup (`O(1)`) for winning conditions, making it optimal.
*/
