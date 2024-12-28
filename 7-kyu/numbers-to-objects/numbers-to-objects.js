function createCharCodeObjects(arr) {
  // Map over the input array and transform each number into an object
  return arr.map((num) => ({ [num]: String.fromCharCode(num) }));
}

// Example
const input = [97, 98, 99]; // ASCII codes for 'a', 'b', 'c'
const result = createCharCodeObjects(input);
console.log(result); // Output: [{"97": "a"}, {"98": "b"}, {"99": "c"}]

/* 
Explanation

Input Handling:
The arr.map() function is used to iterate over each number in the input array.

Object Creation:
For each number, an object is created where the key is the number as a string ([num]), and the value is the corresponding character (String.fromCharCode(num)).

Output:
The map function returns an array of these objects, which is the required result.

Example Walkthrough
For the input [97, 98, 99]:
97 → { "97": "a" }
98 → { "98": "b" }
99 → { "99": "c" } Thus, the output is [{"97": "a"}, {"98": "b"}, {"99": "c"}].

Efficiency:
The solution uses map, which processes the array in O(n) time, where n is the length of the array. This ensures optimal performance.
*/
