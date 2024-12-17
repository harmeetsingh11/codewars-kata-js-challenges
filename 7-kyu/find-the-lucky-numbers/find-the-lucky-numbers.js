function filterLucky(numbers) {
  // Use the filter method to keep only numbers that include '7' when converted to a string
  return numbers.filter((num) => num.toString().includes('7'));
}

// Example
console.log(filterLucky([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17])); // Output: [7, 70, 17]

/* 
Explanation:

Convert Numbers to Strings:
Each number in the array is converted to a string using toString(). This allows us to check for the presence of the digit '7'.

Use filter Method:
The filter method iterates through the array and applies a callback function to each element. The callback checks if the string version of the number contains '7' using the includes method.

Return Filtered Array:
The filter method returns a new array with only those numbers that pass the condition (i.e., contain '7').
*/
