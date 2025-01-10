function oddOne(arr) {
  // Use the findIndex method to locate the index of the first odd number
  return arr.findIndex((num) => num % 2 !== 0);
}

// Examples:
console.log(oddOne([2, 4, 6, 7, 10])); // => 3
console.log(oddOne([2, 16, 98, 10, 13, 78])); // => 4
console.log(oddOne([4, -8, 98, -12, -7, 90, 100])); // => 4
console.log(oddOne([2, 4, 6, 8])); // => -1

/* 
Explanation:

findIndex Method:
This method iterates over the array and returns the index of the first element that satisfies the provided condition.
If no element satisfies the condition, it returns -1.

Condition (num % 2 !== 0):
Checks whether the current number is odd.
Odd numbers have a remainder of 1 when divided by 2 (for both positive and negative numbers).

Efficiency:
The method stops iterating as soon as the first odd number is found, making it efficient with a time complexity of O(n), where n is the length of the array.
*/
