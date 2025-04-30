function arrayLowerCase(arr) {
  return arr.map((item) =>
    // Check if item is a string, if so convert to lowercase, else return as is
    typeof item === 'string' ? item.toLowerCase() : item
  );
}

console.log(arrayLowerCase(['Red', 'Green'])); // ['red', 'green']
console.log(arrayLowerCase([1, 'Green'])); // [1, 'green']

/*
### Explanation:
- `map()` is used to create a new array with the results of applying the function to each item.
- We check `typeof item === 'string'` to ensure we only call `.toLowerCase()` on strings.
- Non-string items are returned unchanged, as required.
*/
