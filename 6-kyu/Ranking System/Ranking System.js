function rankings(arr) {
  // Step 1: Create a map of each number to its rank
  const rankMap = [...arr] // Copy original array
    .sort((a, b) => b - a) // Sort descending (highest to lowest)
    .reduce((map, num, index) => (map.set(num, index + 1), map), new Map());

  // Step 2: Map each original number to its rank using the rankMap
  return arr.map((num) => rankMap.get(num));
}

console.log(rankings([1, 3, 2])); // [3,1,2]
console.log(rankings([1, 2, 3, 4, 5])); // [5,4,3,2,1]
console.log(rankings([3, 4, 1, 2, 5])); // [3,2,5,4,1]
console.log(rankings([10, 20, 40, 50, 30])); // [5,4,2,1,3]
console.log(rankings([1, 10])); // [2,1]
console.log(rankings([22, 33, 18, 9, 110, 4, 1, 88, 6, 50])); // [5,4,6,7,1,9,10,2,8,3]

/*
### Explanation:

* **Step 1:** Sort a copy of the array in descending order, then assign ranks using `reduce()` and store them in a `Map` for O(1) lookup.
* **Step 2:** Return a new array by mapping the original numbers to their ranks using the pre-built `rankMap`.

This approach runs in **O(n log n)** time due to sorting and is efficient both in time and space.
*/
