function args_count(...args) {
  // Use the rest parameter to collect all arguments into an array
  // Return the length of the array, which corresponds to the number of arguments
  return args.length;
}

// Example usage and test cases
console.log(args_count()); // 0
console.log(args_count('a')); // 1
console.log(args_count('a', 'b')); // 2
console.log(args_count(1, 2, 3, 4, 5)); // 5

/* 
Explanation:

Rest Parameter (...args):
Collects all the arguments passed into the function into an array named args.
This allows the function to handle a variable number of arguments efficiently.

args.length:
Returns the number of elements in the args array, which corresponds to the count of arguments received by the function.
*/
