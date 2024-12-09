function cleanGarden(garden, bags, cap) {
  // Flatten the 2D garden array to a single array for easier processing
  const flatGarden = garden.flat();

  // Check if the dog is present in the garden
  if (flatGarden.includes('D')) return 'Dog!!';

  // Count the number of '@' (cr@p) in the garden
  const crapCount = flatGarden.filter((cell) => cell === '@').length;

  // Calculate the total capacity available with the bags
  const totalCapacity = bags * cap;

  // Determine if the garden is cleanable
  return crapCount <= totalCapacity ? 'Clean' : 'Cr@p';
}

// Example usage
const garden = [
  ['_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '@', '_'],
  ['@', '_', '_', '_', '_', '_'],
];
console.log(cleanGarden(garden, 2, 2)); // Output: 'Clean'

/* 
Explanation:

Flatten the Garden:
garden.flat() converts the 2D array into a single array, simplifying the search for cr@p ('@') and the dog ('D').

Check for the Dog:
Using .includes('D') to check if the dog ('D') is present. If found, return 'Dog!!' immediately.

Count Cr@p:
Use .filter(cell => cell === '@') to create an array of all cr@p elements and .length to get the total count.

Calculate Total Capacity:
Multiply bags and cap to determine the total cr@p that can be collected.

Determine the Result:
Compare crapCount with totalCapacity to decide if the garden is cleanable ('Clean') or not ('Cr@p').

Complexity:
Time Complexity: O(n), where n is the total number of cells in the garden.
Space Complexity: O(n), due to the flattened array.
*/
