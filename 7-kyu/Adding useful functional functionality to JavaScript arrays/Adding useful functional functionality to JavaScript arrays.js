// Create a static method on Array for range
Array.range = (start, count) =>
  // Array.from creates an array of length `count`
  // Each element is filled with index + start
  Array.from({ length: count }, (_, i) => start + i);

// Add sum method to Array prototype
Array.prototype.sum = function () {
  // Use reduce to accumulate sum of all elements
  return this.reduce((acc, val) => acc + val, 0);
};

// -------- Examples --------
console.log(Array.range(0, 3)); // [0, 1, 2]
console.log([0, 1, 2].sum()); // 3
console.log(Array.range(-1, 4).sum()); // 2

/*
We’ll add two helper methods:

* `Array.range(start, count)` → creates an array with numbers from `start` to `start + count - 1`.
* `Array.prototype.sum()` → sums up all elements of the array.

We’ll do this **without explicit `for` loops**, using **`Array.from`** and **`reduce`** (efficient and concise).

---

### 🔎 Explanation

1. **`Array.range(start, count)`**

   * Uses `Array.from({length: count}, (_, i) => start + i)`
   * Creates an array of length `count`.
   * The mapping function fills each index `i` with `start + i`.

   Example: `Array.range(0, 3)` → `[0, 1, 2]`.

2. **`Array.prototype.sum()`**

   * Extends `Array` with a method available on any array instance.
   * Uses `reduce` to accumulate elements into a single sum.
   * Starts with initial accumulator `0`.

   Example: `[0,1,2].sum()` → `3`.

---

✅ Optimized (O(n) time, O(n) for range creation, O(1) extra space).
✅ No manual loops (`for`, `while`).
✅ Concise and reusable.
*/
