function doubleEverySecond(arr) {
  return arr.map((num, index) => (index % 2 === 1 ? num * 2 : num));
}

console.log(doubleEverySecond([1, 2, 3, 4])); // Output: [1, 4, 3, 8]

/* 
Explanation:

arr.map():
Iterates through the array, applying a function to each element.
Creates a new array with the transformed elements.

Condition (index % 2 === 1):
Checks if the index is odd (corresponding to every second integer starting from the left, as array indices are 0-based).

Transformation:
If the condition is true, doubles the number (num * 2).
Otherwise, keeps the number unchanged (num).

Result:
Returns the transformed array, fulfilling the requirements.

This solution is efficient because it processes each element exactly once (O(n) time complexity) and concise due to the use of map().
*/
