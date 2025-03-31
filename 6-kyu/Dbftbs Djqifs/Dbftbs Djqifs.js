function encryptor(key, message) {
  // Normalize the key to fit within the range of 0-25
  key = ((key % 26) + 26) % 26;

  return message
    .split('')
    .map((char) => {
      if (/[a-zA-Z]/.test(char)) {
        // Only shift letters
        const base = char >= 'a' ? 97 : 65; // ASCII code for 'a' or 'A'
        // Shift character by key, wrap around using modulo
        return String.fromCharCode(
          ((char.charCodeAt(0) - base + key) % 26) + base
        );
      }
      return char; // Keep non-letters unchanged
    })
    .join('');
}

console.log(encryptor(1, 'Caesar Cipher')); // 'Dbftbs Djqifs'
console.log(encryptor(-1, 'Caesar Cipher')); // 'Bzdrzq Bhogdq'
console.log(encryptor(27, 'Hello World!')); // 'Ifmmp Xpsme!'
console.log(encryptor(-27, 'Hello World!')); // 'Gdkkn Vnqkc!'

/*
### **Explanation:**

1. **Key Normalization:**  
   - Since there are only 26 letters in the alphabet, we normalize the key using:
   ```javascript
   key = ((key % 26) + 26) % 26;
   ```
   - This ensures that the key always falls in the range of `0-25`:
     - `27 → 1`  
     - `-27 → 25`

2. **Character Transformation:**
   - The function maps over each character of the message.
   - For letters:
     - Determines if it's uppercase or lowercase.
     - Uses the appropriate ASCII base (`97` for lowercase, `65` for uppercase).
     - Shifts the character by the key, wraps around using modulo:
     ```javascript
     (char.charCodeAt(0) - base + key) % 26 + base
     ```
   - For non-letter characters:
     - It leaves them unchanged.

3. **Efficiency:**
   - The solution is efficient (`O(n)` time complexity) since it iterates over each character once.
   - It uses the modulo operator for constant-time key normalization and wrap-around shifting.
*/
