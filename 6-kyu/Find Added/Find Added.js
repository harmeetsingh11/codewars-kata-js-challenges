function findAdded(st1, st2) {
  // Frequency arrays for digits 0–9
  const freq1 = Array(10).fill(0);
  const freq2 = Array(10).fill(0);

  // Count digits in st1
  for (const ch of st1) {
    freq1[ch]++;
  }

  // Count digits in st2
  for (const ch of st2) {
    freq2[ch]++;
  }

  let result = '';

  // Compare frequencies and collect added digits
  for (let digit = 0; digit <= 9; digit++) {
    const extraCount = freq2[digit] - freq1[digit];
    if (extraCount > 0) {
      result += String(digit).repeat(extraCount);
    }
  }

  return result;
}

/* 
### ✅ Problem Understanding

You are given **two strings of digits**:

* `st1` → the original digits
* `st2` → the modified digits

Your task is to **find which digits were added in `st2` compared to `st1`**, considering:

* Digits can repeat
* Order does **not** matter
* Output must be **sorted in ascending order**
* If no digits were added, return an **empty string**

This is essentially a **frequency comparison problem**.

---

### 💡 Optimal Approach (Efficient & Clean)

1. Count how many times each digit (`0–9`) appears in `st1`.
2. Count how many times each digit appears in `st2`.
3. For each digit:

   * If `st2` has more occurrences than `st1`, the difference is the number of added digits.
4. Append the extra digits to the result.
5. Since digits are processed from `0 → 9`, the result is automatically sorted.

⏱ **Time Complexity:** `O(n + m)`
📦 **Space Complexity:** `O(1)` (fixed size arrays of length 10)

---

### 🧠 Why this is the best solution

* No sorting needed
* No nested loops
* Handles duplicates correctly
* Extremely fast and memory-efficient

---

### 🧪 Example Walkthrough

```js
findAdded('4455446', '447555446666');
```

* `st1`: 4×3, 5×2, 6×1
* `st2`: 4×3, 5×4, 6×4, 7×1
* Extra: `5×2`, `6×3`, `7×1`

✅ Output → **`'56667'`**

---
*/
