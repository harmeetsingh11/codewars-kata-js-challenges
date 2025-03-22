function binarySum(m, n) {
  // Initialize sum variable
  let sum = 0;

  // Loop through the range and convert each number to binary, then add its decimal equivalent
  for (let i = m; i <= n; i++) {
    sum += parseInt(i.toString(2), 10);
  }

  // Convert the final sum to binary and return as a string
  return sum.toString(2);
}

console.log(binarySum(1, 4)); // Output: "1111010"

/*
### **Explanation:**
1. **`let sum = 0;`**
   - Initialize a variable `sum` to store the cumulative decimal sum of binary values.

2. **Loop through the range `m` to `n`:**
   - `i.toString(2)` → Converts the number `i` to its binary string representation.
   - `parseInt(..., 10)` → Converts the binary string back to decimal.
   - Add the decimal value to `sum`.

3. **Convert the final sum to binary:**
   - `sum.toString(2)` → Converts the cumulative sum to binary and returns it as a string.

This solution is efficient with a time complexity of \(O(n - m + 1)\) and handles the conversion operations neatly in a single loop.
*/
