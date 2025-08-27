/**
 * Creates a function that can only be executed once.
 * @param {Function} fn - The function to wrap.
 * @returns {Function} - A new function that calls `fn` only the first time.
 */
function once(fn) {
  let called = false; // tracks if function was already called
  let result; // stores result of first execution (optional)

  return function (...args) {
    if (!called) {
      called = true;
      result = fn.apply(this, args); // preserve context & arguments
      return result;
    }
    return undefined; // subsequent calls -> no effect
  };
}

// Example Usage:
const logOnce = once(console.log);
logOnce('foo'); // prints "foo"
logOnce('bar'); // no effect

/*
### 🔎 Explanation

1. **Closure**

   * We use a closure to "remember" the `called` flag across function calls.
   * After the first call, `called` becomes `true`, so any further calls will do nothing.

2. **Preserving context & args**

   * `fn.apply(this, args)` ensures that the wrapped function behaves exactly like the original (respects `this` and arguments).

3. **Efficiency**

   * Only one extra variable (`called`) and a closure are used.
   * Time complexity per call: **O(1)**.
   * Memory usage: **minimal** (just one boolean and one optional result).

4. **Behavior**

   * On **first call** → executes the original function, returns its result.
   * On **subsequent calls** → immediately returns `undefined` without invoking the function.
*/
