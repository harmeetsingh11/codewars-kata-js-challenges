// SOLUTION 1: Refactored version of solution 2 (ternary conditional operator)
function findAverage(array) {
  return array.length > 0
    ? array.reduce((sum, num) => (sum += num), 0) / array.length
    : 0;
}

// SOLUTION 2: ternary conditional operator
function findAverage(array) {
  const sum = array.reduce((sum, num) => {
    return (sum += num);
  }, 0);
  return array.length > 0 ? sum / array.length : 0;
}

// SOLUTION 3: using lodash package
const lodash = require('lodash');
function findAverage(array) {
  return array.length > 0 ? lodash.sum(array) / array.length : 0; // sum(array)-returns sum of all array elements
}
