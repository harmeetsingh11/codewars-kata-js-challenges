function binaryToText(binaryString) {
  // If the binary string is empty, return an empty string
  if (!binaryString) return '';

  // Split the binary string into chunks of 8 bits
  return binaryString
    .match(/.{8}/g) // Match every 8 characters (a byte)
    .map((byte) => String.fromCharCode(parseInt(byte, 2))) // Convert each byte to a character
    .join(''); // Join the array of characters into a single string
}

// Examples
console.log(binaryToText('0100100001100101011011000110110001101111')); // Output: "Hello"
console.log(binaryToText('')); // Output: ""

/* 
Explanation:

Empty String Check:
If the input is an empty string, return an empty string immediately.
if (!binaryString) checks for falsy values (like "").

Split into Bytes:
Use binaryString.match(/.{8}/g) to break the binary string into chunks of 8 bits (a byte).
The regular expression .{8} matches exactly 8 characters at a time, and the g flag ensures it matches globally throughout the string.

Decode Each Byte:
Use .map(byte => String.fromCharCode(parseInt(byte, 2))) to:
Convert each 8-bit binary string into a decimal number with parseInt(byte, 2).
Map the decimal number to its ASCII character using String.fromCharCode.

Combine Characters:
Use .join("") to concatenate the characters into a single string.
*/
