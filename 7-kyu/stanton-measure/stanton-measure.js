function stantonMeasure(arr) {
  // Step 1: Count how many times the value 1 appears in the array.
  const countOf1 = arr.filter((num) => num === 1).length;

  // Step 2: Count how many times 'countOf1' appears in the array.
  const stanton = arr.filter((num) => num === countOf1).length;

  // Return the Stanton measure.
  return stanton;
}

// Example
console.log(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2])); // Output: 3
console.log(stantonMeasure([1, 4, 1, 2, 11, 2, 3, 1])); // Output: 1

/* 
Explanation

arr.filter(num => num === 1):
This filters the array to only include values equal to 1.
.length gives the count of 1 occurrences, stored as countOf1.

arr.filter(num => num === countOf1):
Using countOf1, filter the array again to count how many times that number appears.
.length gives the Stanton Measure.

Return Result:
The final result is returned as the Stanton Measure.

Efficiency
The function iterates through the array twice: once for countOf1 and once for the Stanton measure.
Time Complexity: O(n), where n is the length of the array.
Space Complexity: O(1) additional space since .filter creates temporary arrays, but no extra data structures are used.
*/
