function powerOf4(n) {
  // Check if n is an integer and greater than 0
  if (!Number.isInteger(n) || n <= 0) return false;

  // Use bitwise AND to ensure it's a power of 2 (only one bit set)
  // and check (n - 1) % 3 === 0 for power of 4
  return (n & (n - 1)) === 0 && (n - 1) % 3 === 0;
}

// Test cases
console.log(powerOf4(1024)); // true
console.log(powerOf4(44)); // false
console.log(powerOf4('not a positive integer')); // false
console.log(powerOf4(16)); // true
console.log(powerOf4(64)); // true
console.log(powerOf4(1)); // true
console.log(powerOf4(0)); // false
console.log(powerOf4(-4)); // false

/*
### **Explanation:**

1. **`Number.isInteger(n)`** → Ensures the input is a valid integer.  
2. **`n > 0`** → Ensures the number is positive.  
3. **`(n & (n - 1)) === 0`** → This bitwise check confirms if `n` is a power of 2:
   - Powers of 2 have only **one bit** set (e.g., `16 → 10000`).
   - `n & (n - 1)` clears the least significant bit, resulting in `0` only for powers of 2.
4. **`(n - 1) % 3 === 0`** → Filters out powers of 2 that are not powers of 4:
   - Only powers of 4 satisfy this condition.
   - For example:
     - `4 - 1 = 3` → divisible by 3 ✅
     - `16 - 1 = 15` → divisible by 3 ✅
     - `8 - 1 = 7` → not divisible by 3 ❌ (8 is a power of 2 but not 4).
*/
