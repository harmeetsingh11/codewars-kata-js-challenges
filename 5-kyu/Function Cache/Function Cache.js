function cache(fn) {
  // Create an object to store cached results
  const cacheStore = new Map();

  // Return a wrapped version of the function
  return function (...args) {
    // Convert the arguments to a string to use as a cache key
    const cacheKey = JSON.stringify(args);

    // If the result for the given arguments is cached, return it
    if (cacheStore.has(cacheKey)) {
      console.log('Returning cached result');
      return cacheStore.get(cacheKey);
    }

    // Otherwise, compute the result and cache it
    const result = fn(...args);
    cacheStore.set(cacheKey, result);

    console.log('Calculating new result');
    return result;
  };
}

var complexFunction = function (arg1, arg2) {
  // Simulating a time-consuming operation (like an API call)
  return `${arg1}-${arg2}`;
};

var cachedFunction = cache(complexFunction);

console.log(cachedFunction('foo', 'bar')); // Calculating new result
console.log(cachedFunction('foo', 'bar')); // Returning cached result
console.log(cachedFunction('foo', 'baz')); // Calculating new result

/* 
Explanation:
1. **Cache Store**: A `Map` is used to store the results of the function calls based on serialized arguments (converted to a string using `JSON.stringify`).
2. **Wrapper Function**: The `cache` function wraps the provided function (`fn`) and adds caching logic.
3. **Argument Serialization**: The arguments passed to the function are serialized into a string to create a unique cache key for each different set of arguments.
4. **Cache Lookup**: If the cache already has a result for the given arguments, it returns the cached result instead of executing the function again.
5. **Cache Population**: If the result isn't cached, it executes the function, stores the result in the cache, and then returns it.
*/
