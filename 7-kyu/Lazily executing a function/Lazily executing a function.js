// make_lazy returns a function that, when called, executes the original function with pre-supplied arguments
function make_lazy(fn, ...args) {
  // Return a new function (closure) that defers execution of fn with args
  return () => fn(...args);
}

function add(a, b) {
  return a + b;
}

const lazyAdd = make_lazy(add, 2, 3);
console.log(lazyAdd()); // Output: 5

/*
### Explanation:

* `fn` is the function you want to defer.
* `...args` uses the rest parameter syntax to collect any number of arguments.
* The returned function is a closure—it **remembers** `fn` and `args`.
* When the returned function is later **invoked**, it calls `fn` using the **spread operator** `...` to pass the arguments.
*/
