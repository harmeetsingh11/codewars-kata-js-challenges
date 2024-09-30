function noBoringZeros(n) {
  // Step 1: Convert the number 'n' to a string so we can manipulate it
  const str = n.toString();

  // Step 2: Use a regular expression to remove the trailing zeros.
  // Regex explanation:
  // '0+'  -> Matches one or more '0' characters.
  // '$'   -> Anchors the match to the end of the string, ensuring we only remove zeros at the end.
  // So, '0+$' means "find one or more zeros at the end of the string."
  const resultStr = str.replace(/0+$/, '');

  // Step 3: Convert the modified string back to a number using the '+' unary operator.
  return +resultStr;
}
