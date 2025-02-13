const sumPPG = (player1, player2) => player1.ppg + player2.ppg;

// Constructor function for NBA players
function NBAplayer(name, team, ppg) {
  this.name = name;
  this.team = team;
  this.ppg = ppg;
}

var iverson = new NBAplayer('Iverson', '76ers', 11.2);
var jordan = new NBAplayer('Jordan', 'Bulls', 20.2);

console.log(sumPPG(iverson, jordan)); // Output: 31.4

/*
Explanation:
1. **Concise Function**: `sumPPG` is an arrow function that directly returns the sum of `ppg` from both players.
2. **Constructor Function**: `NBAplayer` is a constructor to create player objects with `name`, `team`, and `ppg` properties.
3. **Efficiency**: The function accesses the `ppg` properties directly and performs an addition, making it `O(1)` in time complexity.
4. **Minimal and Readable Code**: No unnecessary variables or loops are used, ensuring clarity.
*/
