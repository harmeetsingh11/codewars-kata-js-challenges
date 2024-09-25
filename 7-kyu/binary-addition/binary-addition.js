// Solution 1: using array (Refer to gfg article image: https://media.geeksforgeeks.org/wp-content/uploads/20230731110443/Java-Program-for-Decimal-to-Binary-Conversion-300.png)

function addBinary(a, b) {
  let decimal = a + b;

  let rem = [];

  // Loop until the decimal becomes 0
  while (decimal > 0) {
    rem.push(decimal % 2); // Get the remainder (0 or 1)
    decimal = Math.floor(decimal / 2); //  In JavaScript, the / operator performs floating-point division, and we should use Math.floor() to ensure integer division.
  }

  // If decimal is zero, return '0'
  if (rem.length === 0) return '0';

  return rem.reverse().join(''); // Reverse and join to form the binary string
}

// Solution 2: using inbuilt toString(base) method
function addBinary(a, b) {
  return (a + b).toString(2);
  // The method .toString(2) is used to convert the sum into a binary string.
  // The toString method can take a radix (base) as an argument. In this case, 2 represents the binary numeral system (base 2), Passing 16 as the argument converts the number into a hexadecimal string (base 16).
  // This converts the number to its binary representation.
}

// =================================toString(base) method detailed explanation=======================================
function exampleToString() {
  let number = 255;

  // The .toString() method is used to convert a number (or other types of values) to a string representation.

  // Example: Convert a number to a string in decimal (base 10)
  // Without any argument, the .toString() method defaults to base 10 (decimal system).
  let decimalString = number.toString(); // "255"

  // Example: Convert a number to a binary string (base 2)
  // When passed the argument 2, it converts the number into a binary string.
  let binaryString = number.toString(2); // "11111111"

  // Example: Convert a number to a hexadecimal string (base 16)
  // Passing 16 as the argument converts the number into a hexadecimal string.
  let hexString = number.toString(16); // "ff"

  // Example: Convert a number to an octal string (base 8)
  // Similarly, passing 8 converts the number to an octal string.
  let octalString = number.toString(8); // "377"

  // .toString() works on any number, including negative numbers
  let negativeNumber = -100;
  let negativeBinary = negativeNumber.toString(2); // "-1100100"

  return {
    decimalString, // "255"
    binaryString, // "11111111"
    hexString, // "ff"
    octalString, // "377"
    negativeBinary, // "-1100100"
  };
}
