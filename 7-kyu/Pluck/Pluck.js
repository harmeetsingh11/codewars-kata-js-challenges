function pluck(objects, property) {
  return objects.map((obj) => obj[property]); // Use map to extract the property from each object
}

console.log(pluck([{ a: 1 }, { a: 2 }], 'a')); // Output: [1, 2]
console.log(pluck([{ a: 1, b: 3 }, { a: 2 }], 'b')); // Output: [3, undefined]

/*
Explanation:
- We use the `map()` method to iterate over each object in the `objects` array.
- For each object, we access the desired property using `obj[property]`. If the property doesn't exist, it will automatically return `undefined`.
- The result is an array containing the values of the specified property, with `undefined` for objects that don't have the property.
*/
