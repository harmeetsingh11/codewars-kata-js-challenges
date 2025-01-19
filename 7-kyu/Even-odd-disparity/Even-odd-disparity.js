function solve(arr) {
  // Filter the array to only include numbers and determine whether they are even or odd
  let evenCount = 0,
    oddCount = 0;
  arr.forEach((item) => {
    // Parse item into a number if it's a string
    let num = typeof item === 'string' ? parseInt(item, 10) : item;

    // Check if it's a number and count even and odd
    if (!isNaN(num)) {
      num % 2 === 0 ? evenCount++ : oddCount++;
    }
  });

  // Return the difference between even and odd counts
  return evenCount - oddCount;
}

console.log(solve([0, 1, 2, 3])); // Output: 0
console.log(solve([0, 1, 2, 3, 'a', 'b'])); // Output: 0
console.log(solve(['0', '1', '2', '3', 'a', 'b'])); // Output: 0

/* 
Explanation:

Input Validation:
Items in the array are checked to ensure they are valid numbers. If the item is a string, it attempts to parse it using parseInt.
If parseInt results in NaN, that item is ignored.

Counting Even and Odd:
Use num % 2 === 0 to identify even numbers. Increment evenCount if true.
Otherwise, increment oddCount.

Result:
Subtract oddCount from evenCount and return the result.

Efficiency:
Single traversal of the array using forEach.
Constant space for counters (evenCount and oddCount).
*/
