function riders(stations) {
  // Initialize variables for the number of riders and the current rider's distance
  let riders = 1;
  let currentDistance = 0;

  // Iterate through each station
  for (let distance of stations) {
    // If adding this distance exceeds 100 miles, assign a new rider
    if (currentDistance + distance > 100) {
      riders++; // Increment rider count
      currentDistance = distance; // Start a new journey with the current station's distance
    } else {
      currentDistance += distance; // Add the distance to the current rider's journey
    }
  }

  return riders; // Return the total number of riders needed
}

console.log(riders([50, 50, 50, 50])); // Output: 2
console.log(riders([80, 20, 90, 10, 30])); // Output: 3
console.log(riders([100, 100, 100])); // Output: 3

/* 
Explanation:

Initialization:
Start with riders = 1 since at least one rider is always needed.
Set currentDistance = 0 to track the total distance a rider can travel.

Loop through the stations:
For each distance in the stations array:
Check if adding the current station's distance will exceed the 100-mile limit.
If yes, a new rider is needed:
Increment the rider count.
Reset the currentDistance to the current station's distance (this new rider starts here).
Otherwise, add the distance to the currentDistance for the current rider.

Return the total riders:
The variable riders keeps track of the number of riders required and is returned at the end.

Complexity:
Time Complexity: 
O(n), where n is the length of the stations array. The solution iterates through the array once.
Space Complexity: 
O(1), as only a few variables are used for computation.
*/
