function mirror(text) {
  // Split the input text into words
  const words = text.split(' ');

  // Find the longest word to determine frame width
  const maxLen = Math.max(...words.map((word) => word.length));

  // Create the top and bottom border
  const border = '*'.repeat(maxLen + 4);

  // Reverse each word and format with '*' on both sides
  const mirroredWords = words.map(
    (word) =>
      `* ${word.split('').reverse().join('')}${' '.repeat(
        maxLen - word.length
      )} *`
  );

  // Join all parts together with new lines
  return [border, ...mirroredWords, border].join('\n');
}

console.log(mirror('Hello World'));

/* 
Explanation:
1. **Split** the input text into an array of words.
2. **Find the longest word's length** to define the frame width.
3. **Create a border** made of `*` with a width of `maxLen + 4` (2 for `*` and 2 for spaces).
4. **Reverse each word**, pad it with spaces to align properly, and wrap it with `*`.
5. **Join everything together** with newline characters.
*/
