function lotteryFilter(str) {
  // Extract unique digits while maintaining order of first appearance
  let digits = [...new Set(str.match(/\d/g) || [])].join('');

  // Return the digits if any exist, otherwise return "One more run!"
  return digits || 'One more run!';
}

console.log(lotteryFilter('hPrBKWDH8yc6Lt5NQZWQ')); // "865"
console.log(lotteryFilter('ynMAisVpHEqpqHBqTrwH')); // "One more run!"
console.log(lotteryFilter('555')); // "5"

/*
### Explanation:
1. **Extract Digits**:  
   - `str.match(/\d/g)` finds all digits in the input string.
   - If no digits are found, `match()` returns `null`, so `|| []` ensures an empty array is used instead.
   
2. **Ensure Uniqueness While Preserving Order**:  
   - Using `new Set(...)` removes duplicates while preserving first appearances.
   - The `[...new Set(...)]` syntax converts the Set back into an array.
   
3. **Convert to String**:  
   - `.join('')` joins the array elements into a single string.

4. **Handle Edge Case**:  
   - If no digits were found, `digits` would be an empty string (`""`).
   - Using `|| "One more run!"` ensures the correct output in such cases.

This solution runs efficiently in **O(n)** time complexity, where **n** is the length of the input string.
*/
