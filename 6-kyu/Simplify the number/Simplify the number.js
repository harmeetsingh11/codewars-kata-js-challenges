/**
 * Breaks a number into its expanded form string representation.
 * @param {number} num - Positive integer (>= 0)
 * @returns {string} - Expanded form as a string
 */
function expandedForm(num) {
  // Convert number to string to easily access digits
  const digits = String(num).split('');
  const len = digits.length;

  // Map each digit to its expanded form if not zero
  const parts = digits
    .map((d, i) => {
      if (d === '0') return ''; // Skip zeros
      const power = len - i - 1; // Position from right
      return power > 0 ? `${d}*${10 ** power}` : d; // Format
    })
    .filter(Boolean); // Remove empty strings

  // Join with '+' and return
  return parts.join('+');
}

// Example runs
console.log(expandedForm(0)); // ""
console.log(expandedForm(56)); // "5*10+6"
console.log(expandedForm(60)); // "6*10"
console.log(expandedForm(999)); // "9*100+9*10+9"
console.log(expandedForm(10004)); // "1*10000+4"

/*
### 📝 Explanation:

1. Convert the number to a string so each digit can be processed individually.
2. Loop through digits with their index:

   * If the digit is `0`, skip it.
   * Otherwise, compute its **power of 10** based on its position.
   * If the digit is at the last place (power = 0), just keep the digit.
   * Otherwise, format as `digit*10^power`.
3. Filter out empty entries (zeros).
4. Join all parts with `"+"`.

---
⚡ **Efficiency**:

* Time Complexity: **O(n)** where `n` = number of digits (just one pass).
* Space Complexity: **O(n)** for the output parts.

*/
