function sortIt(str, n) {
  // Convert 1-based index to 0-based
  const index = n - 1;

  return (
    str
      // Split input string into array of words
      .split(', ')
      // Sort using custom comparator
      .sort((a, b) => {
        // Get nth character (case-insensitive)
        const charA = a[index].toLowerCase();
        const charB = b[index].toLowerCase();

        // Primary comparison: nth character
        if (charA < charB) return -1;
        if (charA > charB) return 1;

        // Secondary comparison: full word (case-insensitive)
        return a.toLowerCase().localeCompare(b.toLowerCase());
      })
      // Join back to required format
      .join(', ')
  );
}

/*
* Input:

  1. A string containing comma-separated words: `"x, x, x"`
  2. An integer `n` (1-based index)
* Sort words by their **nᵗʰ character**
* Comparison must be:

  * **Case-insensitive**
  * If nᵗʰ characters are equal → sort **lexicographically**, case-insensitive
* Word length is always `>= n`
* Output format must remain `"x, x, x"`
---

## 🧠 Explanation

### 1. **Index Adjustment**

* JavaScript uses **0-based indexing**, but `n` is **1-based**
* So we use:

  ```js
  const index = n - 1;
  ```

### 2. **Splitting the Input**

* The input format is `"word, word, word"`
* Split using:

  ```js
  str.split(', ')
  ```

### 3. **Custom Sorting Logic**

* JavaScript’s `.sort()` accepts a comparator function
* Sorting rules:

  1. Compare the **nᵗʰ character** of each word (case-insensitive)
  2. If equal, compare the **entire words lexicographically**, case-insensitive

```js
const charA = a[index].toLowerCase();
const charB = b[index].toLowerCase();
```

### 4. **Lexicographical Tie-Breaker**

* Uses `localeCompare()` for correct string ordering

```js
a.toLowerCase().localeCompare(b.toLowerCase());
```

### 5. **Output Formatting**

* Join the sorted array back into the required string format:

```js
.join(', ');
```

---

## 📌 Example

```js
sortIt('bid, zag', 2);
// Output: 'zag, bid'
```

Explanation:

* `'bid' → 'i'`
* `'zag' → 'a'`
* `'a' < 'i'` → `'zag'` comes first

---

## ⏱️ Time & Space Complexity

* **Time:** `O(k log k)` where `k` = number of words
* **Space:** `O(k)` due to array splitting

---
*/
