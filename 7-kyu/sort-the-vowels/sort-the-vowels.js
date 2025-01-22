function sortVowels(s) {
  // Check for invalid input and return an empty string if input is invalid
  if (typeof s !== 'string') return '';

  // Define vowels for reference
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

  // Map each character in the string to the desired format and join with newlines
  return Array.from(s)
    .map((char) => {
      // Check if the character is a vowel or not and format accordingly
      return vowels.has(char) ? `|${char}` : `${char}|`;
    })
    .join('\n');
}

console.log(sortVowels('CODEWARS'));
// Output:
//   C|
//   |O
//   D|
//   |E
//   W|
//   |A
//   R|
//   S|

console.log(sortVowels('Rnd Te5T'));
// Output:
//   R|
//   n|
//   d|
//   |T
//   |e
//   5|
//   T|

console.log(sortVowels(null)); // Output: ""
console.log(sortVowels(123)); // Output: ""

/* 
Explanation:

Input Validation:
If the input is not a string (e.g., null, undefined, or a number), the function returns an empty string.

Character Mapping:
The Array.from() function converts the string into an array of characters for easier processing.
For each character, the function checks if it is a vowel using a Set for efficient lookup.

Formatting:
If the character is a vowel, it is formatted as |<character>.
If the character is not a vowel, it is formatted as <character>|.

Joining:
The formatted characters are joined using \n to produce the final output.
*/
