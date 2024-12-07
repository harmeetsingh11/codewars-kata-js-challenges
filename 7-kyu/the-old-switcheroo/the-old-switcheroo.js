function vowel2index(str) {
  // Use a regular expression to match vowels (case insensitive)
  // Split the string into an array of characters, map over each character
  return str
    .split('')
    .map(
      (char, index) =>
        // Check if the character is a vowel using a regex
        /[aeiou]/i.test(char)
          ? index + 1 // Replace vowels with their position (1-based index)
          : char // Keep non-vowel characters unchanged
    )
    .join(''); // Join the characters back into a string
}

// Example
console.log(vowel2index('this is my string')); // Output: 'th3s 6s my str15ng'
console.log(vowel2index('Codewars is the best site in the world')); // Output: 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
console.log(vowel2index('')); // Output: ''

/* 
Explanation:

Splitting the string:
The split('') method splits the string into an array of individual characters.

Mapping over characters:
The map function iterates over each character of the array.
Check if the character is a vowel: The regular expression /[aeiou]/i matches vowels (a, e, i, o, u) regardless of case.
If it's a vowel, replace it with its 1-based position (index + 1 because index is 0-based).
If it's not a vowel, keep the character unchanged.

Joining back into a string:
After processing each character, join('') combines the array back into a single string.

Efficiency:
The function processes the string in a single pass (O(n) complexity) because of the use of map.
*/
