function vowelOne(input) {
  // Define a set of vowels for quick lookup
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

  // Convert the input string to an array, map each character to '1' or '0', and join the result
  return [...input].map((char) => (vowels.has(char) ? '1' : '0')).join('');
}

// Examples
console.log(vowelOne('abceios')); // Output: "1001110"
console.log(vowelOne('aeiou, abc')); // Output: "1111100100"

/* 
Explanation:

Using a Set for vowels:
A Set provides O(1) average-time complexity for lookups, making it efficient for checking if a character is a vowel.

Spread operator:
[...input] converts the string into an array of characters, allowing you to use map for transformation.

map transformation:
For each character, check if it's in the Set of vowels. If yes, return '1'; otherwise, return '0'.

Joining the result:
After mapping, join('') combines the array of '1' and '0' into a single string.
*/
