/**
 * Checks if a given word exists as a full word in the text.
 * @param {string} word - Word to search for.
 * @param {string} text - The text in which to search.
 * @returns {boolean} - True if word is found as a whole word, false otherwise.
 */
function wordSearch(word, text) {
  if (!word) return false; // Edge case: empty word should not match

  // Create a regex with word boundaries \b around the word
  // \b ensures the match is a "whole word" (not part of another word)
  // 'i' flag makes it case-insensitive (remove if exact case is required)
  const regex = new RegExp(`\\b${word}\\b`, 'i');

  return regex.test(text);
}

// ✅ Examples
const text =
  'what makes the desert beautiful, said the little prince is that somewhere it hides a well';

console.log(wordSearch('prince', text)); // true
console.log(wordSearch('beautiful', text)); // true
console.log(wordSearch('clown', text)); // false
console.log(wordSearch('yellow', text)); // false
console.log(wordSearch('akes the', text)); // false

/*
### 🔎 Explanation:

1. **Why RegExp with `\b`?**

   * `\b` matches a **word boundary** (start/end of string, space, punctuation).
   * So `"prince"` will match in `"little prince"` but not in `"princess"`.

2. **Efficiency:**

   * Regex is compiled once per call and runs in linear time relative to the text length → **O(n)**.
   * No unnecessary array splits or loops.

3. **Case-sensitivity:**

   * Using `i` flag makes it **case-insensitive** (so `"Prince"` and `"prince"` both work).
   * Remove `"i"` if you want strict case-sensitive matching.

*/
