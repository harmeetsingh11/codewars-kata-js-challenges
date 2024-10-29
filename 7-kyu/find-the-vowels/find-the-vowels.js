function vowelIndices(word) {
  const vowels = 'aeiouyAEIOUY'; // Define vowels (case insensitive)

  // Use Array.from to iterate over each character with its index, filter for vowels, and map to 1-based indices
  return Array.from(word, (char, i) =>
    vowels.includes(char) ? i + 1 : null
  ).filter((index) => index !== null); // Filter out non-vowel indices
}

/* 
Explanation:

Define Vowels:
We define a string vowels containing all vowel characters in both lowercase and uppercase to handle case insensitivity.

Iterate with Array.from:
Array.from(word, (char, i) => ...) creates an array where each element is derived from each character in word, with char representing the character and i its zero-based index.
For each character, we check if it is a vowel by using vowels.includes(char).
If it is a vowel, we return i + 1 (converting to 1-based indexing). If it's not a vowel, we return null.

Filter Out Non-Vowel Indices:
We use .filter(index => index !== null) to remove any null values, leaving only the indices of vowels.

This solution is both concise and efficient, with minimal overhead due to the use of native array methods and direct filtering.
*/
