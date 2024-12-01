function replaceRottenFruits(fruits) {
  // Check for null, undefined, or empty input
  if (!Array.isArray(fruits) || fruits.length === 0) return [];

  // Replace "rotten" prefix and convert to lowercase
  return fruits.map(
    (fruit) =>
      fruit.startsWith('rotten')
        ? fruit.slice(6).toLowerCase() // Remove "rotten" and make lowercase
        : fruit.toLowerCase() // Ensure non-rotten fruits are lowercase
  );
}

/* 
Explanation:

Input Validation:
If the input is null, undefined, or not an array, or if the array is empty, return an empty array immediately.

Processing the Array:
Use Array.prototype.map() to iterate through each element in the input array.
For fruits starting with the prefix "rotten", remove the prefix using slice(6) and convert the remaining string to lowercase.
For other fruits, convert them directly to lowercase.

Efficiency:
The solution processes the array in a single pass (O(n)), making it efficient for large inputs.
It avoids modifying the original array and uses concise operations for string manipulation.
*/
