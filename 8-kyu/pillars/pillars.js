function pillars(numPillars, distance, width) {
  // If there's only one pillar, the distance is 0 as no other pillars exist
  if (numPillars === 1) return 0;

  // Convert distance between pillars from meters to centimeters
  const distanceCm = distance * 100;

  // Total distance: (numPillars - 1) * distance between pillars + (numPillars - 2) * pillar width
  // Exclude the first and last pillar's width
  return (numPillars - 1) * distanceCm + (numPillars - 2) * width;
}

/* 
Explanation:

Edge Case Check:
If there's only one pillar (numPillars === 1), the distance is 0, as there are no other pillars to measure distance against.

Convert Distance:
Since the distance between pillars is provided in meters, we convert it to centimeters by multiplying by 100.

Calculate Total Distance:
The total distance between the first and the last pillar is:
The number of gaps between the pillars: (numPillars - 1).
Multiply the number of gaps by the distance between pillars in centimeters.
Add the width of all intermediate pillars: (numPillars - 2) * width (subtracting the first and last pillars' width).

Return the Result:
Sum these values and return the result.
*/
