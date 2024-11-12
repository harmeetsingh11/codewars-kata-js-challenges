function duckDuckGoose(players, position) {
  // Use modulo to find the effective index in the array and return the name of the chosen player
  return players[(position - 1) % players.length].name;
}

/* 
Explanation:

Modulo Operation:
Since the circle "wraps around," we use the modulo operator to determine the effective position within the players array.
(position - 1) % players.length calculates the index of the chosen player.
position - 1 is used because arrays are zero-indexed, but the position is given as one-indexed.

Return the Player’s Name:
We access the player at the calculated index and return their name property.

Example:
For duckDuckGoose([a, b, c, d], 5), with players.length being 4:
(5 - 1) % 4 = 4 % 4 = 0, so it returns players[0].name, which is a.name.
*/
