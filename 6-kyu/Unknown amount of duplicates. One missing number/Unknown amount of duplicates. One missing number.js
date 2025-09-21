function find_dups_miss(arr) {
  const freq = new Map(); // store frequency of each number
  let min = Infinity,
    max = -Infinity;

  // 1. Count frequencies and track range [a, b]
  for (const num of arr) {
    freq.set(num, (freq.get(num) || 0) + 1);
    if (num < min) min = num;
    if (num > max) max = num;
  }

  let missing = null;
  const duplicates = [];

  // 2. Traverse from min..max to find missing + duplicates
  for (let i = min; i <= max; i++) {
    const count = freq.get(i) || 0;

    if (count === 0) {
      // number is missing
      missing = i;
    } else if (count > 1) {
      // duplicates
      duplicates.push(i);
    }
  }

  return [missing, duplicates];
}

console.log(find_dups_miss([10, 9, 8, 9, 6, 1, 2, 4, 3, 2, 5, 5, 3]));
// Output: [7, [2,3,5,9]]

/*
We need:

* **The missing number** in the range `[a, b]`.
* **The duplicates** in sorted order.

### Key points for efficiency:

1. **Avoid sorting the whole array** (O(n log n)), as input can be up to 1M.
2. Use a **hash map (object/Map)** to track counts in O(n).
3. Use **sum formula** to find the missing number in O(1).

   * Expected sum of `[a..b]` is:

     $$
     S = \frac{(b-a+1)(a+b)}{2}
     $$
   * Missing number = `expectedSum - (actualSum - sumOfDuplicates)`

But simpler:

* Track counts in one pass.
* Find missing number as the number that appears **0 times** in `[a..b]`.
* Collect duplicates where count > 1.

This keeps it **O(n)** and memory-efficient.
---

### 🔎 Explanation

1. **Counting Pass (O(n))**

   * We iterate once through `arr` and build a frequency map.
   * Also track `min` and `max` to avoid scanning unnecessary numbers.

2. **Range Scan (O(b-a))**

   * We check all numbers in `[a..b]`.
   * If a number is **missing** → save it.
   * If frequency > 1 → add to duplicates list.

3. **Return** → `[missingNumber, sortedDuplicates]`

   * Duplicates are naturally sorted since we iterate in ascending order from `min..max`.

---

👉 This runs in **O(n + (b-a))** time and **O(n)** memory, which is optimal for input sizes up to 1,000,000.
*/
