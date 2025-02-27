function makeSentence(parts) {
  return (
    // Step 1: Join all parts with spaces to ensure words are properly spaced
    (parts.join(' ') + '.')

      // Step 2: Fix spaces before periods (" .") and replace them with just "."
      .replace(/ \./g, '.')

      // Step 3: Fix spaces before commas (" ,") and replace them with just ","
      .replace(/ ,/g, ',')

      // Step 4: Remove multiple periods at the end and ensure only one period
      .replace(/\.+$/, '.')
  );
}

console.log(makeSentence(['hello', ',', 'my', 'dear'])); // Output: "hello, my dear."

/*
### Explanation:
1. **`parts.join(' ')`**  
   - Joins all elements with spaces to ensure words are separated.
2. **`+ '.'`**  
   - Adds a period at the end to guarantee the sentence ends properly.
3. **`.replace(/ \./g, '.')`**  
   - Fixes incorrect spacing before periods (e.g., `"Hello ."` → `"Hello."`).
4. **`.replace(/ ,/g, ',')`**  
   - Removes spaces before commas (e.g., `"Hello ,world"` → `"Hello, world"`).
5. **`.replace(/\.+$/, '.')`**  
   - Ensures only one period at the end, removing extra ones.

This solution is **concise, efficient (`O(n)` complexity), and easy to read** while following the given rules.
*/
