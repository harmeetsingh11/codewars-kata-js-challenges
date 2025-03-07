function solve(s) {
  let n = s.length;

  // Start checking from n/2 to 0 to find the longest prefix that is also a suffix
  for (let len = Math.floor(n / 2); len > 0; len--) {
    // Check if the prefix of length 'len' matches the suffix of length 'len'
    if (s.slice(0, len) === s.slice(-len)) {
      return len;
    }
  }

  return 0; // No valid prefix-suffix found
}

console.log(solve('abcd')); // 0
console.log(solve('abcda')); // 1
console.log(solve('abcdabc')); // 3
console.log(solve('aaaa')); // 2
console.log(solve('aa')); // 1
console.log(solve('a')); // 0

/* 
### Explanation:
1. **Loop from `n/2` down to `1`**: Since we want the longest prefix that is also a suffix, we start from `Math.floor(n / 2)`, ensuring there is no overlap.
2. **Check prefix and suffix**: We compare `s.slice(0, len)` (prefix) with `s.slice(-len)` (suffix).
3. **Return the first match**: The first match we find is the longest valid prefix-suffix.
4. **Return 0 if no match**: If no prefix equals a suffix, return `0`.

### Complexity:
- **Time Complexity: O(n)** (Iterating at most `n/2` times).
- **Space Complexity: O(1)** (Only using a few extra variables).
*/
