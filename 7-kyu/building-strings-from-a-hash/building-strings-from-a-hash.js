function solution(obj) {
  // Use Object.entries to get an array of [key, value] pairs from the object
  return (
    Object.entries(obj)
      // Map each pair to the desired "KEY = VALUE" format
      .map(([key, value]) => `${key} = ${value}`)
      // Join all pairs with a comma to create the final string
      .join(',')
  );
}

// Example
console.log(solution({ a: 1, b: '2' })); // Output: "a = 1,b = 2"

/*  
Explanation:

Object.entries(obj):
Converts the object into an array of key-value pairs ([key, value]).

.map(([key, value]) => \${key} = ${value}`)`:
Transforms each key-value pair into the required string format: "KEY = VALUE".

.join(','):
Combines the formatted strings into a single string, separating them with commas.
*/
