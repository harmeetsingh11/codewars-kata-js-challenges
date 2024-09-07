// SOLUTION 1: using sorting and mapping
function comp(a, b) {
  // Check if either array is null. If so, the arrays are not valid, so return false.
  if (a == null || b == null) return false;

  // Sort both arrays in ascending order.
  // The sorting is done so that corresponding elements in both arrays can be compared directly.
  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);

  // Map each element in array 'a' to its square and compare each squared value with the corresponding element in array 'b'.
  // The every() method checks if all elements in the mapped array of squares match the corresponding elements in array 'b'.
  return a.map((v) => v * v).every((v, i) => v == b[i]);
}

// SOLUTION 2: Using a Map for Frequency Counting
function comp(a, b) {
  // Check if either array is null or if they have different lengths. If so, the arrays are not valid, so return false.
  if (!a || !b || a.length !== b.length) {
    return false;
  }

  // Create a Map to store the frequency of each number in array 'a'.
  const numCountMap = new Map();

  // Iterate through each number in array 'a' and count the occurrences.
  for (const num of a) {
    numCountMap.set(num, (numCountMap.get(num) || 0) + 1);
  }

  // Iterate through each number in array 'b'.
  for (const num of b) {
    // Calculate the square root of the current number in array 'b'.
    const sqrtNum = Math.sqrt(num);

    // Check if the square root exists in the Map and if its count is greater than 0.
    if (!numCountMap.has(sqrtNum) || numCountMap.get(sqrtNum) === 0) {
      return false; // If the square root doesn't exist or its count is 0, return false.
    }

    // Reduce the count of the square root in the Map by 1, as it has been matched with a number in 'b'.
    numCountMap.set(sqrtNum, numCountMap.get(sqrtNum) - 1);
  }

  // If all numbers in 'b' have matching square roots in 'a', return true.
  return true;
}
