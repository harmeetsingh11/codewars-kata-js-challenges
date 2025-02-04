function group(numbers) {
  // Create a map to store groups of duplicate numbers
  const map = new Map();

  numbers.forEach((num) => {
    // If the number is already in the map, push it to the existing array
    if (map.has(num)) {
      map.get(num).push(num);
    } else {
      // Otherwise, create a new array for this number
      map.set(num, [num]);
    }
  });

  // Convert the map values (arrays) into the final result array
  return Array.from(map.values());
}

console.log(group([3, 2, 6, 2, 1, 3])); // [[3, 3], [2, 2], [6], [1]]

/* 
Explanation:
1. A `Map` is used to store the grouped numbers efficiently.
2. We iterate through the input array using `forEach`:
   - If the number exists in the map, we append it to its corresponding array.
   - Otherwise, we create a new array for it in the map.
3. Finally, we return an array of the map's values, preserving the order of first occurrences.

This approach ensures an **O(n) time complexity**, making it efficient.
*/
