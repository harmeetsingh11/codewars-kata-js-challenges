function solve(words) {
  // Helper function to get the alphabetical position of a character
  const getAlphabetPosition = (char) => char.toLowerCase().charCodeAt(0) - 96;

  // Map over each word in the input array
  return words.map((word) =>
    // Check each character of the word and count matches
    [...word].reduce(
      (count, char, index) =>
        getAlphabetPosition(char) === index + 1 ? count + 1 : count,
      0
    )
  );
}

/* 
Explanation:

Helper Function:
getAlphabetPosition: Converts a character to its 1-based alphabetical index (a=1, b=2, ..., z=26).
Uses char.toLowerCase() to ensure case insensitivity and charCodeAt(0) to get the ASCII value of the character.
Subtracts 96 from the ASCII value to get the alphabetical position.

Processing Each Word:
The map method is used to iterate through the words array, transforming each word into the count of matching positions.

Checking Each Character:
Converts the word into an array of characters using [...word] and uses reduce to iterate through the characters.
For each character, compares its alphabetical position to its 1-based index (index + 1).
If they match, increments the count; otherwise, continues with the current count.

Output:
Returns an array where each element represents the count of matching positions for the corresponding word.
*/
