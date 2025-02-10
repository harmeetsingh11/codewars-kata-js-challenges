function stringToBinary(str) {
  // Use map to convert each character to its 8-bit binary representation
  return [...str].map((char) =>
    char.charCodeAt(0).toString(2).padStart(8, '0')
  );
}

console.log(stringToBinary('man')); // Output: ['01101101', '01100001', '01101110']

/*
Explanation:
1. **`[...str]`**: This converts the string into an array of individual characters.
2. **`char.charCodeAt(0)`**: This gets the ASCII code of the character.
3. **`toString(2)`**: Converts the ASCII code to a binary string.
4. **`padStart(8, '0')`**: Ensures that the binary string has a length of 8 by padding with leading zeros if necessary.
5. **`map()`**: Applies the conversion to each character in the string and returns an array of binary strings.
*/
