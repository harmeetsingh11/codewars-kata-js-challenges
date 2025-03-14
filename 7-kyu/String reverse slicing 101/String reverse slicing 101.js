function reverseSlices(str) {
  // Reverse the string once to avoid reversing in every iteration
  const reversed = str.split('').reverse().join('');

  // Generate substrings using slice from the reversed string
  return Array.from({ length: str.length }, (_, i) => reversed.slice(i));
}

// Test cases
console.log(reverseSlices('123')); // ['321', '21', '1']
console.log(reverseSlices('abcde')); // ['edcba', 'dcba', 'cba', 'ba', 'a']

/*
### Explanation:
1. **Reverse the String Once**:  
   - `str.split("").reverse().join("")` creates the reversed version of the input string.
   - This avoids redundant reversing inside the loop.
  
2. **Use `slice()` Efficiently**:  
   - `Array.from({ length: str.length }, (_, i) => reversed.slice(i))`  
   - Creates an array of the same length as `str`.
   - Iterates with `i` from `0` to `str.length - 1`.
   - Uses `slice(i)` to progressively trim the reversed string.

### Why is this efficient?
- **Single reversal operation**: O(n)
- **Efficient substring extraction**: O(n)
- **Overall complexity**: **O(n)** (optimal for this problem)
*/
