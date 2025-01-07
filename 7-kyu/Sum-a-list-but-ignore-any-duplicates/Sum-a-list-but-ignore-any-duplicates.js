function sumUnique(arr) {
  // Create a Map to store the frequency of each number
  const frequencyMap = new Map();

  // Populate the frequency map
  for (const num of arr) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  // Calculate the sum of numbers that appear only once
  return Array.from(frequencyMap.entries())
    .filter(([num, count]) => count === 1) // Keep only numbers with frequency 1
    .reduce((sum, [num]) => sum + num, 0); // Sum up the unique numbers
}

// Test cases
console.log(sumUnique([3, 4, 3, 6])); // Output: 10
console.log(sumUnique([1, 10, 3, 10, 10])); // Output: 4

/* 
Explanation:

Frequency Map:
We use a Map to count occurrences of each number in the array.
The get method retrieves the current count, and set updates it.

Filter Unique Numbers:
Convert the Map to an array of entries using Array.from(frequencyMap.entries()).
Use .filter() to retain only numbers that appear once (frequency = 1).

Sum Unique Numbers:
Use .reduce() to calculate the sum of these filtered numbers.
*/
