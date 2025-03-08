function format_poem(poem) {
  // Split the string into sentences using '. ' as the delimiter
  // This keeps the periods attached to each sentence
  return poem.split('. ').join('.\n');
}

const poem =
  'Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex. Complex is better than complicated.';
console.log(format_poem(poem));

/*
### Explanation:
1. **Splitting the String**:  
   - The `split('. ')` method is used to break the poem into an array of sentences.  
   - It splits wherever there is a period (`.`) followed by a space (`' '`), ensuring we retain the period.

2. **Joining with New Lines**:  
   - We use `join('.\n')` to put the sentences back together, but with a `'.\n'` instead of `'. '` so that each sentence starts on a new line.

3. **Efficiency**:  
   - This approach is concise and runs in **O(n)** time complexity, where **n** is the length of the string.
   - It avoids unnecessary loops and extra space usage.
*/
