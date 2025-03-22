function pattern(n) {
  // Return empty string if n is 0 or negative
  if (n <= 0) return '';

  let result = [];

  // Loop from 1 to n to build each row
  for (let i = 1; i <= n; i++) {
    // Create a row by mapping and joining descending numbers
    result.push(Array.from({ length: i }, (_, j) => n - j).join(''));
  }

  // Join all rows with newline characters
  return result.join('\n');
}

console.log(pattern(4));
console.log(pattern(6));
console.log(pattern(0)); // Empty string
console.log(pattern(-2)); // Empty string

/*
### **Explanation:**
1. **Edge case check:**  
   - If `n <= 0`, return an empty string immediately.

2. **Building the pattern:**  
   - Use a loop from `1` to `n` to generate each row.  
   - For each row `i`, create an array of length `i` using `Array.from()`:
     - `(_, j)` → `j` is the index.
     - The value in the array is `n - j` to generate descending numbers.
   - Join the array elements into a single string.

3. **Combine the rows:**  
   - Store each row in the `result` array.
   - Join the rows with `\n` to create the final multi-line pattern.

### **Why is this efficient?**
- **Time Complexity:** \(O(n^2)\) → Each row takes \(O(i)\) time to build, and there are \(n\) rows.  
- **Space Complexity:** \(O(n^2)\) → Storing all rows in the `result` array.  
- **Efficient and concise:** The use of `Array.from()` with `.join('')` makes it compact and avoids manual inner loops.
*/
