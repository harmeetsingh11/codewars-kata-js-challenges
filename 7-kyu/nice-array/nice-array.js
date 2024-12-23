function isNice(arr) {
  // An empty array is not nice
  if (arr.length === 0) return false;

  // Convert the array into a Set for efficient lookups
  const set = new Set(arr);

  // Check if every element in the array has n-1 or n+1 in the Set
  return arr.every((n) => set.has(n - 1) || set.has(n + 1));
}

// Examples
console.log(isNice([2, 10, 9, 3])); // true
console.log(isNice([4, 2, 3])); // true
console.log(isNice([4, 2, 1])); // false
console.log(isNice([])); // false

/* 
Explanation:

Empty Array Check: If the array is empty (arr.length === 0), we immediately return false, as specified in the problem.

Efficient Lookups with Set:
We use a Set to store the array's elements because Set provides O(1) average time complexity for lookups.
This makes it efficient to check if n - 1 or n + 1 exists in the array.

Validation with every:
The every method iterates through each element in the array and checks if either n - 1 or n + 1 exists in the Set.
If all elements satisfy this condition, every returns true; otherwise, it returns false.

Efficiency:

Time Complexity: O(n), where n is the number of elements in the array. This is because:
Creating the Set takes O(n).
Iterating through the array with every takes O(n), and each Set lookup is O(1).

Space Complexity: O(n), for storing the Set.
*/
