function factory(multiplier) {
  // Return a new function that takes an array as input
  return function (array) {
    // Use the map method to multiply each element by the multiplier
    return array.map((num) => num * multiplier);
  };
}

var fives = factory(5); // Create a function that multiplies by 5
var myArray = [1, 2, 3];
console.log(fives(myArray)); // Output: [5, 10, 15]

/* 
Explanation:

factory(multiplier):
The factory function takes a number (multiplier) as input and returns another function. This demonstrates the concept of closures in JavaScript, where the inner function has access to the outer function's scope.

Inner Function:
The returned function accepts an array (array) as a parameter.
It uses the .map() method, which efficiently iterates over the array and applies the multiplication operation (num * multiplier) to each element.

Efficiency:
The use of .map() ensures the function processes the array in a single pass, maintaining time complexity of O(n), where n is the size of the array.

Conciseness:
The code avoids unnecessary intermediate variables and directly returns the transformed array from the .map() function.
*/
