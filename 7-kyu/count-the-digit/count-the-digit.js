function nbDig(n, d) {
  let count = 0;

  // Convert the digit d to a string for easy comparison
  let digitStr = d.toString();

  // calculate square from 0 to n
  for (let i = 0; i <= n; i++) {
    // Calculate the square of i
    let square = (i * i).toString();

    // Count occurrences of the digit in the square and add to the total count
    for (let char of square) {
      if (char === digitStr) {
        count++;
      }
    }
  }

  return count;
}
