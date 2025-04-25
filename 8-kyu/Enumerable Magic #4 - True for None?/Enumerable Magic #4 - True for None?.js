function none(arr, callback) {
  // Return true if every element in the array returns false from the callback
  return arr.every((item) => !callback(item));
}

console.log(none([1, 2, 3], (x) => x > 3)); // true (none are > 3)
console.log(none([1, 2, 3], (x) => x > 2)); // false (3 > 2 is true)
console.log(none([], (x) => x > 2)); // true (empty array)

/*
### Explanation:
- **`every()`** is a built-in array method that checks if **all elements** satisfy a condition.
- We negate the callback with `!callback(item)` because we want to return `true` **only if the callback returns false for every element**.
- If the array is **empty**, `every()` returns `true` by default — which is exactly what we want.
*/
