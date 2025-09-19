/**
 * Converts words in a string to valid hex values (if possible) and sums them.
 * @param {string} str - Input string with uppercase words.
 * @returns {number} - Decimal sum of all valid hex words.
 */
function hexWordSum(str) {
  return str
    .split(' ') // Split into words
    .map(
      (word) =>
        word
          .replace(/O/g, '0') // Replace 'O' with '0'
          .replace(/S/g, '5') // Replace 'S' with '5'
    )
    .map(
      (word) =>
        /^[0-9A-F]+$/.test(word) // Check if it's a valid hex word
          ? parseInt(word, 16) // Convert from hex → decimal
          : 0 // Invalid word contributes 0
    )
    .reduce((sum, val) => sum + val, 0); // Sum everything
}

// Example usage:
console.log(hexWordSum('BAG OF BEES')); // Output: 48884

/*
### 🔎 Explanation

1. **Splitting the string** → We break the input into words using spaces.
   Example: `"BAG OF BEES"` → `["BAG", "OF", "BEES"]`.

2. **Substitute letters** → Since `O → 0` and `S → 5`, we replace them.
   `"OF"` → `"0F"`, `"BEES"` → `"BEE5"`.

3. **Check for valid hex** → A valid hex can only have `[0-9A-F]`.

   * `"BAG"` → invalid → contributes `0`.
   * `"0F"` → valid → `15`.
   * `"BEE5"` → valid → `48869`.

4. **Convert and sum** → Use `parseInt(word, 16)` for valid words, else `0`.
   Total sum = `0 + 15 + 48869 = 48884`.

---
*/
