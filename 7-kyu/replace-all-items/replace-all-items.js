function replaceAll(input, oldValue, newValue) {
  // If the input is a string, use the string's `replaceAll` method.
  if (typeof input === 'string') {
    return input.split(oldValue).join(newValue);
  }

  // If the input is an array, map over its elements and replace occurrences of `oldValue`.
  if (Array.isArray(input)) {
    return input.map((item) => (item === oldValue ? newValue : item));
  }

  // If the input type is unsupported, return it as is.
  return input;
}

// For a list
console.log(replaceAll([1, 2, 2], 1, 2)); // [2, 2, 2]

// For a string
console.log(replaceAll('hello world', 'world', 'everyone')); // "hello everyone"

/*  
Explanation:

String Handling:
For strings, the split method splits the string into an array based on the oldValue, and then join combines it back with newValue. This handles all occurrences efficiently.

Array Handling:
The map method iterates over the array. If an element matches the oldValue, it replaces it with newValue; otherwise, the element remains unchanged.

Unsupported Input:
If the input isn't a string or array, the function gracefully handles it by returning the input unchanged.
*/
