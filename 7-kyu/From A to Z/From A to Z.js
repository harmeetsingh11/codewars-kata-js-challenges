function letterRange(range) {
  // Destructure the start and end characters from the input string
  let [start, end] = range.split('-');

  // Convert start and end characters to their ASCII values
  let startCode = start.charCodeAt(0);
  let endCode = end.charCodeAt(0);

  // Generate the range of characters using String.fromCharCode
  return Array.from({ length: endCode - startCode + 1 }, (_, i) =>
    String.fromCharCode(startCode + i)
  ).join('');
}

// Test cases
console.log(letterRange('a-z')); // "abcdefghijklmnopqrstuvwxyz"
console.log(letterRange('h-o')); // "hijklmno"
console.log(letterRange('Q-Z')); // "QRSTUVWXYZ"
console.log(letterRange('J-J')); // "J"

/*
Explanation:
1. **Splitting the Input**:  
   The input string (e.g., `"a-z"`) is split using `split('-')` to extract the start and end characters.
   
2. **Getting ASCII Values**:  
   `charCodeAt(0)` is used to get the ASCII values of the start and end characters.

3. **Generating the Range**:  
   - `Array.from({ length: endCode - startCode + 1 })` creates an array of the required length.  
   - The `_` parameter is unused, and `i` is used to increment from `startCode`.  
   - `String.fromCharCode(startCode + i)` converts ASCII values back to characters.  
   - `join('')` combines the characters into the final string.

This approach is optimal and runs in **O(n) time complexity**, where `n` is the number of letters in the range. 
*/
