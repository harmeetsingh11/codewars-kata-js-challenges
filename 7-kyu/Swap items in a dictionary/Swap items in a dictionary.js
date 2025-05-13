function invert(obj) {
  const result = {};

  // Iterate over each [key, value] pair in the object
  for (const [key, value] of Object.entries(obj)) {
    // If value already exists in result, push the key to the array
    // Else, create a new array with the key
    result[value] = result[value] ? [...result[value], key] : [key];
  }

  return result;
}

const input = {
  Ice: 'Cream',
  Age: '21',
  Light: 'Cream',
  Double: 'Cream',
};

console.log(invert(input));
// Output: { Cream: ['Ice', 'Light', 'Double'], '21': ['Age'] }

/*
### Explanation:

* `Object.entries(obj)` converts the object into an array of `[key, value]` pairs.
* We loop through each pair, using the `value` as the key in the `result` object.
* If the `value` already exists as a key in `result`, we append the current `key` to its array.
* If not, we create a new array with the current `key`.

### Time Complexity:

**O(n)** – where `n` is the number of key-value pairs in the original object. Only one pass through the entries is needed.
*/
