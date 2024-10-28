function sumOfMinimums(arr) {
  // For each row in the array, find the minimum value, then sum them up
  return arr.reduce((sum, row) => sum + Math.min(...row), 0);
}

/* 
Explanation:

reduce Method:
We use the reduce method to iterate through each row of the 2D array arr.
sum is the accumulator, starting from 0, which will eventually hold the total sum of minimum values.

Finding Minimum in Each Row:
For each row, we use the Math.min(...row) function to find the smallest element in that row. The spread operator (...row) allows us to pass each element of the row as an argument to Math.min.

Accumulating the Sum:
We add the minimum value of each row to sum, and reduce returns the final sum once it has processed all rows.

This solution is efficient, with a time complexity of O(m×n), where m is the number of rows and n is the average length of each row, due to the need to find the minimum in each row.
*/
