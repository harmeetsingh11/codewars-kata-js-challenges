function doubleCheck(str) {
  // Convert string to lowercase to make the check case-insensitive
  str = str.toLowerCase();

  // Use a regular expression to check for any repeated character
  // The regex /(.)\1/ checks for any character (.) followed by itself (\1)
  return /(.)\1/.test(str);
}

// Test cases
console.log(doubleCheck('abca')); // false
console.log(doubleCheck('aabc')); // true
console.log(doubleCheck('a 11 c d')); // true
console.log(doubleCheck('AabBcC')); // true
console.log(doubleCheck('a b  c')); // true
console.log(doubleCheck('a b c d e f g h i h k')); // false
console.log(doubleCheck('2020')); // false
console.log(doubleCheck('a!@€£#$%^&*()_-+=}]{[|"\':;?/>.<,~')); // false

/*
### **Explanation:**
1. **Lowercasing the string**:  
   - `str = str.toLowerCase()` ensures the check is case-insensitive by converting all characters to lowercase.
2. **Regular expression logic**:  
   - `(.)` → Matches any single character.  
   - `\1` → References the previously matched character, ensuring the character is repeated consecutively.  
   - `/test(str)` → Tests the string for the pattern and returns `true` if a match is found, otherwise `false`.  


### **Why this is efficient:**
- The regular expression handles the entire logic in a single concise check.
- The solution is case-insensitive and works for all types of characters (letters, digits, special characters, and whitespace).  
- Time complexity: **O(n)** (linear scan with regex check).  
- Space complexity: **O(1)** (constant space usage for regex match).
*/
