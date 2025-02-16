function isItLetter(char) {
  // Check if the input is a single character and is within A-Z or a-z range
  return /^[a-zA-Z]$/.test(char);
}

// Test cases
console.log(isItLetter('a')); // true
console.log(isItLetter('Z')); // true
console.log(isItLetter('1')); // false
console.log(isItLetter('@')); // false
console.log(isItLetter('ab')); // false (more than one character)
console.log(isItLetter(' ')); // false (space is not a letter)

/* 
Explanation:
1. The function `isItLetter` takes a single character as input.
2. It uses a **regular expression (`/^[a-zA-Z]$/`)** to check if the character is a letter (either uppercase or lowercase).
3. The `^` and `$` ensure that the entire input is exactly one letter.
4. The `.test(char)` method returns `true` if the input matches the regex, otherwise `false`.
5. This approach is concise, efficient, and works for all edge cases, including non-letter characters, digits, symbols, spaces, and multiple-character inputs.
*/
