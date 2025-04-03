function countRemovals(str) {
  // Convert the string into an array and reduce it while counting consecutive duplicates
  return [...str].reduce(
    (count, char, index, arr) => (char === arr[index - 1] ? count + 1 : count),
    0
  );
}

// Test cases
console.log(countRemovals('abbbbc')); // Output: 3
console.log(countRemovals('abbcca')); // Output: 2
console.log(countRemovals('ab cca')); // Output: 1

/* 
### Explanation:
1. **Convert string to an array**: Using `[...str]` spreads the string into an array of characters.
2. **Use `reduce` for iteration**:
   - `count`: Keeps track of the number of removals needed.
   - `char`: Current character in iteration.
   - `index`: Position of the current character in the array.
   - `arr[index - 1]`: Previous character in the array.
3. **Check for consecutive duplicates**:
   - If `char` is the same as the previous character, increase the count.
   - Otherwise, keep the count unchanged.
4. **Returns the total number of consecutive character removals needed**.

This solution is **efficient (O(n))**, concise, and uses modern JavaScript features.
*/
