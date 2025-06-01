// Re-open the String prototype to add a custom method
String.prototype.myNewMethod = function () {
  // 'this' refers to the string instance. Call the built-in toUpperCase() method.
  return this.toUpperCase();
};

console.log('abc'.myNewMethod()); // Output: "ABC"

/*
### Explanation:

- We extend the `String.prototype` to add a method `myNewMethod`.
- `this` inside the method refers to the current string object.
- We simply return `this.toUpperCase()` to convert the string to uppercase.
- This works like a built-in method on all strings. ✔️
*/
