function minimum(a, x) {
  // Find the remainder when 'a' is divided by 'x'
  const remainder = a % x;

  // If the remainder is 0, 'a' is already a multiple of 'x'
  if (remainder === 0) return 0;

  // Calculate the difference to reach the next multiple of x
  const add = x - remainder; // amount to add
  const subtract = remainder; // amount to subtract

  // Return the minimum of the two operations
  return Math.min(add, subtract);
}

// Test cases
console.log(minimum(10, 6)); // 2 → 10 + 2 = 12 (multiple of 6)
console.log(minimum(13, 5)); // 2 → 13 + 2 = 15 (multiple of 5)
console.log(minimum(20, 4)); // 0 → 20 is already a multiple of 4
console.log(minimum(19, 7)); // 5 → 19 + 5 = 24 (multiple of 7)

/*
### **Explanation**
1. **Remainder Calculation:**  
   - `remainder = a % x` → finds how much `a` is off from being a multiple of `x`.  
2. **Check if Already a Multiple:**  
   - If `remainder === 0`, `a` is already a multiple of `x`, so return `0`.  
3. **Calculate Distance to Next/Previous Multiple:**  
   - `add = x - remainder` → how much you need to add to reach the next multiple.  
   - `subtract = remainder` → how much you need to subtract to reach the previous multiple.  
4. **Return the Minimum:**  
   - Use `Math.min(add, subtract)` to get the smallest non-negative change required.

This solution is efficient with a time complexity of **O(1)** since it uses only basic arithmetic operations and comparisons.
*/
