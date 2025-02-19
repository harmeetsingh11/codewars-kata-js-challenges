function generatePairs(n) {
  // Initialize an array to store the pairs
  let result = [];

  // Iterate over 'a' from 0 to 'n'
  for (let a = 0; a <= n; a++) {
    // Iterate over 'b' from 'a' to 'n' (ensuring a ≤ b)
    for (let b = a; b <= n; b++) {
      result.push([a, b]); // Store the pair [a, b]
    }
  }

  return result;
}

console.log(generatePairs(2));
// Output: [[0, 0], [0, 1], [0, 2], [1, 1], [1, 2], [2, 2]]

/* 
**Explanation:**
- The outer loop iterates over `a` from `0` to `n`.
- The inner loop iterates over `b` from `a` to `n`, ensuring `a ≤ b`.
- Each valid pair `[a, b]` is pushed into the `result` array.
- This approach ensures all pairs are generated in sorted order automatically.

### **Time Complexity:**
- **O(n²)**: The total number of iterations is **(n+1)(n+2)/2**, which simplifies to **O(n²)** in Big-O notation.
*/
