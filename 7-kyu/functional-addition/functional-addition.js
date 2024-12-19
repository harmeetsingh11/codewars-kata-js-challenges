// Define the `add` function that takes a number `n`
// Returns a new function that takes another number `x` and adds `n` to it
const add = (n) => (x) => n + x;

// Example
const addOne = add(1);
console.log(addOne(3)); // Output: 4

const addThree = add(3);
console.log(addThree(3)); // Output: 6

/* 
Explanation:

add Function:
Accepts a parameter n.
Returns a new function (a closure) that accepts another parameter x.

Closure:
The returned function has access to n from the outer scope.
When invoked, it adds n and x together.

Efficiency:
The implementation leverages concise arrow function syntax.
It avoids unnecessary variables or extra logic.
*/
