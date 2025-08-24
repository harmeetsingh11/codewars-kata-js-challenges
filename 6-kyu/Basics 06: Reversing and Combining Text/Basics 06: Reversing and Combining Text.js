/**
 * Reverse and Combine Words
 * @param {string} str - Input string containing words separated by spaces
 * @returns {string} - Final single combined word
 */
function reverseAndCombine(str) {
  // Helper: reverse a word
  const reverse = (s) => s.split('').reverse().join('');

  // Split input into words
  let words = str.split(' ');

  // Keep combining until only one word remains
  while (words.length > 1) {
    const newWords = [];
    for (let i = 0; i < words.length; i += 2) {
      if (i + 1 < words.length) {
        // Reverse both and combine pairs
        newWords.push(reverse(words[i]) + reverse(words[i + 1]));
      } else {
        // Handle last single word (odd case)
        newWords.push(reverse(words[i]));
      }
    }
    words = newWords; // Update words for next round
  }

  return words[0]; // Only one word remains
}

console.log(reverseAndCombine('abc def'));
// "cbafed"

console.log(reverseAndCombine('abc def ghi 123'));
// "defabc123ghi"

console.log(reverseAndCombine('abc def gh34 434ff 55_eri 123 343'));
// "43hgff434cbafed343ire_55321"

/*
### 🔎 Explanation

1. **Split into words** → `str.split(" ")`
   Example: `"abc def ghi 123"` → `["abc", "def", "ghi", "123"]`

2. **Loop until one word remains**:

   * Reverse each word.
   * Combine pairs: `rev(word1) + rev(word2)`.
   * If odd number of words, reverse the last one alone.

3. **Repeat** with the new list until there’s only one word.
---

⚡ Complexity:

* Each round processes all characters once.
* At most `log₂(n)` rounds (halves each time).
* **Time Complexity:** `O(n * log n)` where `n` = total characters.
* **Space Complexity:** `O(n)` for storing arrays.
*/
