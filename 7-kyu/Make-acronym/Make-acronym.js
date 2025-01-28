function makeAcronym(str) {
  // Split the string by spaces, map the first character of each word to uppercase, and join the letters
  return str
    .split(' ') // Split the string into words by space
    .map((word) => word[0].toUpperCase()) // Take the first letter of each word and convert it to uppercase
    .join(''); // Join all the letters together to form the acronym
}

console.log(makeAcronym('Code wars')); // Output: CW

/* 
Explanation:

split(' '): This splits the input string into an array of words based on spaces.
Example: "Code wars" becomes ["Code", "wars"].

map(word => word[0].toUpperCase()):
map iterates over each word in the array.
word[0] extracts the first character of the word.
toUpperCase() ensures the character is converted to uppercase.

join(''): Combines the resulting array of uppercase letters into a single string without any separator.
*/
