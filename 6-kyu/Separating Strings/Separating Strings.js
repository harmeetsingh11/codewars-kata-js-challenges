/**
 * Splits a sentence into a 2D array of characters aligned column-wise.
 * @param {string} str - Input sentence.
 * @returns {string[][]} - 2D array of letters with empty strings for padding.
 */
function sepStr(str) {
  // Split sentence into words
  const words = str.split(' ');

  // Find the maximum word length
  const maxLen = Math.max(...words.map((word) => word.length));

  // Build the result: each row corresponds to a character index
  const result = Array.from(
    { length: maxLen },
    (_, i) => words.map((word) => word[i] || '') // Take i-th letter or empty string
  );

  return result;
}

// Example usage:
console.log(sepStr('Just Live Life Man'));
console.log(sepStr('The Mitochondria is the powerhouse of the cell'));

/*
We need to **separate words column-wise into characters**, filling missing spaces with empty strings (`''`).

---

### 🔎 Explanation

1. **Split words**

   * `"Just Live Life Man"` → `["Just", "Live", "Life", "Man"]`

2. **Find longest word length**

   * Longest word is `"Mitochondria"` (12 letters) → `maxLen = 12`

3. **Construct rows** (each index `i` is one row):

   * For each row `i`, map across words:

     * Take `word[i]` if it exists
     * Otherwise insert `""`

4. **Result is column alignment** of letters across words.

---

⚡ **Efficiency**:

* Time complexity → **O(n × m)** where `n = words.length`, `m = max word length`.
* Space complexity → **O(n × m)** (result matrix).
* Very efficient, concise, and clean.

---
*/
