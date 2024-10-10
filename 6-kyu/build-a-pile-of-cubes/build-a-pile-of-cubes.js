function findNb(m) {
  let n = 0,
    totalVolume = 0;

  // Incrementally add the volume of each cube to totalVolume
  while (totalVolume < m) {
    n++;
    totalVolume += n ** 3; // Volume of cube n is n^3
  }

  // Check if the total volume equals m and return n, else return -1
  return totalVolume === m ? n : -1;
}

// Explanation:

// 1. Initialization:

// n = 0: Start counting cubes from 0.
// totalVolume = 0: This variable will store the cumulative volume of cubes.

// 2. While Loop:

// We loop as long as totalVolume is less than the given m.
// For each iteration, increment n by 1 and add the volume of the current cube (n ** 3) to totalVolume.
// The cube's volume is calculated using n ** 3 (n cubed).

// 3. Return the result:

// Once the loop exits, check if totalVolume is equal to m.
// If it matches, return the number of cubes n.
// If it doesn’t, return -1, meaning the exact pile cannot be built with the given volume.
