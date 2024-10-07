function twoSum(numbers, target) {
  // Create a hash map (object) to store visited numbers and their indices
  const seen = {};

  // Iterate through the array
  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i]; // Calculate the complement that adds up to the target

    // Check if the complement is already in the hash map
    if (seen.hasOwnProperty(complement)) {
      // If found, return the indices of the current number and its complement
      return [seen[complement], i];
    }

    // Store the current number with its index in the hash map
    seen[numbers[i]] = i;
  }
}
