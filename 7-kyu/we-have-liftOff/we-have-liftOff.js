function formatCountdown(instructions) {
  // Sort the array in descending order and join with spaces, adding 'liftoff!' at the end.
  return instructions.sort((a, b) => b - a).join(' ') + ' liftoff!';
}

console.log(formatCountdown([8, 1, 10, 2, 7, 9, 6, 3, 4, 5])); // "10 9 8 7 6 5 4 3 2 1 liftoff!"
console.log(formatCountdown([1, 2, 4, 3, 5])); // "5 4 3 2 1 liftoff!"

/* 
Explanation:

Sorting the Array:
The .sort((a, b) => b - a) method sorts the array in descending order.
This is necessary for the countdown format.

Joining Elements:
The .join(' ') method concatenates all array elements into a single string, separating them with spaces.

Appending 'liftoff!':
' liftoff!' is appended to the string to complete the countdown format.

Time Complexity: Sorting takes O(nlogn), which is efficient for n≤10.
Space Complexity: The solution uses in-place sorting and a minimal additional string operation, making it memory-efficient.
*/
