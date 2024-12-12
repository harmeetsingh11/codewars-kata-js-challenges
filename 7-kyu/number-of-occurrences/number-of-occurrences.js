// Define the method using Object.defineProperty
Object.defineProperty(Array.prototype, 'numberOfOccurrences', {
  // Define the method as a function
  value: function (element) {
    // Use Array.prototype.reduce to count occurrences of the element
    return this.reduce(
      (count, current) => count + (current === element ? 1 : 0),
      0
    );
  },
  // Make the method non-enumerable to avoid showing it in for...in loops
  enumerable: false,
  writable: true, // Allow overwriting if needed
  configurable: true, // Allow redefinition or deletion
});

// Example
var arr = [0, 1, 2, 2, 3];
console.log(arr.numberOfOccurrences(0)); // Output: 1
console.log(arr.numberOfOccurrences(4)); // Output: 0
console.log(arr.numberOfOccurrences(2)); // Output: 2

/* 
Explanation:

Object.defineProperty:
This method is used to add a property (in this case, a method) to the Array.prototype.
By using enumerable: false, we ensure that the method does not appear during for...in loops.

Implementation of numberOfOccurrences:
The reduce method iterates through the array.
For each element, it checks if the element matches the target element (current === element).
If it matches, it increments the count by 1. Otherwise, the count remains unchanged.
The initial value of the count is 0.

Non-enumerable, writable, and configurable:
enumerable: false ensures it doesn’t interfere with standard enumeration of array properties.
writable: true and configurable: true allow flexibility for redefinition or deletion of the method if necessary.
*/
