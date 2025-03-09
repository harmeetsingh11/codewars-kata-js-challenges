function spotDiff(s1, s2) {
  // Use Array.prototype.reduce to efficiently collect differing indices
  return [...s1].reduce((diffs, char, index) => {
    if (char !== s2[index]) diffs.push(index); // Compare characters at each index
    return diffs;
  }, []);
}

console.log(spotDiff('abcdefg', 'abcqetg')); // Output: [3, 5]
console.log(spotDiff('hello', 'hello')); // Output: []
console.log(spotDiff('abcd', 'abcf')); // Output: [3]

/* 
### Explanation:
1. Convert `s1` into an array using `[...s1]` to allow iteration.
2. Use `reduce()` to iterate over each character:
   - Compare the character at the same index in `s2`.
   - If they differ, push the index to the accumulator array.
3. Return the accumulated array of differing indices.

This approach ensures optimal performance (`O(n)`) while keeping the code concise and readable.
*/
