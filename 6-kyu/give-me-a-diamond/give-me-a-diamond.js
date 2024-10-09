function diamond(n) {
  // Return null if the number is even or negative
  if (n <= 0 || n % 2 === 0) return null;

  // Create the diamond pattern using a loop
  let diamondStr = '';
  for (let i = 0; i < n; i++) {
    const spaces = Math.abs((n - 1) / 2 - i); // Calculate leading spaces
    const stars = n - 2 * spaces; // Calculate number of stars for each row
    diamondStr += ' '.repeat(spaces) + '*'.repeat(stars) + '\n'; // Build each line
  }
  return diamondStr;
}
