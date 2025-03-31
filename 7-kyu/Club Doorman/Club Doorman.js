function clubAccess(word) {
  // Loop through the word, stopping at the second-last character
  for (let i = 0; i < word.length - 1; i++) {
    // Check for consecutive identical letters
    if (word[i] === word[i + 1]) {
      // Calculate the alphabet position (a = 1, b = 2, ..., z = 26)
      const position = word[i].charCodeAt(0) - 96;
      // Return the position multiplied by 3
      return position * 3;
    }
  }
  return 0; // Fallback, though the input guarantees one repeated pair
}

console.log(clubAccess('lettuce')); // Output: 60
console.log(clubAccess('apple')); // Output: 48 (p is the repeated letter: 16 × 3)
console.log(clubAccess('coffee')); // Output: 18 (f is the repeated letter: 6 × 3)

/*
**Explanation:**
1. **Loop Through the Word:**  
   - The loop iterates over the string, checking each letter and the next one.
   - It stops at `word.length - 1` to avoid accessing out-of-bounds indices.

2. **Find Consecutive Identical Letters:**  
   - `if (word[i] === word[i + 1])` checks for consecutive duplicates.

3. **Alphabet Position:**  
   - `charCodeAt(0)` gets the Unicode value of the letter.
   - Subtracting 96 gives the position in the alphabet (`a` → 1, `b` → 2, ..., `z` → 26).

4. **Return the Result:**  
   - The position is multiplied by 3 and returned.

This solution is efficient (`O(n)` time complexity) and concise, handling the guaranteed single pair condition perfectly.
*/
