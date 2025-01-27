function firstNonRepeatedCharacter(str) {
  // Create a map to store character frequencies
  const charCount = {};

  // First pass: Count occurrences of each character
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Second pass: Find the first character with a count of 1
  for (const char of str) {
    if (charCount[char] === 1) {
      return char; // Return the first non-repeated character
    }
  }

  // If no unique character is found, return null
  return null;
}

console.log(firstNonRepeatedCharacter('test')); // Output: "e"
console.log(firstNonRepeatedCharacter('teeter')); // Output: "r"
console.log(firstNonRepeatedCharacter('trend')); // Output: "t"
console.log(firstNonRepeatedCharacter('aabbcc')); // Output: null

/* 
Explanation:

Step 1 - Count Character Frequencies:
Iterate through the string, using a map (charCount) to store the frequency of each character.
For each character, increment its count in the map (charCount[char] = (charCount[char] || 0) + 1).

Step 2 - Find the First Non-Repeated Character:
Iterate through the string again.
For each character, check its count in the map. If it's 1, return the character as the first non-repeated character.

Step 3 - Handle the Case of No Unique Characters:
If no character has a count of 1, return null.

Complexity:
Time Complexity: 
O(n), where n is the length of the string (one pass to count characters, another to find the first non-repeated character).
Space Complexity: 
O(k), where k is the number of unique characters in the string (space for the charCount map).
*/
