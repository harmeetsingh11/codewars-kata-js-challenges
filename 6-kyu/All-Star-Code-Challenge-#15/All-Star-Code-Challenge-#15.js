function rotate(str) {
  // If the input string is empty, return an empty array
  if (!str) return [];

  // Create an array of rotated strings using a map
  return [...str].map((_, i) => str.slice(i + 1) + str.slice(0, i + 1));
}

// Example
console.log(rotate('Hello')); // ["elloH", "lloHe", "loHel", "oHell", "Hello"]
console.log(rotate('')); // []

/* 
Explanation:

Input Validation:
If the input string is empty (''), the function immediately returns an empty array.

Main Logic:
Spread the input string into an array of characters using [...str]. This allows us to iterate over the string conveniently.
Use the map function to create the rotated strings. The _ argument represents each character (ignored since we don't use it), and i is the index.
For each index i, create a rotated string by:
Taking the substring from index i + 1 to the end (str.slice(i + 1)).
Appending the substring from the start to index i + 1 (str.slice(0, i + 1)).

Efficiency:
The solution has a time complexity of O(n^2), where n is the length of the string, because slice is O(n) and is called n times.
This is optimal for this type of problem, as generating all rotations inherently requires processing the string multiple times.

Edge Cases:
If the string is empty, the function returns an empty array.
Handles strings of any length without additional checks.
*/
