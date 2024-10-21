function mxdiflg(a1, a2) {
  // If either array is empty, return -1
  if (a1.length === 0 || a2.length === 0) return -1;

  // Find the max and min string lengths in both arrays
  const maxA1 = Math.max(...a1.map((str) => str.length));
  const minA1 = Math.min(...a1.map((str) => str.length));
  const maxA2 = Math.max(...a2.map((str) => str.length));
  const minA2 = Math.min(...a2.map((str) => str.length));

  // Return the maximum absolute difference in lengths
  return Math.max(Math.abs(maxA1 - minA2), Math.abs(maxA2 - minA1));
}

/* 
Explanation:

Empty Array Check:
If either a1 or a2 is empty, we immediately return -1 as per the problem requirements.

Find Max and Min Lengths:
We use Math.max and Math.min combined with map to extract the lengths of strings in a1 and a2. These values represent the extremes (maximum and minimum lengths) in each array.

Calculate the Maximum Difference:
We calculate the absolute difference between the longest string in one array and the shortest string in the other. The goal is to maximize this difference.

Two comparisons are made:
maxA1 - minA2 (difference between the longest string in a1 and the shortest in a2)
maxA2 - minA1 (difference between the longest in a2 and the shortest in a1)
The maximum of these two is the desired result.

This approach ensures the solution is efficient (O(n) complexity, where n is the total number of elements across both arrays) and concise.
*/
