function makeValley(arr) {
  // Step 1: Sort the array in descending order
  const sorted = [...arr].sort((a, b) => b - a);

  // Step 2: Split numbers into two wings alternately
  const leftWing = [];
  const rightWing = [];
  sorted.forEach((num, index) => {
    if (index % 2 === 0) {
      leftWing.push(num); // Add to left wing if index is even
    } else {
      rightWing.unshift(num); // Add to right wing (prepended) if index is odd
    }
  });

  // Step 3: Combine left wing, bottom (if odd length), and right wing
  return [...leftWing, ...rightWing];
}

console.log(makeValley([79, 35, 54, 19, 35, 25])); // [79, 35, 25, 19, 35, 54]
console.log(makeValley([67, 93, 100, -16, 65, 97, 92])); // [100, 93, 67, -16, 65, 92, 97]
console.log(makeValley([66, 55, 100, 68, 46, -82, 12, 72, 12, 38])); // [100, 68, 55, 38, 12, -82, 12, 46, 66, 72]
console.log(makeValley([14, 14, 14, 14, 7, 14])); // [14, 14, 14, 7, 14, 14]
console.log(makeValley([14, 14, 14, 14, 14])); // [14, 14, 14, 14, 14]
console.log(makeValley([17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1])); // [17, 15, 8, 7, 4, 1, 4, 5, 7, 14, 17]

/* 
Explanation:

Sorting the Array:
The input array is sorted in descending order to arrange the largest numbers first. This ensures the "steepness" is as evenly distributed as possible between the wings.

Splitting into Wings:
The numbers are alternately assigned to the left wing (even indices) and the right wing (odd indices).
unshift is used for the right wing so that the smallest numbers naturally end up near the "bottom" (center) of the valley.

Combining Wings:
The left wing is followed by the right wing in its reversed order to create the valley-like structure.

This approach has a time complexity of O(nlogn) due to the sorting step and a space complexity of O(n) for the additional arrays used.
*/
