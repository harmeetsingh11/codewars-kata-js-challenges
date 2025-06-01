function binaryToString(binaryStr) {
  // Split the input by '0b' and filter out any empty strings
  return (
    binaryStr
      .split('0b')
      .filter(Boolean)
      // Convert each binary string to character using parseInt and String.fromCharCode
      .map((bin) => String.fromCharCode(parseInt(bin, 2)))
      // Join all characters into the final string
      .join('')
  );
}

console.log(binaryToString('0b10000110b11000010b1110100')); // "Cat"

/*
### Explanation:

1. **`.split('0b')`**: Break the string wherever `0b` appears.
2. **`.filter(Boolean)`**: Remove any empty strings from the split (e.g., before the first `0b`).
3. **`.map(...)`**:

   * `parseInt(bin, 2)`: Converts binary string to decimal.
   * `String.fromCharCode(...)`: Gets the character from the ASCII/Unicode code.
4. **`.join('')`**: Combines all characters into a single string.
*/
