function scrabbleScore(word) {
  // Ensure the word is treated as uppercase for consistent scoring
  return [...word.toUpperCase()].reduce((score, char) => {
    // Use the preloaded $dict to get the score for each character if it's a letter
    return score + ($dict[char] || 0);
  }, 0); // Start with a score of 0
}

const $dict = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10,
};

console.log(scrabbleScore('cabbage')); // 14
console.log(scrabbleScore('STREET')); // 6
console.log(scrabbleScore('st re et')); // 6
console.log(scrabbleScore('ca bba g  e')); // 14
console.log(scrabbleScore('')); // 0

/* 
Explanation:

Convert to Uppercase:
word.toUpperCase() ensures that the scoring is case-insensitive since $dict uses uppercase keys.

Split into Characters:
[...word] turns the string into an array of characters for easy iteration.

Use Reduce for Scoring:
reduce iterates through the array of characters and accumulates the total score.
$dict[char] || 0 checks if the character exists in the dictionary (scorable letter). If not (e.g., spaces or non-alphabet characters), it defaults to 0.

Initial Score:
The accumulator starts at 0 (the base score for an empty word).

This solution is optimal because:
It processes each character only once (O(n) time complexity).
It avoids unnecessary space usage or complex logic.
*/
