// Function to eliminate unset bits (0s) from a binary string
// and return the corresponding decimal value of the resulting binary string.

// @param {string} number - The input binary string.
// @returns {number} - The decimal value of the binary string after removing all unset bits.

function eliminateUnsetBits(number) {
  // Remove all '0's from the input binary string
  const filteredBinary = number.replace(/0/g, '');

  // If the resulting string is empty, it means there were no '1's, return 0
  if (filteredBinary === '') return 0;

  // Convert the remaining binary string (only '1's) to a decimal number and return
  return parseInt(filteredBinary, 2);
}

console.log(eliminateUnsetBits('11010101010101')); // Output: 255
console.log(eliminateUnsetBits('111')); // Output: 7
console.log(eliminateUnsetBits('1000000')); // Output: 1
console.log(eliminateUnsetBits('000')); // Output: 0

/* 
Explanation:

Remove Unset Bits: Use String.prototype.replace() with a regular expression (/0/g) to remove all occurrences of '0' from the binary string.

Handle Edge Case: If the resulting string is empty (i.e., there were no '1' bits), return 0 since the decimal equivalent of no set bits is 0.

Convert to Decimal: Use parseInt(filteredBinary, 2) to convert the filtered binary string (containing only '1' bits) into its decimal equivalent.

Efficiency: This approach is efficient as it processes the input string in a single pass for removal of unset bits and a single pass for conversion to decimal.
*/
