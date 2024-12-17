function flatten(array) {
  // Use Array.prototype.flat with a depth of 1 to flatten the array one level
  return array.flat(1);
}

// Examples
console.log(flatten([1, 2, 3])); // => [1, 2, 3]
console.log(
  flatten([
    [1, 2, 3],
    ['a', 'b', 'c'],
    [1, 2, 3],
  ])
); // => [1, 2, 3, "a", "b", "c", 1, 2, 3]
console.log(flatten([[[1, 2, 3]]])); // => [[1, 2, 3]]

/*
  Explanation:
  
  Array.prototype.flat:
  The flat() method creates a new array by flattening the input array up to a specified depth.
  We pass 1 as the argument, which ensures that it only flattens one level of nested arrays.
  
  Edge Cases:
  For arrays without nesting, the result remains unchanged.
  For arrays with deeper nesting, only the top level gets flattened.
  
  Why is this approach efficient?
  The flat method is built-in and optimized for performance in modern JavaScript engines.
  It avoids manual loops or recursion, making the solution concise and easy to understand.
  
  Output:

  flatten([1, 2, 3]); 
  => [1, 2, 3]
  
  flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]]);
  => [1, 2, 3, "a", "b", "c", 1, 2, 3]
  
  flatten([[[1, 2, 3]]]);
  => [[1, 2, 3]]
  */
