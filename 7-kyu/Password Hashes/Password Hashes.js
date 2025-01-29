// Import the 'crypto' module, which is built into Node.js
const crypto = require('crypto');

// Generates an MD5 hash of the given string.
// @param {string} str - The input string to be hashed.
// @returns {string} - The resulting MD5 hash in hexadecimal format.

const passHash = (str) => crypto.createHash('md5').update(str).digest('hex');

console.log(passHash('password')); // Output: "5f4dcc3b5aa765d61d8327deb882cf99"
console.log(passHash('abc123')); // Output: "e99a18c428cb38d5f260853678922e03"

/* 
Explanation:

Import the crypto module – This is a built-in module in Node.js that provides cryptographic functions.

Use crypto.createHash('md5') – This initializes an MD5 hash function.

Update the hash with the input string (update(str)) – This adds the string to be hashed.

Convert the hash to a hexadecimal string (digest('hex')) – This ensures the hash output is in a readable hexadecimal format.

Use concise arrow function syntax – Keeps the function minimal and efficient.

Performance:
O(1) Space Complexity – The function only processes a fixed-size hash.
O(n) Time Complexity – Hashing operates in linear time with respect to the input string length.
*/
