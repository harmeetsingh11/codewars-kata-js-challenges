// Define a curried function 'say' that takes the first argument 'a'
function say(a) {
  // Return a new function that takes the second argument 'b'
  return function (b) {
    // Combine 'a' and 'b' with a space and return the result
    return `${a} ${b}`;
  };
}

console.log(say('Hello')('World')); // Output: "Hello World"

/*
### Explanation:

- `say("Hello")` returns a function waiting for a second argument.
- `("World")` calls that returned function with `"World"`.
- Inside that inner function, it simply returns the two strings combined with a space: `"Hello World"`.

This is clean, efficient, and uses the power of closures in JavaScript.
*/
