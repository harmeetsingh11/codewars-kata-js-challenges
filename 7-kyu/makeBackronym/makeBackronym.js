// Preloaded dictionary for mapping letters to words
const dict = {
  A: 'amazing',
  B: 'brilliant',
  C: 'creative',
  D: 'disturbing',
  E: 'exciting',
  F: 'fantastic',
  G: 'gregarious',
  H: 'hilarious',
  I: 'intelligent',
  J: 'jovial',
  K: 'klingon',
  L: 'literal',
  M: 'mustache',
  N: 'novel',
  O: 'outstanding',
  P: 'perfect',
  Q: 'quirky',
  R: 'remarkable',
  S: 'serving',
  T: 'terrific',
  U: 'unique',
  V: 'vivid',
  W: 'witty',
  X: 'xenial',
  Y: 'youthful',
  Z: 'zesty',
};

function makeBackronym(str) {
  return str
    .toUpperCase() // Convert string to uppercase to match dictionary keys
    .split('') // Split the string into individual characters
    .map((letter) => dict[letter] || '') // Map each character to its dictionary word
    .join(' '); // Join the words with a single space
}

// Examples
console.log(makeBackronym('dgm')); // Output: "disturbing gregarious mustache"
console.log(makeBackronym('lkj')); // Output: "literal klingon joke"

/* 
Explanation

toUpperCase(): Ensures the input string is in uppercase, as the dictionary keys are uppercase letters.

split(""): Splits the string into an array of individual characters for processing.

map(): Transforms each character into its corresponding word from the dictionary. If a character is not found in the dictionary, it maps to an empty string ("").

join(" "): Joins the array of words with a single space to form the final backronym string.
*/
