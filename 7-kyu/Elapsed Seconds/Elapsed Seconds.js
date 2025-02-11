function elapsedSeconds(start, end) {
  // Get the difference in milliseconds and convert to seconds
  return Math.floor((end - start) / 1000);
}

/* 
Explanation:
1. **Subtracting Dates**: In JavaScript, subtracting two `Date` objects returns the difference in milliseconds.
2. **Convert to Seconds**: We divide by `1000` to convert milliseconds to seconds.
3. **Use `Math.floor`**: Ensures we return whole seconds, avoiding potential floating-point inaccuracies.
*/
