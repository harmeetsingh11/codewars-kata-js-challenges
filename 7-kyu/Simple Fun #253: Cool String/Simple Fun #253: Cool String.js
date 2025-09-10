/**
 * Checks if a string is "cool".
 * A string is cool if:
 *  - It contains only Latin letters (no digits, no spaces, no symbols).
 *  - No two adjacent letters are both lowercase or both uppercase.
 *
 * @param {string} s - Input string
 * @returns {boolean} - true if string is cool, false otherwise
 */
function isCool(s) {
  // Regex to ensure only Latin letters
  if (!/^[a-zA-Z]+$/.test(s)) return false;

  // Iterate through adjacent characters
  for (let i = 1; i < s.length; i++) {
    const prev = s[i - 1];
    const curr = s[i];

    // If both are lowercase OR both are uppercase → not cool
    if (
      (prev === prev.toLowerCase() && curr === curr.toLowerCase()) ||
      (prev === prev.toUpperCase() && curr === curr.toUpperCase())
    ) {
      return false;
    }
  }

  return true;
}

console.log(isCool('aQwFdA')); // true
console.log(isCool('aBC')); // false
console.log(isCool('AaA')); // true
console.log(isCool('q q')); // false

/*
### Explanation

1. **Check valid characters only**

   * Using regex `/^[a-zA-Z]+$/` ensures that the string has only **Latin letters**. If not, return `false`.

2. **Check alternating case**

   * Loop through the string from index `1` to end.
   * Compare each character with its previous one:

     * If both are lowercase OR both are uppercase → invalid (`false`).
     * Otherwise continue.

3. **Return `true` if all checks pass**.

✅ Time Complexity: **O(n)** (single pass + regex check)
✅ Space Complexity: **O(1)** (constant extra space)
*/
