// Define the isUndefined function
const isUndefined = (value) => value === undefined; // Checks if value is exactly undefined

// Example
const arr = [1, undefined, 2, undefined, 3];

// Filter out undefined values from the array
const filteredArr = arr.filter(isUndefined);

console.log(filteredArr); // Output: [undefined, undefined]

/*
### Explanation:

1. **isUndefined Function**: The `isUndefined` function simply checks if the value is strictly equal to `undefined` using the `===` operator. This ensures that we only return `true` for `undefined` and not for other falsy values (e.g., `null`, `0`, `false`, etc.).
2. **Array Filtering**: The `filter()` method is used on the array to remove elements that are not `undefined`. It calls the `isUndefined` function for each element in the array.
3. **Output**: The filtered array will contain only `undefined` values.
*/
