function hashToArray(hash) {
  // Use Object.entries to convert the object into an array of [key, value] pairs
  return Object.entries(hash);
}

const hash = { name: 'Jeremy', age: 24, role: 'Software Engineer' };
const result = hashToArray(hash);

console.log(result);
// Output: [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]

/* 
Explanation:

Object.entries(hash):
This method takes an object and returns an array of its key-value pairs. Each key-value pair is represented as a sub-array [key, value].
Example: { name: 'Jeremy', age: 24 } becomes [["name", "Jeremy"], ["age", 24]].

Efficiency:
The solution runs in O(n), where n is the number of keys in the object, as Object.entries internally iterates over the keys.
*/
