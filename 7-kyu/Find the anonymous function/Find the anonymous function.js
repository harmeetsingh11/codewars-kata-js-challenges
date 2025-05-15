function filterWithAnonymousFunction(arr, data) {
  // Find the anonymous function (i.e., a function without a name) in the array
  const anonFn = arr.find((fn) => typeof fn === 'function' && !fn.name);

  // Use the found anonymous function to filter the data array
  return data.filter(anonFn);
}

const functionsArray = [
  'hello',
  (x) => x % 2 === 0, // anonymous arrow function
  42,
  function namedFunc() {}, // named function, should be ignored
];

const numbers = [1, 2, 3, 4, 5, 6];

console.log(filterWithAnonymousFunction(functionsArray, numbers));
// Output: [2, 4, 6] — only even numbers pass the filter

/*
### How it works:

1. `typeof fn === 'function'`: ensures the element is a function.
2. `!fn.name`: ensures the function is **anonymous** (has no name).
3. `Array.prototype.find(...)`: returns the first matching function.
4. `Array.prototype.filter(...)`: uses the found function to filter the second array.
*/
