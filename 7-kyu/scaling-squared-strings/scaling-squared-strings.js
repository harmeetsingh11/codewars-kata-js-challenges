function scale(strng, k, v) {
  // If the input string is empty, return an empty string
  if (!strng) return '';

  // Split the string into lines using the newline character
  const lines = strng.split('\n');

  // Perform k-horizontal scaling for each line
  const horizontallyScaled = lines.map((line) =>
    line
      .split('')
      .map((char) => char.repeat(k))
      .join('')
  );

  // Perform v-vertical scaling by repeating each scaled line v times
  const verticallyScaled = horizontallyScaled.reduce((acc, line) => {
    // Add the line v times to the accumulator
    return acc.concat(Array(v).fill(line));
  }, []);

  // Join the vertically scaled lines with newline characters
  return verticallyScaled.join('\n');
}

// Example usage
const a = 'abcd\nefgh\nijkl\nmnop';
console.log(scale(a, 2, 3));

/*
Explanation:
1. If the string is empty, return "" immediately.
2. Split the input string by `\n` to get an array of lines.
3. For k-horizontal scaling:
   - For each line, split it into characters.
   - Repeat each character `k` times.
   - Join the repeated characters back into a single string.
4. For v-vertical scaling:
   - Use `reduce` to iterate over each horizontally scaled line.
   - For each line, create an array with `v` repetitions of the line and concatenate it to the accumulator.
5. Join all lines with `\n` to form the final scaled string.
6. The result is returned as a scaled string.
*/
