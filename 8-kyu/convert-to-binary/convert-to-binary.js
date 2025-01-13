function binaryAsDecimal(b) {
  // Convert the input number to binary using toString(2)
  const binaryString = b.toString(2);

  // Parse the binary string as a decimal number
  return parseInt(binaryString, 10);
}

console.log(binaryAsDecimal(1)); // Output: 1
console.log(binaryAsDecimal(5)); // Output: 101
console.log(binaryAsDecimal(11)); // Output: 1011

/* 
Explanation:

Convert to Binary:
The toString(2) method converts a number into its binary representation as a string.
For example, 5.toString(2) returns '101'.

Interpret as Decimal:
The parseInt function interprets a string as a number in a given base.
Using parseInt(binaryString, 10) treats the binary string as a base-10 number.
Example: '101' becomes 101.

Return the Result:
The final result is returned as the decimal interpretation of the binary representation.
*/
