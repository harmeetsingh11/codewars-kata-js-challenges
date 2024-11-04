function array(arr) {
  // Split the input string by commas
  const parts = arr.split(',');

  // Check if there are enough parts after removing the first and last elements
  if (parts.length <= 2) return null;

  // Join the middle parts with spaces and return the result
  return parts.slice(1, -1).join(' ');
}

/* 
Explanation:

Split the String:
arr.split(',') splits the input string by commas, creating an array parts where each element is a character sequence from the input string.

Check for Edge Cases:
If there are 2 or fewer parts, removing the first and last elements would leave the result empty. Thus, we return null in these cases.

Extract and Join the Middle Parts:
parts.slice(1, -1) creates a new array containing all elements except the first and last ones.
.join(' ') joins these middle elements with a space separator to form the output string.

Return the Result:
The function returns the resulting string if there are middle elements, otherwise, it returns null for edge cases.

This solution is efficient with a time complexity of O(n), where n is the length of the input string, due to the split and slice operations.
*/
