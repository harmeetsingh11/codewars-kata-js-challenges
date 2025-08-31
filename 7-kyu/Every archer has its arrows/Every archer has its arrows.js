// Function to check if all archers are ready
const archersReady = (archers) =>
  archers.length > 0 && archers.every((arrows) => arrows >= 5);

// Example usages
console.log(archersReady([1, 2, 3, 4, 5, 6, 7, 8])); // false
console.log(archersReady([5, 6, 7, 8])); // true

/*
### 🔎 Explanation:

1. **Check if archers exist**
   `archers.length > 0` ensures there is at least one archer.

2. **Check if all archers have ≥ 5 arrows**
   `.every(arrows => arrows >= 5)` returns `true` only if **all** elements satisfy the condition.

3. **Efficient**

   * Uses short-circuit evaluation: if `archers.length === 0`, it returns `false` immediately.
   * `.every()` stops checking as soon as it finds an archer with fewer than 5 arrows.

✅ Time Complexity: **O(n)** (worst case, when all archers have enough arrows).
✅ Space Complexity: **O(1)** (no extra memory used).
*/
