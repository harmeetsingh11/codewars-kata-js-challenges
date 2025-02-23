function solve(s) {
  let first = {},
    last = {},
    maxChar = '',
    maxValue = -1;

  // Iterate once to store first and last occurrence of each character
  for (let i = 0; i < s.length; i++) {
    if (!(s[i] in first)) first[s[i]] = i; // Store first occurrence
    last[s[i]] = i; // Update last occurrence
  }

  // Iterate through unique characters to determine the max value character
  for (let char in first) {
    let value = last[char] - first[char]; // Compute value of character
    // Update maxChar based on value and lexicographic order in case of a tie
    if (value > maxValue || (value === maxValue && char < maxChar)) {
      maxValue = value;
      maxChar = char;
    }
  }

  return maxChar;
}

console.log(solve('axyzxyz')); // 'x'
console.log(solve('ab')); // 'a'
console.log(solve('a')); // 'a'
console.log(solve('abcabc')); // 'a'

/*
### Explanation:
1. **Track first and last occurrence**:  
   - Use two objects: `first` to store the first occurrence index and `last` to store the last occurrence of each character.
   - Iterate through the string once to populate these maps.

2. **Determine the most valuable character**:  
   - Compute the difference (`last[char] - first[char]`) for each character.
   - Track the character with the highest value.
   - In case of a tie, choose the lexicographically smallest character.

### Time Complexity:
- **O(n)** (Single pass to track occurrences + Single pass over unique characters).
*/
