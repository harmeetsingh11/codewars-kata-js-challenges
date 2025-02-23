function findMissingDetails(list) {
  return list
    .map((dev) => {
      // Find the first property with a null value
      let missingKey = Object.keys(dev).find((key) => dev[key] === null);

      // If a missing property is found, add the 'question' property
      return missingKey
        ? {
            ...dev,
            question: `Hi, could you please provide your ${missingKey}.`,
          }
        : null;
    })
    .filter(Boolean); // Remove null values (developers with no missing details)
}

var list1 = [
  {
    firstName: null,
    lastName: 'I.',
    country: 'Argentina',
    continent: 'Americas',
    age: 35,
    language: 'Java',
  },
  {
    firstName: 'Lukas',
    lastName: 'X.',
    country: 'Croatia',
    continent: 'Europe',
    age: 35,
    language: null,
  },
  {
    firstName: 'Madison',
    lastName: 'U.',
    country: 'United States',
    continent: 'Americas',
    age: 32,
    language: 'Ruby',
  },
];

console.log(findMissingDetails(list1));

/*
### Explanation:
1. **`map()`**: Iterates over each developer object.
   - Finds the first property with a `null` value using `Object.keys().find()`.
   - If a missing property is found, adds the `question` property.
   - Otherwise, returns `null` (to be filtered out later).
2. **`filter(Boolean)`**: Removes `null` values from the array, keeping only developers with missing details.

This approach is efficient (`O(n)`) and preserves the original order.
*/
