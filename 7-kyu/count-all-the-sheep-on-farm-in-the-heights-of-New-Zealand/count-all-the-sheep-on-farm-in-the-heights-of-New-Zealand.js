function calculateSheepLost(friday, saturday, totalSheep) {
  // Sum up sheep counts for Friday
  const fridayTotal = friday.reduce((sum, count) => sum + count, 0);

  // Sum up sheep counts for Saturday
  const saturdayTotal = saturday.reduce((sum, count) => sum + count, 0);

  // Calculate the total sheep returned
  const sheepReturned = fridayTotal + saturdayTotal;

  // Calculate the sheep lost
  return totalSheep - sheepReturned;
}

// Examples:
console.log(calculateSheepLost([1, 2], [3, 4], 15)); // Output: 5
console.log(calculateSheepLost([3, 1, 2], [4, 5], 21)); // Output: 6
console.log(calculateSheepLost([0], [4, 15], 31)); // Output: 12
console.log(calculateSheepLost([], [4], 15)); // Output: 11

/* 
Explanation:

Summing up the sheep counts:
Use reduce() to sum the values in the friday and saturday arrays. If the array is empty, the sum defaults to 0 since the initial value of the accumulator in reduce() is set to 0.

Calculate total sheep returned:
Add the total sheep counted on Friday and Saturday.

Calculate sheep lost:
Subtract the total sheep returned from the total sheep the farmer owns.

Edge cases:
Handles empty arrays (no sheep counted).
Correctly accounts for zero counts within arrays.
*/
