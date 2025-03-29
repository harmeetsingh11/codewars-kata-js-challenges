// Function to encode a decimal string to binary format
function code(strng) {
  return strng
    .split('')
    .map((d) => {
      let bin = Number(d).toString(2); // Convert digit to binary
      let prefix = '0'.repeat(bin.length - 1) + '1'; // Generate prefix
      return prefix + bin; // Concatenate prefix and binary representation
    })
    .join('');
}

// Function to decode a binary-encoded string back to decimal format
function decode(strng) {
  let res = '',
    i = 0;
  while (i < strng.length) {
    let prefixEnd = i;
    while (strng[prefixEnd] === '0') prefixEnd++; // Count leading 0s in prefix
    let length = prefixEnd - i + 1; // Determine binary digit length
    let digit = parseInt(strng.substr(prefixEnd + 1, length), 2); // Extract and convert binary to decimal
    res += digit;
    i = prefixEnd + 1 + length; // Move to next encoded digit
  }
  return res;
}

// Test cases
console.log(code('77338855')); // "001111001111011101110001100000011000001101001101"
console.log(decode('001111001111011101110001100000011000001101001101')); // "77338855"
