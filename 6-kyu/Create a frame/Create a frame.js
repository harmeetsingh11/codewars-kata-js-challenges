function frame(arr, ch) {
  // Find the maximum length string to determine the frame width
  const maxLen = Math.max(...arr.map((str) => str.length));

  // Calculate the full width of the frame line (border + space + content + space + border)
  const width = maxLen + 4;

  // Create the top and bottom border
  const borderLine = ch.repeat(width);

  // Format each line with border, space, content, padding, space, and border
  const framedLines = arr.map((str) => `${ch} ${str.padEnd(maxLen)} ${ch}`);

  // Combine all lines with newline characters
  return [borderLine, ...framedLines, borderLine].join('\n');
}

console.log(frame(['Create', 'a', 'frame'], '+'));

/*
### Explanation:

* **`Math.max(...arr.map(...))`**: Finds the length of the longest string.
* **`str.padEnd(maxLen)`**: Pads shorter strings with spaces to align right.
* **Frame Width** = `maxLen + 4` → for 1 space + content + 1 space + 2 border characters.
* The final output is created by wrapping the content lines between the top and bottom borders.
*/
