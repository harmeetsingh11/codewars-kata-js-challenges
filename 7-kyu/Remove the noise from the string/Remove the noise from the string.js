/**
 * Removes noise characters from a message.
 * @param {string} message - The noisy message.
 * @returns {string} - Cleaned message without noise.
 */
function removeNoise(message) {
  // Regex matches only the known noise characters
  return message.replace(/[%$&/#·@|º\\ª]/g, '');
}

// Example usage:
console.log(removeNoise('h%e&·%$·llo w&%or&$l·$%d'));
// Output: "hello world"

/*
We only need to strip the noisy characters `%$&/#·@|º\ª` (and not touch valid characters).
Best way in JavaScript is using **RegEx with character class** for replacement.

---

### Optimized Approach

* Create a regex matching only noise characters: `/[%$&/#·@|º\\ª]/g`
  (escape `\` and other special chars properly).
* Use `.replace()` to remove them.
* Complexity is **O(n)** (single pass).

---

### Explanation

* The **regex character set** `[ ... ]` allows us to list all noise characters.
* We use the **global flag `g`** so it replaces *all* occurrences, not just the first.
* `\` is escaped as `\\` inside the set to avoid regex parsing errors.
* Every match is replaced with `""` (empty string), effectively deleting it.

This is concise, efficient, and handles all cases in **one pass**.
*/
