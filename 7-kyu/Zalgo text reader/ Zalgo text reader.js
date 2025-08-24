/**
 * Removes Zalgo combining characters from a string
 * keeping only clean ASCII-readable text.
 *
 * @param {string} str - Input Zalgo string
 * @returns {string} - Clean ASCII-only string
 */
function removeZalgo(str) {
  return (
    str
      // Normalize text to split base + combining marks
      .normalize('NFD')
      // Remove Unicode combining characters
      .replace(
        /[\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/g,
        ''
      )
      // Ensure only ASCII remains
      .replace(/[^\x00-\x7F]/g, '')
  );
}

// Example usage:
const zalgoText = 'H̗̪͇͓̙͎̣̄ͬa͚̯̦͉̖̥v͆ͩ̃͆̓̐ͥe̟͎͖͕͍̎ ̰͚̩̟͕̰͊̽̍ͯ̌͊ā̖̪͉͍̥͙̿ͩ̃ͅ ̬̥͎͑̿ͧg̰̳̺͔̦͉ͫ̀̐̓̐r̝̫̱̘̰͐͋ͯͭͭͭ͆e͙͕̖̗͙̰͌ͭä͓͚̝͓́̌͑ͪ͊ṱͥ ̱ͣd͎͔͎͇̫̪̘̃͐̇à͕̮̈͋ͪy̼̳̱ͮ!̳̥̰̭͇̔ͮ̽̓';

console.log(removeZalgo(zalgoText));
// Output: "Have a great day!"

/*
The problem is to **strip Zalgo (corrupted Unicode) characters** from a string and keep only clean ASCII characters.

---
### Core Idea

* Zalgo text is created using **Unicode combining characters** (diacritics, marks, etc.) that overlap with base characters.
* These combining characters lie in specific Unicode ranges:

```
U+0300 - U+036F   (Combining Diacritical Marks)
U+1AB0 - U+1AFF   (Extended Diacritical Marks)
U+1DC0 - U+1DFF   (Diacritical Marks Supplement)
U+20D0 - U+20FF   (Combining Diacritical Marks for Symbols)
U+FE20 - U+FE2F   (Combining Half Marks)
```

* Solution: Use a **regex to remove all combining characters** and keep only normal ASCII text.

### 🔎 Explanation

1. **`.normalize("NFD")`**

   * Splits letters and their diacritics into separate code points.
   * Example: `"é"` → `"e" + "́"`

2. **Regex `[...]` ranges**

   * Explicitly targets all known Zalgo combining marks.
   * Ensures corrupted text is stripped.

3. **`.replace(/[^\x00-\x7F]/g, "")`**

   * Removes any leftover **non-ASCII** characters.
   * Guarantees final result is **clean ASCII**.

---
⚡ This solution is **fast, concise, and reliable** — works for any Zalgo string and outputs clean ASCII text.
*/
