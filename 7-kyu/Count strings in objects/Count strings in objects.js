function strCount(obj) {
  let count = 0;

  // Helper function to recursively check values
  function countStrings(value) {
    if (typeof value === 'string') {
      count++; // If it's a string, increment count
    } else if (Array.isArray(value)) {
      value.forEach(countStrings); // If it's an array, recurse into each element
    } else if (typeof value === 'object' && value !== null) {
      Object.values(value).forEach(countStrings); // If it's an object (and not null), recurse into its values
    }
  }

  countStrings(obj); // Start recursion
  return count;
}

console.log(
  strCount({
    first: '1',
    second: '2',
    third: false,
    fourth: ['anytime', 2, 3, 4],
    fifth: null,
  })
);
// Output: 3
