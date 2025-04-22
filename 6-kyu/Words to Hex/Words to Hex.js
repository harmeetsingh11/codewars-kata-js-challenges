function wordsToHex(str) {
  return str
    .trim()
    .split(/\s+/)
    .map((word) => {
      // Take first 3 characters of the word, or pad with null characters if less than 3
      const chars = word.slice(0, 3).padEnd(3, '\0');

      // Convert each character to its ASCII hex value, pad single digits with 0, and join
      const hex = [...chars]
        .map((ch) => {
          // If padding null character, return '00'
          return ch === '\0'
            ? '00'
            : ch.charCodeAt(0).toString(16).padStart(2, '0');
        })
        .join('');

      // Return as hex color
      return `#${hex}`;
    });
}

const input = 'Hello, my name is Gary and I like cheese.';
console.log(wordsToHex(input));
// Output
// [
//   '#48656c', '#6d7900', '#6e616d',
//   '#697300', '#476172', '#616e64',
//   '#490000', '#6c696b', '#636865'
// ]

/*
### Explanation:

1. **`str.trim().split(/\s+/)`**: Splits the input string into words by one or more spaces.
2. **`.map(word => { ... })`**: Processes each word individually.
3. **`slice(0, 3).padEnd(3, '\0')`**: Ensures we always process exactly 3 characters, padding with null characters (`\0`) if needed.
4. **`char.charCodeAt(0).toString(16).padStart(2, '0')`**: Converts each character to a two-digit hexadecimal value.
5. **`#${hex}`**: Formats the RGB hex string.
*/
