/**
 * Removes all leading and trailing whitespace from a string
 * without using built-in trim methods.
 *
 * @param {string} str - Input string
 * @returns {string} - Trimmed string
 */
function trim(str) {
  let start = 0; // pointer for leading whitespace
  let end = str.length - 1; // pointer for trailing whitespace

  // Move start forward until non-whitespace is found
  while (start <= end && /\s/.test(str[start])) {
    start++;
  }

  // Move end backward until non-whitespace is found
  while (end >= start && /\s/.test(str[end])) {
    end--;
  }

  // Extract substring between start and end
  return str.slice(start, end + 1);
}

console.log(trim('   hello world   ')); // "hello world"
console.log(trim('\n\t  OpenAI Rocks! \t\n')); // "OpenAI Rocks!"
console.log(trim('noSpace')); // "noSpace"
console.log(trim('   ')); // "" (only whitespace)

/*
Since `trim`, `trimLeft`, and `trimRight` are disabled, we’ll manually implement trimming by using **two pointers**: one scanning from the start and another from the end of the string, skipping whitespace characters.

---
### 🔎 Explanation:

1. We initialize two pointers:

   * `start` from the beginning.
   * `end` from the end.
2. Increment `start` while the character is whitespace (`\s` matches spaces, tabs, newlines, etc.).
3. Decrement `end` while the character is whitespace.
4. When both pointers stop, we slice from `start` to `end + 1`.
5. This ensures all leading and trailing whitespace is removed without touching built-in `trim`.

---
This is **O(n)** time complexity (single scan) and **O(1)** extra space, making it optimal.
*/
