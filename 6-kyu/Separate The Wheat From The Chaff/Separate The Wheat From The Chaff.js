/**
 * Separates negatives (chaff) from positives (wheat)
 * @param {number[]} arr - input array of integers
 * @returns {number[]} - new array with negatives first, positives later
 */
function wheatFromChaff(arr) {
  // Copy input to avoid modifying original (like Java constraint)
  let res = arr.slice();

  let i = 0,
    j = res.length - 1;

  while (i < j) {
    if (res[i] < 0) {
      // Negative at front is correct → move forward
      i++;
    } else if (res[j] > 0) {
      // Positive at end is correct → move backward
      j--;
    } else {
      // Misplaced positive at front & negative at end → swap
      [res[i], res[j]] = [res[j], res[i]];
      i++;
      j--;
    }
  }

  return res;
}

/*
We need to solve **wheatFromChaff** in **O(N)** time and **O(1)** extra space (apart from the result array, since input shouldn't be modified in Java—but in JS we can copy once and work in place).

The **best approach** is **two pointers**:

* One pointer `i` moves from the left.
* One pointer `j` moves from the right.
* If a positive number is found at the front (`i`), and a negative at the end (`j`), swap them.
* Keep negatives at the beginning as they are.
* Stop when `i >= j`.

This ensures **linear time, in-place separation**.

---

## 📜 Explanation

1. Start with two pointers:

   * `i` = 0 (beginning).
   * `j` = last index.

2. Traverse:

   * If `arr[i]` is negative → keep it, move `i++`.
   * If `arr[i]` is positive and `arr[j]` is negative → swap them, move both pointers.
   * If `arr[j]` is positive → move `j--` until a negative is found.

3. Continue until `i >= j`.

This ensures negatives come first, positives last, preserving the rule that negatives at the start stay untouched.


## 🔎 Example Dry Runs

### Example 1

Input: `[7, -8, 1, -2]`

* i=0 → 7 (positive), j=3 → -2 (negative) → swap → `[-2, -8, 1, 7]`
  ✅ Done.

### Example 2

Input: `[-31, -5, 11, -42, -22, -46, -4, -28]`

* i=0,-31 (keep), i=1,-5 (keep),
* i=2,11 (positive), j=7,-28 (negative) → swap → `[-31,-5,-28,-42,-22,-46,-4,11]`
  ✅ Done.

---

⚡ This runs in **O(N)** with **no extra memory** (just one copy), perfect for 100k+ elements.
*/
