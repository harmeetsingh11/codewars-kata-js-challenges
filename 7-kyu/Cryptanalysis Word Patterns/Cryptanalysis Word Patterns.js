function wordPattern(word) {
  // Convert the word to lowercase to ensure case-insensitivity
  word = word.toLowerCase();

  // Map to store the first occurrence of each character
  const charMap = new Map();
  let pattern = [];
  let code = 0;

  for (let char of word) {
    // Assign a unique code to each character
    if (!charMap.has(char)) {
      charMap.set(char, code++);
    }
    // Append the code to the pattern array
    pattern.push(charMap.get(char));
  }

  // Join the pattern array with '.' and return
  return pattern.join('.');
}

console.log(wordPattern('hello')); // Output: "0.1.2.2.3"
console.log(wordPattern('helLo')); // Output: "0.1.2.2.3"
console.log(wordPattern('heLlo')); // Output: "0.1.2.2.3"

/* 
Explanation:

Case-insensitivity: The input word is converted to lowercase using toLowerCase() to handle case insensitivity.

Mapping characters:
A Map is used to store the first occurrence of each character and assign it a unique integer code.
The Map ensures efficient O(1) lookup and insertion.

Building the pattern:
Iterate over each character in the word.
If the character is not in the Map, assign it the next available code and store it in the Map.
Retrieve the code for the character from the Map and append it to the pattern array.

Output:
The array of codes (pattern) is joined using '.' to produce the desired string.

Complexity:
Time Complexity: O(n) where n is the length of the word, as we iterate over the word once.
Space Complexity: O(u) where u is the number of unique characters in the word (bounded by the alphabet size).
*/
