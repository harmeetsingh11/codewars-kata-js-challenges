// Polyfill for Array.prototype.filter
// This matches native behavior (ECMAScript spec) as closely as possible.
Array.prototype.filter = function (callback, thisArg) {
  // 1. Ensure 'this' is not null/undefined
  if (this == null) {
    throw new TypeError('Array.prototype.filter called on null or undefined');
  }

  // 2. Ensure callback is a function
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  // 3. Convert 'this' to an object (covers arrays & array-like objects)
  const O = Object(this);

  // 4. Get length as unsigned 32-bit integer
  const len = O.length >>> 0;

  // 5. Create new array for results
  const res = [];

  // 6. Iterate through all indexes
  for (let i = 0; i < len; i++) {
    // Check if the index exists in the object (sparse arrays support)
    if (i in O) {
      const val = O[i];
      // Call the callback with correct 'this' binding
      if (callback.call(thisArg, val, i, O)) {
        res.push(val); // Include value if callback returns truthy
      }
    }
  }

  return res; // Return filtered array
};

console.log([1, 2, 3, 4, 5].filter((num) => num > 3)); // [4, 5]
console.log([, 2, , 4].filter((n) => n > 1)); // [2, 4] (skips empty slots)

/*
### **Explanation**

1. **Checks for `null` or `undefined`**
   Native `filter()` throws a `TypeError` if called on `null` or `undefined`.

2. **Ensures callback is a function**
   Throws a `TypeError` if not.

3. **Supports array-like objects**
   Converts `this` to an object so it works with non-array objects (e.g., `{0:'a', length:1}`).

4. **Preserves sparse arrays**
   Only processes indices that actually exist (`i in O`).

5. **Maintains `thisArg` binding**
   Uses `callback.call(thisArg, val, i, O)`.

6. **Time Complexity**

   * **O(n)** — single pass through array.
   * Space: **O(k)**, where `k` is number of matched elements.
*/
