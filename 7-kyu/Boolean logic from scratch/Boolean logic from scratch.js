// Function to implement XOR logic
function xor(a, b) {
  // XOR: true if exactly one is truthy
  return Boolean(a) !== Boolean(b);
}

// Function to implement OR logic (without ||)
function or(a, b) {
  // If 'a' is truthy, return true. Otherwise check 'b'.
  return Boolean(a) ? true : Boolean(b);
}

/*
### 📝 Explanation

1. **`xor(a, b)`**

   * In XOR, the result is `true` if only one of the inputs is truthy.
   * `Boolean(a) !== Boolean(b)` checks if exactly one of them is true.
   * Example:

     * `xor(true, false)` → `true`
     * `xor(true, true)` → `false`

2. **`or(a, b)` (without `||`)**

   * Normally `a || b` would do the job, but since `||` is not allowed, we simulate it.
   * Use a **ternary operator**:

     * If `a` is truthy → return `true`.
     * Otherwise → return truthiness of `b`.
   * Example:

     * `or(false, true)` → `true`
     * `or(false, 0)` → `false`

---

✅ Efficient: O(1) time and space.
✅ Concise: No unnecessary conditions or loops.
✅ Works with all **truthy/falsey values** (numbers, strings, null, undefined, empty arrays, etc.).
*/
