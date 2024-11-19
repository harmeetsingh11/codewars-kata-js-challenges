function parseF(input) {
  // Attempt to parse the input into a floating-point number
  const result = parseFloat(input);

  // Check if the result is a valid number; return null if not
  return isNaN(result) ? null : result;
}

/* 
Explanation:

parseFloat:
This JavaScript function attempts to convert the input into a floating-point number.
If the input starts with something numeric, parseFloat extracts the number. Otherwise, it returns NaN.

isNaN(result):
After parsing, this checks whether the result is NaN (Not-a-Number).
If result is NaN, it means the conversion failed, so we return null.

Return value:
If the result is valid, the function returns it.
Otherwise, it returns null for invalid conversions.
*/
