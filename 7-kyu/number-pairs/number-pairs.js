function getLargerNumbers(arr1, arr2) {
  // Use map to iterate through arr1 and compare corresponding elements in arr2
  return arr1.map((num, index) => Math.max(num, arr2[index]));
}

let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];
console.log(getLargerNumbers(arr1, arr2)); // Output: [23, 64, 53, 17, 88]

/* 
Explanation:

Map Function:
The map function is used to iterate over each element in arr1.
For every element, its index is used to access the corresponding element in arr2.

Math.max:
Math.max(num, arr2[index]) compares the current element of arr1 (num) with the corresponding element of arr2 (arr2[index]).
It returns the larger of the two.

Return:
The map function creates a new array with the results of the comparisons, which is returned as the output.

Efficiency:
Time Complexity: 
O(n), where n is the length of the arrays, since we loop through each element once.

Space Complexity: 
O(n), for the new array created by map.
*/
