/**
 * Replaces all variations of "to", "too", and "two" (case-insensitive),
 * even inside words, with "2".
 *
 * @param {string} str - Input sentence
 * @returns {string} - Modified sentence with replacements
 */
function textNum(str) {
  return str.replace(/too|two|to/gi, '2');
}

// Examples
console.log(textNum('I love to text')); // "I love 2 text"
console.log(textNum('see you tomorrow')); // "see you 2morrow"
console.log(textNum('look at that octopus')); // "look at that oc2pus"
console.log(textNum('TWO friends too many')); // "2 friends 2 many"

/*
this problem is best solved using **regular expressions** with a **case-insensitive flag** and careful ordering of replacements (so that `too` doesn’t get partially replaced as `to`).

---
### 🔎 Explanation

1. **Regex `/too|two|to/gi`**

   * `too|two|to` → Matches `"too"`, `"two"`, or `"to"`.
   * `g` → Global flag, replaces all occurrences.
   * `i` → Case-insensitive, matches `"TO"`, `"Too"`, `"tWo"`, etc.

2. **Ordering matters**

   * Placing `"too"` and `"two"` before `"to"` prevents partial replacements (e.g., `"too"` → `"2"`, not `"2o"`).

3. **Efficiency**

   * A single regex handles everything in one pass.
   * No need for multiple `.replace()` calls.

---
*/
