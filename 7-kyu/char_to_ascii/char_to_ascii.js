function charToAsciiHash(str) {
  // Return null if input is empty or not a string
  if (!str || typeof str !== 'string') return null;

  const result = {};
  const seen = new Set();

  for (const char of str) {
    // Check if character is alphabetic and not already seen
    if (/[a-zA-Z]/.test(char) && !seen.has(char)) {
      seen.add(char); // Mark character as seen
      result[char] = char.charCodeAt(0); // Assign ASCII value
    }
  }

  // If no alphabetic characters found, return null
  return Object.keys(result).length ? result : null;
}

console.log(charToAsciiHash('Hello, World!'));
// Output: { H: 72, e: 101, l: 108, o: 111, W: 87, r: 114, d: 100 }

/*
### Features:

* **Efficient**: Linear time complexity, O(n), where *n* is the length of the string.
* **Ignores repeats**: Uses a `Set` to track already processed characters.
* **Ignores non-alphabetic characters**: Uses regex `/[a-zA-Z]/`.
* **Handles edge cases**: Returns `null` for empty string or strings with no valid characters.
*/
