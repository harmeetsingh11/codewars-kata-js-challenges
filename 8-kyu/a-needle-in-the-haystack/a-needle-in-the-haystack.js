// Function to find the needle in a haystack
function findNeedle(haystack) {
  // Use indexOf to efficiently find the index of "needle" in the array
  const index = haystack.indexOf('needle');

  // Return the formatted message with the index
  return `found the needle at position ${index}`;
}

// Example usage
const haystack = [
  'hay',
  'junk',
  'hay',
  'hay',
  'moreJunk',
  'needle',
  'randomJunk',
];
console.log(findNeedle(haystack)); // Output: "found the needle at position 5"

// Explanation:
// 1. indexOf: Searches for the "needle" in the array and returns its first occurrence index.
// 2. Template literals: Used for string interpolation to format the output message.
// This approach is concise, efficient (O(n) time complexity), and readable.
