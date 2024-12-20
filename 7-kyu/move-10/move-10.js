function shiftLetters(input) {
  return input
    .split('') // Split the string into an array of characters
    .map((char) => {
      // Check if character is a letter
      if (/[a-z]/.test(char)) {
        // Calculate the new character code
        let newCharCode = char.charCodeAt(0) + 10;
        // Wrap around if past 'z'
        if (newCharCode > 122) {
          newCharCode = 96 + (newCharCode - 122);
        }
        return String.fromCharCode(newCharCode);
      }
      return char; // Non-letters remain unchanged
    })
    .join(''); // Join the characters back into a string
}

// Example
const result = shiftLetters('abcdef'); // "klmnop"
console.log(result);

/* 
Explanation:

Split the String:
The split('') method converts the string into an array of individual characters for easier processing.

Map Each Character:
Use the map function to process each character in the array:
Check if the character is a lowercase letter using a regular expression (/[a-z]/).
Compute the new character code by adding 10 to the current character's ASCII code.
If the new character code exceeds the ASCII code for 'z' (122), wrap it around using modular arithmetic.

Handle Wrapping:
For characters going past 'z', calculate the overflow and start again from 'a'. The formula 96 + (newCharCode - 122) ensures wrapping back to the start of the alphabet.

Rejoin Characters:
After processing all characters, use join('') to combine them back into a single string.

Output:
The transformed string is returned, with all alphabetic characters shifted 10 places forward and non-alphabetic characters left unchanged.
*/
