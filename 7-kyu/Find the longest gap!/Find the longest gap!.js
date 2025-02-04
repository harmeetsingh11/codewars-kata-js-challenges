function gap(num) {
  // Convert the number to binary and split by '1' to get gaps
  let gaps = num.toString(2).split('1');

  // Remove the first and last empty elements if the number starts or ends with '1'
  gaps.pop();
  gaps.shift();

  // Find the maximum gap length, or return 0 if no valid gaps
  return gaps.length ? Math.max(...gaps.map((g) => g.length)) : 0;
}

// Test cases
console.log(gap(9)); // Output: 2
console.log(gap(529)); // Output: 4
console.log(gap(20)); // Output: 1
console.log(gap(15)); // Output: 0
console.log(gap(32)); // Output: 0

/*Explanation:
1. **Convert to Binary:**  
   - `num.toString(2)` converts the number to a binary string.
2. **Split by '1':**  
   - `.split('1')` gives an array of gaps (substrings of '0' between ones).
3. **Remove Edge Cases:**  
   - If the binary string starts or ends with '1', the first and last elements will be empty and are removed using `shift()` and `pop()`.
4. **Find the Longest Gap:**  
   - Map each gap to its length and find the maximum value using `Math.max()`.  
   - If there are no gaps, return `0`.

TC: O(n) 
*/
