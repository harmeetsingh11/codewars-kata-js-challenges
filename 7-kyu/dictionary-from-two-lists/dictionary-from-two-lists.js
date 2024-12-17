function createDict(keys, values) {
  // Use reduce to iterate over keys and create the dictionary
  return keys.reduce((dict, key, index) => {
    // Assign key-value pair; use null if no value exists at the current index
    dict[key] = values[index] !== undefined ? values[index] : null;
    return dict; // Return the updated dictionary
  }, {}); // Initialize the dictionary as an empty object
}

// Example
const keys1 = ['a', 'b', 'c', 'd'];
const values1 = [1, 2, 3];
console.log(createDict(keys1, values1));
// Output: { a: 1, b: 2, c: 3, d: null }

const keys2 = ['a', 'b', 'c'];
const values2 = [1, 2, 3, 4];
console.log(createDict(keys2, values2));
// Output: { a: 1, b: 2, c: 3 }

/* 
Explanation:

reduce() method:
The reduce() method is used to iterate over the keys array and construct the resulting dictionary (dict).

Key-Value Assignment:
For each key, we check if there is a corresponding value in the values array:
If values[index] is defined, it is assigned to the key.
If values[index] is undefined, null is assigned.

Initialization:
The empty object {} serves as the initial accumulator for reduce.


Time Complexity:
O(n), where n is the length of the keys array. It iterates over the keys once.

Space Complexity:
O(1) additional space apart from the result dictionary.
*/
