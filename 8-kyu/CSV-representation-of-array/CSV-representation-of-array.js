function toCsvText(array) {
  // Convert each inner array to a comma-separated string and join all arrays with a newline character
  return array.map((row) => row.join(',')).join('\n');
}

/* 
Mapping Rows to CSV Format:
array.map(row => row.join(',')) transforms each inner array (row) into a single string, where the elements of the row are joined by commas (,). For example, [0, 1, 2, 3, 4] becomes "0,1,2,3,4".

Joining Rows with Newline Characters:
The resulting array of comma-separated strings is then joined by newline characters (\n), effectively forming a multi-line string in CSV format.

Efficient and Concise:
This solution is both time-efficient (with a single pass to convert and join the elements) and concise, using only built-in array methods for readability and performance.
*/
