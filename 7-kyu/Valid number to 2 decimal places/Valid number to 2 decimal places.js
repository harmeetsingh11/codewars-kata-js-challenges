function isValidTwoDecimalNumber(str) {
  // Regex explanation:
  // ^           - start of string
  // [+-]?       - optional '+' or '-' sign
  // \d*         - optional digits before the decimal point
  // \.          - mandatory decimal point
  // \d{2}       - exactly two digits after the decimal point
  // $           - end of string
  return /^[+-]?\d*\.\d{2}$/.test(str);
}

// Examples
console.log(isValidTwoDecimalNumber('0.00')); // true
console.log(isValidTwoDecimalNumber('3.90')); // true
console.log(isValidTwoDecimalNumber('-2.55')); // true
console.log(isValidTwoDecimalNumber('+2.10')); // true
console.log(isValidTwoDecimalNumber('.00')); // true
console.log(isValidTwoDecimalNumber('11.9')); // false
console.log(isValidTwoDecimalNumber('11')); // false
console.log(isValidTwoDecimalNumber('11.')); // false
console.log(isValidTwoDecimalNumber('.9')); // false
console.log(isValidTwoDecimalNumber('hello 1.99')); // false

/*
### Why this works well:
- Uses a single, clear regular expression to validate format.
- Covers optional sign, optional digits before decimal, **mandatory** decimal with **exactly two** digits after.
- Efficient and readable.
*/
