/**
 * Splits a sentence into an array of words.
 * @param {string} sentence - The input string to split.
 * @returns {string[]} - Array of words.
 */
function splitSentence(sentence) {
  // .trim() removes leading/trailing spaces
  // .split(/\s+/) splits by one or more whitespace characters (space, tab, newline)
  return sentence.trim().split(/\s+/);
}

// usage:
console.log(splitSentence('hello world')); // ["hello", "world"]
console.log(splitSentence('  multiple   spaces  ')); // ["multiple", "spaces"]

/*
### **Why this is optimal**

1. **`trim()`** → Removes unnecessary leading and trailing whitespace so we don’t get empty strings at the start or end.
2. **Regex `\s+` in `split()`** → Splits on one or more whitespace characters, handling spaces, tabs, and newlines efficiently.
3. **O(n) time complexity** → Each character is scanned only once.
4. **Concise** → Single clean return statement.

---
Dry-run with example:

Here’s a **step-by-step dry run** of `splitSentence("  multiple   spaces  ")` so you can see exactly how it works:

---

**Input:**

```
"  multiple   spaces  "
```

**Step 1 – `trim()`**
Removes leading and trailing spaces:

```
"multiple   spaces"
```

**Step 2 – `.split(/\s+/)`**

* The regex `/\s+/` means "split wherever there’s **one or more whitespace characters**".
* It finds the first match: `"multiple"` and `"spaces"` separated by **3 spaces**.
* Multiple spaces are treated as one delimiter.

Result after split:
```
["multiple", "spaces"]
```
---

✅ **Final Output:**

```
["multiple", "spaces"]
```
*/
