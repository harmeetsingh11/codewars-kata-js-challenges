function formatNumber(n) {
  // Convert number to a string and use a regular expression to insert commas
  return n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

console.log(formatNumber(100000)); // '100,000'
console.log(formatNumber(5678545)); // '5,678,545'
console.log(formatNumber(-420902)); // '-420,902'

/* 
Explanation:

- **`n.toString()`**: Converts the integer `n` into a string.

- **`.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')`**: This regular expression matches any digit `\d` that is followed by a multiple of three digits. The `(?=(\d{3})+(?!\d))` part ensures that commas are inserted only in the correct places. The `'$1,'` part adds a comma after every group of three digits.

*/
