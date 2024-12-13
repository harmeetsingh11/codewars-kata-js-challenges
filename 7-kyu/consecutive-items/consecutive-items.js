function areConsecutive(arr, a, b) {
  // Find the indexes of a and b in the array
  const indexA = arr.indexOf(a);
  const indexB = arr.indexOf(b);

  // Return true if the absolute difference between their indexes is 1 (consecutive)
  return Math.abs(indexA - indexB) === 1;
}

// Example 1
const arr = [3, 5, 7, 9, 11];
const a = 7;
const b = 9;
console.log(areConsecutive(arr, a, b)); // Output: true

// Example 2
const arr2 = [10, 20, 30, 40];
const a2 = 20;
const b2 = 40;
console.log(areConsecutive(arr2, a2, b2)); // Output: false

/* 
Explanation

Find Indexes:
Use indexOf to find the positions of a and b in the array. Since it's guaranteed they exist, this operation will always succeed.

Check Consecutiveness:
Calculate the absolute difference between the two indices using Math.abs.
If the difference is 1, the numbers are consecutive, so return true. Otherwise, return false.

Efficiency

Time complexity: 
O(n), where n is the length of the array (due to the indexOf calls).

Space complexity: 
O(1), as no additional space is used beyond a few variables.
*/
