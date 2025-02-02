function parseInteger(input) {
  // Trim the input to remove leading/trailing spaces
  input = input.trim();

  // Check if the input is a valid integer string (only digits allowed)
  // The regular expression ^\d+$ ensures that the string only contains digits
  if (/^\d+$/.test(input)) {
    return parseInt(input); // Valid integer, return the parsed integer
  }

  // If input doesn't match the valid integer format, return "NaN"
  return 'NaN';
}

console.log(parseInteger('10')); // 10
console.log(parseInteger('10 apples')); // "NaN"
console.log(parseInteger('  123   ')); // 123
console.log(parseInteger('12.34')); // "NaN"
console.log(parseInteger('abc')); // "NaN"

/* 
Explanation:

Trimming the input: We use .trim() to remove any leading or trailing spaces or special characters like tabs and line feeds, as they don't affect the integer conversion.

Validating the input: The regular expression ^\d+$ ensures that the input string contains only digits (i.e., it's a valid non-negative integer). If it matches, it means the string is a valid integer representation.

Returning the result: If the input is a valid integer string, we return the parsed integer using parseInt. If not, we return "NaN" as a string.
*/
