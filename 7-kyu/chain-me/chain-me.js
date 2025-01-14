function chain(startValue, functions) {
  // Use reduce to pass the result of each function to the next
  return functions.reduce((value, func) => func(value), startValue);
}

// Example functions
function add(num) {
  return num + 1;
}

function mult(num) {
  return num * 30;
}

// Test the function chainer
console.log(chain(2, [add, mult])); // Output: 90

/* 
Explanation:
Initial Input: The chain function starts with a startValue and an array of functions.
Reduce Method:
reduce iterates through the functions array.
It accumulates the result by passing the output of the current function as the input to the next function.
Function Execution: Each function in the array is executed in order, with the current accumulated value as its argument.
Final Result: The final value after all functions have been applied is returned.
*/
