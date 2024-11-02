function generateShape(n) {
  // Create a row of '+' characters repeated n times
  const row = '+'.repeat(n);

  // Repeat the row n times, joining with newline characters to form the square
  return Array(n).fill(row).join('\n');
}

/* 
Explanation:

Generate a Row:
We create a single row of the shape by repeating the + character n times using '+'.repeat(n).

Create the Square:
We use Array(n).fill(row) to create an array with n elements, each containing the row string.
join('\n') joins all the rows together with newline characters to form a square shape.

It has a time complexity of O(n) due to the use of repeat and join functions, which are optimal for this problem.
*/
