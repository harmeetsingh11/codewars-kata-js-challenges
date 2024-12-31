function sum(...args) {
  // Using the spread operator `...` to collect all arguments into an array `args`
  return args.reduce((acc, curr) => acc + curr, 0);
}

// Examples:
console.log(sum(1, 2, 3)); // => 6
console.log(sum(8, 2)); // => 10
console.log(sum(1, 2, 3, 4, 5)); // => 15

/* 
Explanation:

Spread Operator:
The ...args syntax gathers all passed arguments into an array named args.
This makes it easier to handle a variable number of arguments without relying on the older arguments object.

reduce Method:
The reduce method is used to iterate over the args array and compute the sum.
It takes two parameters:
acc: Accumulator, which stores the ongoing total.
curr: Current value being processed.
The initial value of the accumulator is set to 0.

Efficient and Modern:
Using ...args is modern, clean, and avoids issues with the arguments object (which isn’t a true array and lacks methods like reduce).
The solution is concise and leverages native JavaScript functionality for optimal performance.
*/
