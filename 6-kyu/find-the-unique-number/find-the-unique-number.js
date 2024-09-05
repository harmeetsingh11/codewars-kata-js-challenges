// Solved using a hash map (frequency map) to track the count of each number
function findUniq(arr) {
  // Create a new Map to store the frequency of each element in the array
  const frequency = new Map();

  // Iterate over each element in the input array
  for (const num of arr) {
    // Check if the current element (num) already exists as a key in the frequency map
    // If it does not exist, initialize its value to 0 and then increment it by 1
    // If it already exists, simply increment its value by 1
    frequency.set(num, (frequency.get(num) || 0) + 1);
  }

  // Iterate through the frequency map to find the unique number
  for (const [num, count] of frequency) {
    // Check if the count of the current element is 1
    if (count === 1) {
      return num; // Return the unique number (the one with a count of 1)
    }
  }
}
