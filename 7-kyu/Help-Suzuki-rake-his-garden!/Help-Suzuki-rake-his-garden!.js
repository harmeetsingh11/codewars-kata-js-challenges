function rakeGarden(garden) {
  // Split the input string into an array of items
  return garden
    .split(' ') // Split the garden string into an array of words
    .map((item) => (item === 'rock' || item === 'gravel' ? item : 'gravel')) // Replace all non-rock and non-gravel items with 'gravel'
    .join(' '); // Join the transformed array back into a string
}

// Example
const garden =
  'slug spider rock gravel gravel gravel gravel gravel gravel gravel';
console.log(rakeGarden(garden));
// Output: "gravel gravel rock gravel gravel gravel gravel gravel gravel gravel"

/* 
Explanation:
Split: The split(' ') method breaks the garden string into an array of individual words for easy manipulation.
Map Transformation: The map function iterates over the array:
If the item is either "rock" or "gravel", it remains unchanged.
Otherwise, it is replaced with "gravel".
Join: The join(' ') method converts the array back into a string, using a space as the separator.
Efficiency: This approach processes each word in the garden string once (O(n) complexity), making it efficient.
*/
