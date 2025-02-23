class Converter {
  // Convert ASCII text to hexadecimal
  static toHex(str) {
    return [...str] // Spread the string into an array of characters
      .map((char) => char.charCodeAt(0).toString(16).padStart(2, '0')) // Convert each char to hex, ensuring 2-digit representation
      .join(''); // Join array into a single string
  }

  // Convert hexadecimal to ASCII text
  static toAscii(hex) {
    return hex
      .match(/.{1,2}/g) // Split hex string into pairs of two characters
      .map((byte) => String.fromCharCode(parseInt(byte, 16))) // Convert hex pairs to ASCII characters
      .join(''); // Join array into a single string
  }
}

console.log(Converter.toHex('Look mom, no hands')); // "4c6f6f6b206d6f6d2c206e6f2068616e6473"
console.log(Converter.toAscii('4c6f6f6b206d6f6d2c206e6f2068616e6473')); // "Look mom, no hands"

/* 
### Explanation:
1. **`toHex(str)`**:
   - Converts each character to its ASCII code using `charCodeAt(0)`.
   - Converts the ASCII code to a hexadecimal string using `toString(16)`.
   - Ensures each hex value has two digits with `padStart(2, '0')`.
   - Joins the hex values into a single string.

2. **`toAscii(hex)`**:
   - Uses a regex to split the hex string into two-character chunks (`.{1,2}`).
   - Converts each hex pair back to an integer using `parseInt(byte, 16)`.
   - Converts the integer back to an ASCII character using `String.fromCharCode()`.
   - Joins the characters into the final string.

This solution is **efficient** (O(n) time complexity) and **concise** while maintaining readability.
*/
