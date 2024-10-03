function minMax(arr) {
  // The spread operator '...' takes all elements of the array and spreads them
  // as individual arguments to the Math.min() and Math.max() functions

  // Math.min() normally takes a list of arguments, not an array.
  // So, we spread the array elements to pass them as individual arguments.
  return [Math.min(...arr), Math.max(...arr)];
}
