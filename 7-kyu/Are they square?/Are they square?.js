function isSquare(arr) {
  // Return undefined for empty array
  if (arr.length === 0) return undefined;

  // Check if every element is a perfect square
  return arr.every((num) => Number.isInteger(Math.sqrt(num)));
}

console.log(isSquare([1, 4, 9, 16])); // true
console.log(isSquare([3, 4, 7, 9])); // false
console.log(isSquare([])); // undefined

/*  
Explanation:

Check for empty array:
If the array is empty, we return undefined as specified.

Perfect Square Check:
We use Array.prototype.every() to check every element in the array.
For each element, we calculate the square root using Math.sqrt(num), and use Number.isInteger() to verify if the square root is an integer (i.e., if the number is a perfect square).

Return Result:
If all elements are perfect squares, the function returns true. Otherwise, it returns false.

Time Complexity:
The time complexity is O(n), where n is the number of elements in the array, because we check each element once.
*/
