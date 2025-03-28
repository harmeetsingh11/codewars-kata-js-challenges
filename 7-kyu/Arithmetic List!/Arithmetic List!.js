const arithmeticSequence = (first, c, l) =>
  Array.from({ length: l }, (_, i) => first + i * c);

console.log(arithmeticSequence(1, 2, 5)); // [1, 3, 5, 7, 9]
console.log(arithmeticSequence(2, 10, 4)); // [2, 12, 22, 32]

/*
### **Explanation:**
1. **`Array.from({ length: l })`:**
   - Creates an array of length `l`.
   - The array is filled with `undefined` values initially, but we only care about the indices.
   
2. **`(_, i)`**:
   - The first parameter `_` is ignored (represents the value, which we don't need).
   - `i` is the current index (from `0` to `l - 1`).

3. **`first + i * c`:**
   - This generates the arithmetic sequence by adding the common difference `c` for each index `i`.
   - For example, if `first = 1`, `c = 2`, and `l = 5`:
     - `i = 0 → 1 + 0 * 2 = 1`
     - `i = 1 → 1 + 1 * 2 = 3`
     - `i = 2 → 1 + 2 * 2 = 5`
     - `i = 3 → 1 + 3 * 2 = 7`
     - `i = 4 → 1 + 4 * 2 = 9`
     - Output: `[1, 3, 5, 7, 9]`

### **Why this solution is efficient:**
- The time complexity is **O(n)**, where `n` is the number of terms `l`.
- The space complexity is also **O(n)** to store the sequence.
*/
