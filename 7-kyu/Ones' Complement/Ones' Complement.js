function onesComplement(binary) {
  // Use the `split`, `map`, and `join` methods to transform the binary string
  return binary
    .split('') // Split the binary string into an array of characters
    .map((bit) => (bit === '0' ? '1' : '0')) // Swap '0' with '1' and vice versa
    .join(''); // Join the array back into a string
}

console.log(onesComplement('0')); // "1"
console.log(onesComplement('1')); // "0"
console.log(onesComplement('000')); // "111"
console.log(onesComplement('1001')); // "0110"

/*Explanation:
- **`split('')`**: Splits the binary string into an array of individual characters (bits).
- **`map(bit => bit === '0' ? '1' : '0')`**: For each bit in the array, it swaps '0' with '1' and vice versa.
- **`join('')`**: Joins the array of bits back into a single string.
*/
