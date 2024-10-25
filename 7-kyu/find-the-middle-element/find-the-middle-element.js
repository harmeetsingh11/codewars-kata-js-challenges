function gimme(triplet) {
  // Copy the triplet and sort it to find the middle element
  const sorted = [...triplet].sort((a, b) => a - b);

  // Find the middle element (the second one in the sorted array)
  const middle = sorted[1];

  // Return the index of the middle element in the original triplet
  return triplet.indexOf(middle);
}

/* 
Explanation:

Copy and Sort the Array:
The original triplet is copied using the spread operator ([...]) to avoid modifying the input.
The copy is then sorted in ascending order using .sort((a, b) => a - b) to find the middle number easily.

Find the Middle Number:
The middle number is always the second element in the sorted array (sorted[1]) because it lies between the smallest and largest elements.

Find the Index in Original Array:
The .indexOf() method is used to find the index of this middle number in the original triplet array.

This approach is efficient and concise, with a time complexity of O(n log n) due to the sorting operation.
*/
