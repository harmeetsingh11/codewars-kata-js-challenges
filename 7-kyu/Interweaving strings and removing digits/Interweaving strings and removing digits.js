/**
 * Reconstructs Rick's original message by interweaving two strings
 * and removing any random digits that were inserted.
 *
 * @param {string} s1 - First part of the split message
 * @param {string} s2 - Second part of the split message
 * @returns {string} - Decoded original message
 */
function interweave(s1, s2) {
  let result = [];
  let i = 0,
    j = 0;

  // Alternate characters from both strings
  while (i < s1.length || j < s2.length) {
    if (i < s1.length) result.push(s1[i++]);
    if (j < s2.length) result.push(s2[j++]);
  }

  // Join, remove digits, and trim spaces
  return result.join('').replace(/\d+/g, '').trim();
}

console.log(interweave('hlo', 'el')); // "hello"
console.log(interweave('h3lo', 'el4')); // "hello"
console.log(interweave(' w1o rl', 'd2 ')); // "world"

/*
We need to reconstruct Rick’s original message by interleaving two strings, while also **removing any digits** and trimming leading/trailing spaces.

---

### 🔎 Explanation

1. **Interweaving step**

   * We alternate characters from `s1` and `s2` one by one.
   * This recreates the mixed-up message Rick initially created.

2. **Cleaning step**

   * Since Rick inserted random digits, we use regex `\d+` to remove all numbers.
   * We also use `.trim()` to remove any unwanted spaces from start/end.

3. **Efficiency**

   * Time complexity: **O(n + m)** where `n` and `m` are lengths of `s1` and `s2`.
   * Space complexity: **O(n + m)** for the result array.

*/
