function foldTo(distance) {
  // Return null for invalid negative distance
  if (distance < 0) return null;

  const thickness = 0.0001; // Initial thickness of the paper in meters
  let folds = 0; // Initialize fold counter

  // Keep folding until thickness meets or exceeds the given distance
  for (let currentThickness = thickness; currentThickness < distance; folds++) {
    currentThickness *= 2;
  }

  return folds;
}

/* 
Explanation:

Negative Distance Check:
If the distance is negative, return null as such a scenario is invalid.

Initialize Variables:
thickness: The starting thickness of the paper (0.0001m).
folds: Counter to keep track of the number of folds.

Folding Loop:
Start with the initial thickness.
Double the currentThickness on each iteration to simulate folding the paper.
Increment the folds counter with each iteration.
Stop when currentThickness is greater than or equal to the target distance.

Return Result:
The total count of folds is returned.
*/
