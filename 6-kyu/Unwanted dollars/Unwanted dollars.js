function parsePrice(input) {
  // Trim leading and trailing spaces
  input = input.trim();

  // Remove the optional '$' sign, ensuring it doesn't affect negative sign
  input = input.replace(/^\$|\s*\$\s*/g, '');

  // Convert to float, if valid; otherwise return 0.0
  let num = parseFloat(input);
  return isNaN(num) ? 0.0 : num;
}

// Test cases
console.log(parsePrice('$100')); // 100
console.log(parsePrice('  42.5  ')); // 42.5
console.log(parsePrice('$ -30')); // -30
console.log(parsePrice('- $15')); // -15
console.log(parsePrice('invalid')); // 0.0
console.log(parsePrice('$abc')); // 0.0

/* 
### Explanation:
1. **Trim spaces**: Removes any leading or trailing spaces.
2. **Remove `$` sign**: Handles cases where the `$` appears at the start, end, or with spaces around it.
3. **Convert to float**: Uses `parseFloat` to extract a valid number.
4. **Handle invalid input**: If conversion fails, return `0.0`.
*/
