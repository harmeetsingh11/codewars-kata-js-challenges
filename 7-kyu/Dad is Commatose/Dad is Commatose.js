/**
 * Removes extraneous commas from a string.
 * Ensures:
 *  - No multiple consecutive commas
 *  - No trailing comma
 *  - No trailing whitespace
 *
 * @param {string} str - Input string possibly with extra commas
 * @returns {string} - Cleaned string
 */
function removeExtraCommas(str) {
  return str
    .replace(/,+/g, ',') // Replace multiple commas with a single comma
    .replace(/,\s*$/g, '') // Remove trailing comma(s) and any spaces after them
    .trim(); // Trim trailing whitespace just in case
}

// Example usage:
console.log(removeExtraCommas('Hello,,, world,,,')); // "Hello, world"
console.log(removeExtraCommas('Hi dad,,, how are you, ,,')); // "Hi dad, how are you"
console.log(removeExtraCommas('No extra commas here')); // "No extra commas here"

/*
### 🔎 Explanation:

1. **`/,+/g` → replace multiple commas with one**
   e.g. `"Hello,,, world"` → `"Hello, world"`

2. **`/,\s*$/g` → remove trailing commas + spaces**
   e.g. `"Hi there,,,   "` → `"Hi there"`

3. **`.trim()` → clean any extra whitespace**
   Ensures we don’t return strings ending in spaces.

---
✅ **Time Complexity:** `O(n)` (single pass regex under the hood).
✅ **Space Complexity:** `O(1)` (in-place transformation, aside from output string).
*/
