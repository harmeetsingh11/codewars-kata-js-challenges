// Sum Numbers
function sum(numbers) {
  'use strict';
  return numbers.reduce((sum, num) => {
    return (sum += num);
  }, 0);
}
