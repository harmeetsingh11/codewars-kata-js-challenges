function any(array, callback) {
  // If the array is empty, immediately return false
  if (array.length === 0) return false;

  // Use the some() method to check if any element satisfies the callback
  return array.some(callback);
}

// Example
console.log(any([1, 2, 3], (x) => x > 2)); // true
console.log(any([1, 2, 3], (x) => x > 5)); // false
console.log(any([], (x) => x > 2)); // false

/* 
Explanation:

Empty Array Check:
If the input array is empty (array.length === 0), the function directly returns false. There's no need to process further since no items exist to evaluate against the callback.

Using Array.prototype.some():
The some method is a built-in JavaScript array method that iterates over the elements of the array and checks if the provided function (callback) returns true for any of the elements.
As soon as the callback returns true for an element, the iteration stops, and some immediately returns true, making it efficient.

Returns the Result:
If no elements satisfy the callback, some returns false, which is returned by the any function.
*/
