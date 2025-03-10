function pakify(sentence) {
  // Trim the sentence to remove leading and trailing spaces
  let words = sentence.trim().split(/\s+/); // Split by spaces, handling multiple spaces
  if (words.length <= 1) return sentence.trim(); // If only one or zero words, return as is
  return words.join(' pak '); // Join words with ' pak ' in between
}

// Test cases
console.log(pakify('Hello world')); // "Hello pak world"
console.log(pakify('I love Bali')); // "I pak love pak Bali"
console.log(pakify('  Just    testing   ')); // "Just pak testing"
console.log(pakify('')); // ""
console.log(pakify('   ')); // ""
console.log(pakify('OneWord')); // "OneWord"

/*
### Explanation:
1. **Trim Extra Spaces**: `trim()` ensures we don’t have leading/trailing spaces.
2. **Split Handling Multiple Spaces**: `split(/\s+/)` splits by one or more spaces.
3. **Edge Case Handling**: If there’s only one or zero words after trimming, return the sentence as is.
4. **Insert "pak" Efficiently**: `join(' pak ')` ensures "pak" is inserted between words but not at the start or end.
*/
