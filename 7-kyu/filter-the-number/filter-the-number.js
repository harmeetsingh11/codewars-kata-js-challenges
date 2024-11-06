function filterString(value) {
  // Use a regular expression to match all digits in the string and join them together
  return Number(value.replace(/\D/g, ''));
}

/*
Explanation:
value.replace(/\D/g, ''):
The regular expression \D matches any non-digit character.
replace(/\D/g, '') removes all non-digit characters from the string, leaving only the digits in their original order.

Convert to Number:
We wrap the result with Number(...) to convert the final string of digits into a numeric value.

This approach is optimal, as it processes the string in a single pass and keeps only the digits, making it both efficient (O(n) time complexity) and concise.
*/
