function decodeMessage(binaryArray) {
  // Convert each binary string to a character using parseInt (base 2) and String.fromCharCode
  return binaryArray
    .map((bin) => String.fromCharCode(parseInt(bin, 2)))
    .join(''); // Join the characters into a single string
}

const clue = [
  '01000001',
  '01101100',
  '01100101',
  '01111000',
  '01100001',
  '01101110',
  '01100100',
  '01100101',
  '01110010',
];
console.log(decodeMessage(clue)); // Output: 'Alexander'

/*
### Explanation:
- `parseInt(bin, 2)` converts the binary string (e.g., `'01000001'`) to its decimal equivalent (e.g., `65`).
- `String.fromCharCode(65)` turns that decimal number into the corresponding ASCII character (`'A'`).
- `.map(...).join('')` processes all binary strings and joins them into a readable message.
*/
