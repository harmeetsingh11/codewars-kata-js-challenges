function getInitials(input) {
  // Split the string into words based on spaces
  return input
    .split(' ') // Creates an array of words
    .map((word) => word[0]) // Maps each word to its first character
    .join(''); // Joins the array of first characters into a string
}

// Example
console.log(getInitials('This Is A Test')); // Output: "TIAT"

/* 
Explanation:

split(' '): This splits the input string into an array of words using spaces as the delimiter.
"This Is A Test" becomes ["This", "Is", "A", "Test"].

map(word => word[0]): The map method iterates through the array of words and extracts the first character (word[0]) of each word.
["This", "Is", "A", "Test"] becomes ["T", "I", "A", "T"].

join(''): Combines the array of first characters into a single string with no separator.
["T", "I", "A", "T"] becomes "TIAT".
*/
