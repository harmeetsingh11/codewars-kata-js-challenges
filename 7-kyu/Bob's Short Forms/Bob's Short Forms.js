/**
 * Converts a word into its short form:
 * Removes all vowels except if they are the first or last character.
 * @param {string} word - The input word (only Roman letters, no spaces).
 * @returns {string} - Short form of the word.
 */
function shortForm(word) {
  // Define vowels for quick lookup
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

  // Convert to array for easy iteration
  const chars = word.split('');

  return chars
    .map((ch, i) => {
      // Keep first and last character always
      if (i === 0 || i === word.length - 1) return ch;
      // Keep if not a vowel (case-insensitive check)
      return vowels.has(ch.toLowerCase()) ? '' : ch;
    })
    .join('');
}

// Example:
console.log(shortForm('assault')); // "asslt"
console.log(shortForm('AMAZING')); // "AMZNG"
console.log(shortForm('elephant')); // "elphnt"

/*
### **How it Works**

1. **Vowel Set for O(1) Lookup**
   We store vowels in a `Set` so checking if a character is a vowel is very fast.

2. **Iterate Through Characters**

   * If **index is first or last**, keep the character.
   * Otherwise, **skip vowels**.

3. **Case Insensitivity**
   We convert characters to lowercase before checking against the vowel set.

4. **Join Back into a String**
   We remove skipped characters by returning `''` and joining.

---

### **Time & Space Complexity**

* **Time:** `O(n)` — Single pass through the string.
* **Space:** `O(n)` — Output string plus minimal extra space.
*/
