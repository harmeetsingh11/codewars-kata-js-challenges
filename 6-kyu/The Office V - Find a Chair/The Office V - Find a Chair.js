function findChairs(rooms, need) {
  // If no chairs are needed, return "Game On"
  if (need === 0) return 'Game On';

  let result = []; // To store the chairs taken from each room

  // Iterate through each room to find spare chairs
  for (const [occupants, chairs] of rooms) {
    const occupied = occupants.length; // Number of occupants in the room
    const spare = Math.max(0, chairs - occupied); // Calculate spare chairs (non-negative)
    const taken = Math.min(need, spare); // Take only what is needed or available

    result.push(taken); // Add the chairs taken to the result array
    need -= taken; // Decrease the needed chairs by the amount taken

    // Stop if we've gathered enough chairs
    if (need === 0) break;
  }

  // If after checking all rooms, we still need chairs, return "Not enough!"
  return need > 0 ? 'Not enough!' : result;
}
console.log(
  findChairs(
    [
      ['XXX', 3],
      ['XXXXX', 6],
      ['XXXXXX', 9],
      ['XXX', 2],
    ],
    4
  )
); // Output: [0, 1, 3]
console.log(
  findChairs(
    [
      ['XXX', 3],
      ['XXXXX', 6],
      ['XXXXXX', 9],
      ['XXX', 2],
    ],
    0
  )
); // Output: "Game On"
console.log(
  findChairs(
    [
      ['XXX', 3],
      ['XXXXX', 6],
      ['XXXXXX', 9],
      ['XXX', 2],
    ],
    10
  )
); // Output: "Not enough!"

/* 
Explanation:

Input Handling:
If need is 0, we immediately return "Game On", as no chairs are required.

Iterate Through Rooms:
For each room (tuple), calculate:
occupied: The number of people in the room (occupants.length).
spare: The number of spare chairs (chairs - occupied), ensuring it’s non-negative using Math.max.
taken: The number of chairs to take from the room (Math.min(need, spare)).

Update State:
Add the taken chairs to the result array and reduce the remaining need.

Early Exit:
Break out of the loop as soon as need reaches 0, since we’ve collected enough chairs.

Final Check:
If need > 0 after the loop, it means not enough chairs were found, so return "Not enough!". Otherwise, return the result array.

Efficiency:
Time Complexity: 
O(n), where n is the number of rooms, as we process each room only once.

Space Complexity: 
O(1) additional space, excluding the result array.
*/
