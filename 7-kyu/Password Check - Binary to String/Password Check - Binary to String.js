function decodePass(possiblePasswords, binaryStr) {
  // Convert binary string to actual string
  const decoded = binaryStr
    .split(' ') // Split binary string by spaces
    .map((bin) => String.fromCharCode(parseInt(bin, 2))) // Convert each binary to character
    .join(''); // Join characters to form decoded password

  // Check if decoded password exists in the possiblePasswords array
  return possiblePasswords.includes(decoded) ? decoded : false;
}

console.log(
  decodePass(
    ['password123', 'admin', 'admin1'],
    '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011'
  )
);
// Output: 'password123'

console.log(
  decodePass(
    ['password321', 'admin', 'admin1'],
    '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011'
  )
);
// Output: false
