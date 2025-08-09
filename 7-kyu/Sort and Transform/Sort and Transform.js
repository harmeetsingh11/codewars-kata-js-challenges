/**
 * Converts the given array of numbers into the desired 4-part string format.
 * @param {number[]} arr - Array of numbers (ASCII codes).
 * @returns {string} - Formatted string as per the problem requirements.
 */
function fourPartString(arr) {
  // Helper function to form 4-character word from first, second, second-last, last
  const makeWord = (array) =>
    String.fromCharCode(array[0]) +
    String.fromCharCode(array[1]) +
    String.fromCharCode(array[array.length - 2]) +
    String.fromCharCode(array[array.length - 1]);

  // 1️⃣ Original order
  const part1 = makeWord(arr);

  // 2️⃣ Ascending numeric sort
  const asc = [...arr].sort((a, b) => a - b);
  const part2 = makeWord(asc);

  // 3️⃣ Descending numeric sort
  const desc = [...arr].sort((a, b) => b - a);
  const part3 = makeWord(desc);

  // 4️⃣ Convert to characters first, then sort alphabetically
  const alpha = [...arr].map((c) => String.fromCharCode(c)).sort();
  // Convert back to ASCII codes to reuse makeWord function
  const alphaCodes = alpha.map((ch) => ch.charCodeAt(0));
  const part4 = makeWord(alphaCodes);

  // Join all parts with hyphens
  return `${part1}-${part2}-${part3}-${part4}`;
}

// Example test cases:
console.log(fourPartString([111, 112, 113, 114, 115, 113, 114, 110])); // "oprn-nors-sron-nors"
console.log(fourPartString([66, 101, 55, 111, 113])); // "Beoq-7Boq-qoB7-7Boq"
console.log(fourPartString([99, 98, 97, 96, 81, 82, 82])); // "cbRR-QRbc-cbRQ-QRbc"

/*
### **Explanation**

1. **`makeWord` helper function**

   * Extracts characters from:

     * first element
     * second element
     * second-last element
     * last element
   * Uses `String.fromCharCode()` to convert ASCII codes into characters.

2. **Step-by-step processing:**

   * **Part 1:** Use the original array as-is.
   * **Part 2:** Sort **numerically ascending** and form the word.
   * **Part 3:** Sort **numerically descending** and form the word.
   * **Part 4:** Convert to characters first, sort alphabetically (based on characters), convert back to ASCII codes, and form the word.

3. **Why optimized?**

   * Sorting is `O(n log n)` — the minimal possible cost here since we must sort.
   * We copy arrays using spread `[...]` to avoid mutating the original.
   * `makeWord` is reused to avoid repetition.

*/
