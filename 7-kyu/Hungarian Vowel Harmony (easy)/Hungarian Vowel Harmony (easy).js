function dative(word) {
  // Define sets of vowels grouped by their types for quick lookup
  const frontVowels = new Set(['e', 'é', 'i', 'í', 'ö', 'ő', 'ü', 'ű']);
  const backVowels = new Set(['a', 'á', 'o', 'ó', 'u', 'ú']);

  // Loop through the word from the end to find the last vowel
  for (let i = word.length - 1; i >= 0; i--) {
    const char = word[i];
    if (frontVowels.has(char)) {
      return word + 'nek'; // Add "nek" for front vowels
    }
    if (backVowels.has(char)) {
      return word + 'nak'; // Add "nak" for back vowels
    }
  }

  // If no vowels are found (shouldn't occur based on preconditions), return the word unchanged
  return word;
}

console.log(dative('ablak')); // "ablaknak"
console.log(dative('szék')); // "széknek"
console.log(dative('otthon')); // "otthonnak"

/* 
Explanation:

Set Usage for Lookup:
We use Set to store the vowels since Set allows for constant time complexity O(1) lookup. This makes the solution efficient.

Reverse Traversal:
The loop traverses the word from the end because we only care about the last vowel to determine the suffix.

Conditionals for Suffix:
If the character is found in the frontVowels set, the suffix nek is appended.
If the character is found in the backVowels set, the suffix nak is appended.

Return Statement:
The function immediately returns the word with the correct suffix as soon as it identifies the type of the last vowel.

Edge Case Handling:
Although the problem specifies that all words are valid and contain vowels, the function gracefully handles cases without vowels by returning the word unchanged.
*/
