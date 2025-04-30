function center(strng, width, fill = ' ') {
  // If the string is already longer than or equal to the desired width, return it unchanged
  if (strng.length >= width) return strng;

  // Total padding needed
  const totalPadding = width - strng.length;

  // Left padding is half the total (rounded up to make left side longer if uneven)
  const leftPadding = Math.ceil(totalPadding / 2);

  // Right padding is the remaining
  const rightPadding = totalPadding - leftPadding;

  // Repeat fill character accordingly and return the padded string
  return fill.repeat(leftPadding) + strng + fill.repeat(rightPadding);
}

console.log(center('a', 3)); // " a "
console.log(center('abc', 10, '_')); // "____abc___"
console.log(center('abcdefg', 2)); // "abcdefg"

/*
### Explanation
- If `strng` is longer than or equal to `width`, there's no padding needed — just return the original string.
- Calculate how many total padding characters are needed.
- Divide padding unevenly if necessary, making the **left side longer**.
- Use `String.prototype.repeat()` to generate repeated fill characters.
- Concatenate and return the final centered string.
*/
