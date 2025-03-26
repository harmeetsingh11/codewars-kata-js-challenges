function anagramDifference(word1, word2) {
  // Create frequency maps for both words
  const freq1 = {},
    freq2 = {};

  // Count the occurrences of each letter in word1
  for (const char of word1) {
    freq1[char] = (freq1[char] || 0) + 1;
  }

  // Count the occurrences of each letter in word2
  for (const char of word2) {
    freq2[char] = (freq2[char] || 0) + 1;
  }

  let deletions = 0;

  // Collect all unique characters from both words
  const allChars = new Set([...word1, ...word2]);

  // Compare the frequency of each character in both words
  for (const char of allChars) {
    const count1 = freq1[char] || 0;
    const count2 = freq2[char] || 0;

    // Add the absolute difference in occurrences to deletions
    deletions += Math.abs(count1 - count2);
  }

  return deletions;
}

console.log(anagramDifference('codewars', 'hackerrank')); // Output: 10

/*
### **Explanation**
1. **Frequency Maps:**  
   - We create two objects (`freq1` and `freq2`) to store the frequency of each character in both words.
2. **Count Letter Occurrences:**  
   - We iterate through each word and populate the frequency maps.
3. **Collect Unique Characters:**  
   - We create a `Set` of all unique characters from both words to avoid duplicates.
4. **Calculate Deletions:**  
   - For each character in the combined set:
     - Get the occurrence in both words (`count1` and `count2`).
     - Add the absolute difference between the two counts to the `deletions` counter.
5. **Return Result:**  
   - The total number of deletions required to make the words anagrams is returned.

### **Complexity Analysis**
- **Time Complexity:** \(O(n + m)\), where \(n\) and \(m\) are the lengths of the two words.  
  - Building the frequency maps takes \(O(n + m)\) time.  
  - Iterating through the unique characters takes \(O(u)\), where \(u\) is the number of unique characters (max 26 for lowercase English letters).
- **Space Complexity:** \(O(1)\) since we are only storing character frequencies (constant space for 26 lowercase letters).
*/
