function hexAsciiSum(str) {
  return [...str] // Spread the string into an array of characters
    .map((char) => char.charCodeAt(0).toString(16)) // Convert each character to ASCII code and then to hex
    .join('') // Join all hex values into a single string
    .split('') // Split into individual digits
    .filter((d) => /\d/.test(d)) // Filter out only the digits (ignore letters)
    .reduce((sum, num) => sum + +num, 0); // Sum up the digits, converting them to integers
}

console.log(hexAsciiSum('Yo')); // 20
console.log(hexAsciiSum('Hello, World!')); // 91
console.log(hexAsciiSum('Forty4Three')); // 113

/*
### **Explanation:**
1. **`[...str]`** → Spreads the string into an array of individual characters.
2. **`.map(char => char.charCodeAt(0).toString(16))`**
   - Converts each character to its ASCII code using `charCodeAt(0)` and then to a hex string with `.toString(16)`.
3. **`.join('')`** → Combines all hex values into a single string.
   - For `"Yo"`, this would become `"596f"`.
4. **`.split('')`** → Splits the combined hex string into individual characters.
   - `"596f"` → `['5', '9', '6', 'f']`.
5. **`.filter(d => /\d/.test(d))`** → Keeps only the digits, removing hex letters (e.g., `f`).
   - `['5', '9', '6']`.
6. **`.reduce((sum, num) => sum + +num, 0)`**
   - Reduces the array by summing up all digits.
   - `5 + 9 + 6 = 20`.
*/
