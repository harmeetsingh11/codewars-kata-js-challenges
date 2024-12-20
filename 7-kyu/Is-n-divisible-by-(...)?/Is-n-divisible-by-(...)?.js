function isDivisibleByAll(n, ...args) {
  // If no other arguments, return true as n is trivially divisible
  if (args.length === 0) return true;

  // Check if every argument divides n without remainder
  return args.every((arg) => n % arg === 0);
}

// Test Cases
console.log(isDivisibleByAll(6, 1, 3)); // true
console.log(isDivisibleByAll(12, 2)); // true
console.log(isDivisibleByAll(100, 5, 4, 10, 25, 20)); // true

/*  
Explanation:

Rest Parameter: The ...args syntax collects all arguments after n into an array, making it easy to handle a variable number of arguments.

Edge Case: If no additional arguments are passed (args.length === 0), the function returns true, since n is trivially divisible.

Check Divisibility: The every() method iterates over args, ensuring each element divides n without leaving a remainder (n % arg === 0).

Efficiency: The function stops checking as soon as it finds a divisor that doesn't divide n, making it efficient for large input arrays.
*/
