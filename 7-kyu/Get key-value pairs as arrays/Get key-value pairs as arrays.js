function keysAndValues(obj) {
  // Extract keys and values from the object using Object.keys and Object.values
  const keys = Object.keys(obj);
  const values = Object.values(obj);

  // Return an array containing the keys array and values array
  return [keys, values];
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 })); // [['a', 'b', 'c'], [1, 2, 3]]

/* 
Explanation:

Extracting Keys and Values:
Object.keys(obj) retrieves all enumerable property names (keys) of the object and returns them in an array.
Object.values(obj) retrieves all enumerable property values of the object and returns them in an array.

Returning the Result:
The keys and values arrays are combined into a single array and returned as [[keys], [values]].

Efficiency:
This approach leverages built-in methods that are optimized for performance, making it both efficient and concise.

Handling Objects with Prototypes:
Since Object.keys and Object.values only consider the object's own enumerable properties (not those inherited from the prototype), no additional checks are required for objects extending their prototype. This ensures the function adheres to the problem's requirements.
*/
