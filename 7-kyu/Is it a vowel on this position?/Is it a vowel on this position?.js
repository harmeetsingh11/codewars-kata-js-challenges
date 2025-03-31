const checkVowel = (str, n) => {
  // Return false if n is out of bounds or negative
  if (n < 0 || n >= str.length) return false;

  // Define a set of vowels (both lowercase and uppercase for efficiency)
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

  // Check if the character at position `n` is a vowel
  return vowels.has(str[n]);
};

// Test cases
console.log(checkVowel('cat', 1)); // true  -> 'a' is a vowel
console.log(checkVowel('cat', 0)); // false -> 'c' is not a vowel
console.log(checkVowel('cat', 4)); // false -> out of bounds
console.log(checkVowel('Cat', 0)); // false -> 'C' is not a vowel
console.log(checkVowel('Cat', 1)); // true  -> 'a' is a vowel
console.log(checkVowel('hello', -1)); // false -> negative index

/*
### **Explanation:**

1. **Bounds check:** The function first checks if `n` is negative or exceeds the string length and returns `false` if it does.
2. **Vowel set:** It uses a `Set` to store both lowercase and uppercase vowels. Sets offer **O(1)** average-time complexity for lookups, making the solution efficient.
3. **Character check:** It retrieves the character at index `n` and checks if it exists in the `Set`.
4. **Time complexity:** `O(1)` for checking the character in the `Set`.
5. **Space complexity:** `O(1)` for the vowel set.
*/
