function moveVowelsToEnd(s) {
  // Split the string into two parts: consonants and vowels
  let consonants = [...s].filter((c) => !'aeiou'.includes(c)).join('');
  let vowels = [...s].filter((c) => 'aeiou'.includes(c)).join('');

  // Concatenate consonants and vowels
  return consonants + vowels;
}

console.log(moveVowelsToEnd('day')); // "dya"
console.log(moveVowelsToEnd('apple')); // "pplae"
console.log(moveVowelsToEnd('hello')); // "hlloe"

/*Explanation:
1. **Filter Consonants:**  
   - Spread the string into an array of characters.
   - Use `.filter()` to retain only non-vowel characters.
   - Join them back into a string.

2. **Filter Vowels:**  
   - Spread the string again.
   - Use `.filter()` to retain only vowels.
   - Join them back into a string.

3. **Concatenate the Two Strings:**  
   - Append the vowels to the consonants to maintain the order.

### **Time Complexity:**
- **O(n)** since we iterate over the string twice (once for consonants and once for vowels), but it's still linear in performance.
*/
