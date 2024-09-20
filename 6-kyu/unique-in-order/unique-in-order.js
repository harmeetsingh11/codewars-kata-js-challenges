// SOLUTION 1: Using filter()
var uniqueInOrder = function (iterable) {
  // Step 1: Spread the iterable into an array (works for both strings and arrays).
  // Step 2: Use the filter() method to check if the current element is different from the next one.
  // If so, it's considered unique in order, and it is kept in the result array.

  return [...iterable].filter((value, index) => value !== iterable[index + 1]);
};

// SOLUTION 2: Using reduce()
var uniqueInOrder = function (iterable) {
  // Step 1: Spread the iterable into an array.
  // Step 2: Use the reduce() method to accumulate unique values based on the comparison with the next element in the iterable.

  return [...iterable].reduce((acc, value, index) => {
    if (value !== iterable[index + 1]) {
      acc.push(value);
    }
    return acc;
  }, []);
};
