function findMultiples(integer, limit) {
  // Create an array starting from 'integer' and increment by 'integer' until 'limit' is reached
  return Array.from(
    { length: Math.floor(limit / integer) },
    (_, i) => (i + 1) * integer
  );
}

console.log(findMultiples(2, 6)); // Output: [2, 4, 6]
console.log(findMultiples(3, 15)); // Output: [3, 6, 9, 12, 15]

/*  
Explanation

Math.floor(limit / integer): Calculates how many multiples of integer fit into limit.

Array.from: Creates a new array of the required length, where each element is derived by:
_ is the unused index of the array.
(i + 1) * integer generates the actual multiple of integer for each position in the array.
*/
