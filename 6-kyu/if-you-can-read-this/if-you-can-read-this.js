function toNato(words) {
  return words
    .toUpperCase() // Convert all characters to uppercase to match NATO dictionary keys
    .replace(/\s+/g, '') // Remove all spaces
    .split('') // Split the string into an array of characters
    .map((char) => NATO[char] || char) // Map each character to its NATO equivalent or keep punctuation as is
    .join(' '); // Join the array into a string with a single space between elements
}

/* 
Explanation:

toUpperCase:
Ensures all letters are in uppercase to match the keys in the NATO dictionary.

replace(/\s+/g, ''):
Removes all spaces from the input string, as spaces should not appear in the final output.

split(''):
Converts the string into an array of individual characters for processing.

map(char => NATO[char] || char):
Uses the NATO dictionary to translate alphabetic characters. If a character (like punctuation) doesn't exist in the dictionary, it remains unchanged.

join(' '):
Joins the processed characters back into a string, separating them with a single space, as required.

Example Usage:
const NATO = {
  A: "Alfa", B: "Bravo", C: "Charlie", D: "Delta", E: "Echo", F: "Foxtrot",
  G: "Golf", H: "Hotel", I: "India", J: "Juliett", K: "Kilo", L: "Lima",
  M: "Mike", N: "November", O: "Oscar", P: "Papa", Q: "Quebec", R: "Romeo",
  S: "Sierra", T: "Tango", U: "Uniform", V: "Victor", W: "Whiskey", X: "Xray",
  Y: "Yankee", Z: "Zulu"
};

console.log(toNato("If, you can read?"));
Output: "India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?"
*/
