function mispelled(word1, word2) {
  // If words are identical, return true
  if (word1 === word2) return true;

  // If word2 has one extra character at the beginning or end
  if (word1 === word2.slice(1) || word1 === word2.slice(0, -1)) return true;
  if (word2 === word1.slice(1) || word2 === word1.slice(0, -1)) return true;

  // Check if words differ by exactly one character
  if (word1.length === word2.length) {
    let diffCount = 0;
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) diffCount++;
      if (diffCount > 1) return false;
    }
    return true;
  }

  return false;
}

// Test cases
console.log(mispelled('versed', 'xersed')); // true
console.log(mispelled('versed', 'applb')); // false
console.log(mispelled('versed', 'v5rsed')); // true
console.log(mispelled('1versed', 'versed')); // true
console.log(mispelled('versed', 'versed')); // true

/* 
### Explanation:
1. **Identical words**: If `word1` and `word2` are the same, return `true`.
2. **Extra character at start or end**: If one word can be obtained by removing the first or last character of the other, return `true`.
3. **One character difference**: If the words have the same length, count differing characters. If exactly one differs, return `true`; otherwise, return `false`.

This approach ensures efficiency (`O(n)` time complexity) and keeps the implementation concise. 🚀
*/
