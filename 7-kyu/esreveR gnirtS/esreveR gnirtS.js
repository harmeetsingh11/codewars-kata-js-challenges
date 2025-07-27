// Extend String prototype to include a `reverse` method
String.prototype.reverse = function () {
  // `this` refers to the string instance
  // Split string into array, reverse the array, join back into string
  return this.split('').reverse().join('');
};

console.log('String'.reverse()); // Output: "gnirtS"
console.log('Super awesome string'.reverse()); // Output: "gnirts emosewa repuS"

/*
### **Explanation**

* `this.split('')`: Converts the string into an array of characters.
  Example: `"abc"` → `['a', 'b', 'c']`

* `.reverse()`: Reverses the array in-place.
  `['a', 'b', 'c']` → `['c', 'b', 'a']`

* `.join('')`: Joins the reversed array back into a string.
  `['c', 'b', 'a']` → `"cba"`

### **Performance Note**

This approach is **highly optimized for strings of moderate length** and leverages native JavaScript engine optimizations for string and array operations. For nearly all real-world use cases, this is the best solution.
*/
