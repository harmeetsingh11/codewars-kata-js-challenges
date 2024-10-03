function binaryToDecimal(binary) {
  // The parseInt function converts a string to an integer.
  // The first argument is the string to convert ('binary' in this case).
  // The second argument (2) specifies the base (or radix) of the number in the string.
  // In this case, the base is 2, meaning the string represents a binary number.
  return parseInt(binary, 2);
}

// other usages of parseInt()
// 1. Converting a string to a decimal number (default base is 10)
let decimalNumber = parseInt('123'); // 123
// Explanation: If no radix is provided, `parseInt` assumes the number is in base 10 (decimal).

// 2. Converting a binary (base 2) string to a decimal number
let binaryToDecimal = parseInt('1011', 2); // 11
// Explanation: The second argument is 2, indicating that the string is binary. It converts "1011" (binary) to 11 (decimal).

// 3. Converting an octal (base 8) string to a decimal number
let octalToDecimal = parseInt('17', 8); // 15
// Explanation: The second argument is 8, indicating that the string is octal. It converts "17" (octal) to 15 (decimal).

// 4. Converting a hexadecimal (base 16) string to a decimal number
let hexToDecimal = parseInt('A3', 16); // 163
// Explanation: The second argument is 16, meaning the string is hexadecimal. It converts "A3" (hexadecimal) to 163 (decimal).

// 5. Handling leading spaces and characters
let withSpaces = parseInt('   42'); // 42
// Explanation: `parseInt` ignores leading whitespaces and processes the first valid number.

let withInvalidChars = parseInt('78abc'); // 78
// Explanation: `parseInt` stops at the first invalid character (non-digit) and returns the number up to that point (78).

// 6. Converting strings with negative signs
let negativeNumber = parseInt('-250'); // -250
// Explanation: `parseInt` handles negative numbers if the string has a "-" sign at the start.

let negativeBinary = parseInt('-101', 2); // -5
// Explanation: For binary strings with negative signs, "101" (binary) is converted to -5 (decimal).

// 7. Returning NaN for invalid numbers
let invalidNumber = parseInt('abc'); // NaN
// Explanation: If the string cannot be converted into a valid number, `parseInt` returns NaN (Not-a-Number).

// 8. Handling floating-point numbers (ignores decimal part)
let floatToInt = parseInt('12.34'); // 12
// Explanation: `parseInt` ignores any part of the string after the decimal point and only processes the integer portion.

let floatBinary = parseInt('101.11', 2); // 5
// Explanation: When dealing with binary strings, `parseInt` only considers the integer portion of the string and ignores the part after the decimal point.

// 9. Using bases greater than 10
let base36 = parseInt('z', 36); // 35
// Explanation: In base 36, digits can be 0-9 and letters a-z. Here, "z" (the highest value) equals 35 in decimal.

let base62 = parseInt('zA', 62); // 3843
// Explanation: In base 62, characters range from 0-9, a-z, and A-Z. Here, "zA" equals 3843 in decimal.
