function combine(...objects) {
  // Create a new object to hold the combined result
  return objects.reduce((result, obj) => {
    // Iterate over each object and add its properties to the result
    for (let key in obj) {
      // If the key already exists in the result, add its value
      result[key] = (result[key] || 0) + obj[key];
    }
    return result;
  }, {}); // Initial value is an empty object
}

const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
console.log(combine(objA, objB)); // { a: 13, b: 20, c: 36, d: 3 }

/* 
Explanation:

combine(...objects): Uses the rest operator to accept any number of objects.

reduce(): Iterates over all input objects, accumulating their combined properties in a new object (result).

for (let key in obj): Loops through the properties of each object.

result[key] = (result[key] || 0) + obj[key]: For each key, it checks if the key already exists in the result. If it does, it adds the values; if it doesn't, it initializes it with 0 and then adds the value from the current object.

return result: Returns the combined object.
*/
