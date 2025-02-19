function joinWords(words) {
  return words.join(' '); // Use `join` method to concatenate array elements with space
}

console.log(joinWords(['hello', 'world'])); // Output: "hello world"

/* 
Explanation:
1. **`join(' ')`**: The `join` method is the best way to concatenate an array into a string.
2. **Efficient**: `join` is optimized for performance and avoids manual loops or extra string operations.
3. **Concise**: The function is only one line, making it readable and maintainable.
*/
