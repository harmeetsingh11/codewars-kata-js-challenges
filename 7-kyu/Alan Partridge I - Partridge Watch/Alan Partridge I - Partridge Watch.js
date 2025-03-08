function alanRelatedTerms(arr) {
  // Define a Set of Alan-related terms for fast lookup
  const relatedTerms = new Set([
    'Partridge',
    'PearTree',
    'Chat',
    'Dan',
    'Toblerone',
    'Lynn',
    'AlphaPapa',
    'Nomad',
  ]);

  // Count the number of Alan-related terms present in the input array
  let count = arr.filter((term) => relatedTerms.has(term)).length;

  // Return the appropriate message based on count
  return count
    ? `Mine's a Pint${'!'.repeat(count)}`
    : "Lynn, I've pierced my foot on a spike!!";
}

/* 
### Explanation:
1. **Using a `Set`**:  
   - A `Set` is used to store Alan-related terms because lookups in a `Set` are **O(1)**, making it more efficient than an array.
   
2. **Filtering and Counting Matches**:  
   - The `.filter()` method checks which terms are present in the `Set`, and `.length` gives the count of matches.

3. **Generating the Output**:  
   - If there are matches, return `"Mine's a Pint!"` with the number of exclamation marks equal to the match count.
   - If no matches are found, return `"Lynn, I've pierced my foot on a spike!!"`.

This solution is both **efficient (O(n))** and **concise**.
*/
