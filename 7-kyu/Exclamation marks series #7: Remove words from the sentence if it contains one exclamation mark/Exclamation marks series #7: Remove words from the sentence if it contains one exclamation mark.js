/**
 * Removes words that contain exactly one '!' character.
 * @param {string} sentence - Input string with words separated by spaces.
 * @returns {string} - Filtered sentence.
 */
function remove(sentence) {
  return sentence
    .split(' ') // split sentence into words
    .filter((word) => {
      const count = [...word].filter((ch) => ch === '!').length; // count '!'
      return count !== 1; // keep if NOT exactly one '!'
    })
    .join(' '); // join remaining words
}

/*
Let’s solve this step by step.

We need to:

1. Split the sentence into words (`" "` separated).
2. Keep only those words that **do not** have *exactly one* exclamation mark.

   * i.e., keep words with **0** or **≥2** `!` characters.
3. Join the filtered words back into a string.

### 🔎 Explanation

* `split(" ")` → breaks the sentence into words.
* For each word:

  * Count the number of `!` by spreading it into characters and filtering.
  * If count is **not equal to 1**, we keep the word.
* `join(" ")` → rebuild the sentence with only valid words.

---

### 🧪 Example Walkthrough

```js
remove("Hi! Hi!! Hi!") 
```

* `"Hi!"` → has 1 `!` → ❌ remove
* `"Hi!!"` → has 2 `!` → ✅ keep
* `"Hi!"` → has 1 `!` → ❌ remove

👉 Result: `"Hi!!"`

---
This is **clean, efficient, and concise** — runs in **O(n)** where `n` = total characters.
*/
