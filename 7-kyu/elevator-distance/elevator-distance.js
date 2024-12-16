function elevatorDistance(floors) {
  // Use reduce to calculate the total distance traveled.
  // The absolute difference between consecutive floors is accumulated.
  return floors.reduce((total, floor, index) => {
    if (index === 0) return total; // Skip the first floor (no previous floor to compare).
    return total + Math.abs(floor - floors[index - 1]);
  }, 0);
}

// Examples
console.log(elevatorDistance([5, 2, 8])); // Output: 9
console.log(elevatorDistance([1, 2, 3])); // Output: 2
console.log(elevatorDistance([7, 1, 7, 1])); // Output: 18
console.log(elevatorDistance([3, 3])); // Output: 0

/*  
Explanation:

Input Handling: The function takes an array of integers, floors, which represent the sequence of floors visited.

Using reduce:
The reduce method iterates through the floors array.
For each floor (starting from the second), it computes the absolute difference between the current floor and the previous one using Math.abs.
This difference is added to the cumulative total.

Initial Value: The accumulator starts at 0, representing the total distance traveled so far.

Skipping the First Floor: The first floor is skipped since there’s no previous floor to calculate a difference.

Time Complexity:
O(n): The function iterates through the array once.

Space Complexity:
O(1): No additional data structures are used.
*/
