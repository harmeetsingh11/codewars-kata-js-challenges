const alpha = 'abcdefghijklmnopqrstuvwxyz'; // Define the alphabet string

let next = str;

do {
  str = next; // Store the current state of the string

  // Replace occurrences of two same letters (not necessarily adjacent)
  next = str.replace(
    /([a-z])(.*?)\1/g,
    (_, a, b) => alpha[(alpha.indexOf(a) + 1) % 26] + b // Increment the character and keep remaining part
  );
} while (str !== next); // Repeat until no further replacements occur

return str;

/* 
### Explanation of the Approach:
1. **Define the Alphabet String (`alpha`)**:  
   - This helps in finding the next letter efficiently using indexing.
   
2. **Initialize `next` with the input `str`**:  
   - This ensures we have a reference to modify the string iteratively.

3. **Use a `do-while` Loop to Continuously Replace Substitutable Letters**:  
   - The loop keeps running until no more changes occur (`str !== next`).
   
4. **Regular Expression Breakdown (`/([a-z])(.*?)\1/g`)**:  
   - `([a-z])` → Captures a letter.  
   - `(.*?)` → Captures any characters between two occurrences of the letter.  
   - `\1` → Ensures the same letter appears twice.  
   - **Replacement Function**:
     - Finds the next letter using `alpha.indexOf(a) + 1) % 26` to wrap around for 'z' → 'a'.
     - Replaces the matched pair with the new letter while keeping any in-between characters.

5. **Final Return Value**:  
   - The loop exits when no more replacements are possible, returning the transformed string.
*/
