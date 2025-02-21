function formatCurrency(num) {
  return num.toLocaleString(); // Converts number to locale-specific string with commas
}

console.log(formatCurrency(123456)); // "123,456"
console.log(formatCurrency(1000000)); // "1,000,000"
console.log(formatCurrency(987654321)); // "987,654,321"

/* 
Explanation:
1. The function `formatCurrency` takes a number (`num`) as input.
2. It uses `toLocaleString()` which automatically formats numbers with commas based on locale conventions.
3. This method is efficient, concise, and avoids manual regex replacements or loop-based formatting.
4. The function works correctly for any positive integer input.
*/
