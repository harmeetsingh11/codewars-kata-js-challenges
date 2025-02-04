function transformString(str) {
  return str.replace(/[a-zA-Z]/g, (char) => {
    // Get the next character, wrapping 'Z' to 'A' and 'z' to 'a'
    let nextChar = String.fromCharCode(char.charCodeAt(0) + 1);
    if (char === 'Z') nextChar = 'A';
    if (char === 'z') nextChar = 'a';

    // Capitalize vowels (a, e, i, o, u) and lowercase consonants
    return /[aeiou]/i.test(nextChar)
      ? nextChar.toUpperCase()
      : nextChar.toLowerCase();
  });
}

console.log(transformString('Cat30')); // Output: "dbU30"

/* 
Explanation:

1. **Regex Replacement (`/[a-zA-Z]/g`)**: 
   - This ensures we only modify letters while leaving numbers and symbols unchanged.
   
2. **Character Transformation**:
   - Uses `String.fromCharCode(char.charCodeAt(0) + 1)` to get the next character in the alphabet.
   - Handles wrap-around for `Z` → `A` and `z` → `a`.

3. **Vowel Capitalization & Consonant Lowercasing**:
   - Uses `/[aeiou]/i.test(nextChar)` to check if the new character is a vowel.
   - Applies `toUpperCase()` for vowels and `toLowerCase()` for consonants.

*/
