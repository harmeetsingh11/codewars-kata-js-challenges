function uniqueSum(values) {
  // If the input array is empty, return null
  if (!values.length) return null;

  // Use a Set to filter unique values and then sum them up
  return [...new Set(values)].reduce((sum, num) => sum + num, 0);
}

// Test cases
console.log(uniqueSum([1, 2, 3])); // 6
console.log(uniqueSum([1, 3, 8, 1, 8])); // 12
console.log(uniqueSum([-1, -1, 5, 2, -7])); // -1
console.log(uniqueSum([])); // null

/* 
Explanation:

Empty Array Check:
The function first checks if the input array is empty (!values.length). If true, it immediately returns null.

Unique Values Using Set:
The Set data structure automatically removes duplicate values. By spreading (...) the Set back into an array ([...new Set(values)]), we get an array of unique values.

Summing the Unique Values:
The reduce method is used to compute the sum of the unique values. The reduce function iterates over the array, adding each element to a running total (sum).

Efficiency:
Creating a Set runs in O(n) time, where n is the number of elements in the array.
The reduce operation also runs in O(n), so the overall complexity is O(n).
The use of Set ensures concise and readable code.
*/
