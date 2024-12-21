function reverseBits(num) {
  // Convert the number to binary, reverse the string, and convert it back to a number
  return parseInt(num.toString(2).split('').reverse().join(''), 2);
}

// Example:
console.log(reverseBits(417)); // Output: 267

/* 
Explanation:

num.toString(2): Converts the number num to its binary representation as a string.
Example: 417 becomes "110100001".

.split(''): Splits the binary string into an array of individual characters.
Example: "110100001" becomes ['1', '1', '0', '1', '0', '0', '0', '0', '1'].

.reverse(): Reverses the order of elements in the array.
Example: ['1', '1', '0', '1', '0', '0', '0', '0', '1'] becomes ['1', '0', '0', '0', '0', '1', '0', '1', '1'].

.join(''): Joins the reversed array back into a string.
Example: ['1', '0', '0', '0', '0', '1', '0', '1', '1'] becomes "100001011".

parseInt(string, 2): Converts the reversed binary string back into a decimal integer.
Example: "100001011" becomes 267.

Efficiency:
The solution is efficient for the input size of a typical 32-bit integer.
The binary conversion and string operations are straightforward and operate in O(n), where n is the number of bits in the binary representation.
*/
