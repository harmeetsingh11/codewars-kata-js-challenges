// Preloaded dictionary of letter scores (case-insensitive)
const SCORES = {
  A: 100,
  B: 14,
  C: 9,
  D: 28,
  E: 145,
  F: 12,
  G: 3,
  H: 10,
  I: 200,
  J: 100,
  K: 114,
  L: 100,
  M: 25,
  N: 450,
  O: 80,
  P: 2,
  Q: 12,
  R: 400,
  S: 113,
  T: 405,
  U: 11,
  V: 10,
  W: 10,
  X: 3,
  Y: 210,
  Z: 23,
};

function sexyName(name) {
  // Calculate total score: convert to uppercase, filter valid letters, sum their scores
  const score = [...name.toUpperCase()]
    .filter((char) => SCORES[char]) // Only keep letters in the SCORES object
    .reduce((sum, char) => sum + SCORES[char], 0); // Sum the scores

  // Return the corresponding sexy level
  if (score <= 60) return 'NOT TOO SEXY';
  if (score <= 300) return 'PRETTY SEXY';
  if (score <= 599) return 'VERY SEXY';
  return 'THE ULTIMATE SEXIEST';
}

console.log(sexyName('Alex')); // VERY SEXY

/*
### Explanation:
- `toUpperCase()` ensures case-insensitivity.
- `[...name]` spreads the name into an array of characters.
- `filter` keeps only valid alphabetical characters that exist in `SCORES`.
- `reduce` computes the total sexy score.
- A simple if-else ladder maps score ranges to sexy level strings.
*/
