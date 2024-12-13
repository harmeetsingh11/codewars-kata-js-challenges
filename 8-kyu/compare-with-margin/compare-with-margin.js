function close_compare(a, b, margin = 0) {
  // Calculate the absolute difference between a and b
  const difference = Math.abs(a - b);

  // Check if a is "close to" b within the margin
  if (difference <= margin) return 0;

  // Return -1 if a is less than b, 1 otherwise
  return a < b ? -1 : 1;
}

// Example
console.log(close_compare(3, 5, 3)); // Output: 0
console.log(close_compare(3, 5, 0)); // Output: -1
console.log(close_compare(7, 5, 1)); // Output: 1

/* 
Explanation:

Optional Parameter:
The margin parameter defaults to 0 if not provided, ensuring the function works even when margin is omitted.

Absolute Difference:
Math.abs(a - b) calculates the absolute difference between a and b.

Margin Check:
If the absolute difference is less than or equal to the margin, 0 is returned, indicating the values are "close."

Comparison:
If the values are not "close," the function determines whether a is less than b (returns -1) or greater (returns 1).
*/
