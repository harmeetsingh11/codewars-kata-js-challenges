function gps(s, x) {
  // If there is only one or no data points, return 0 as no speed calculation is possible
  if (x.length <= 1) return 0;

  // Calculate maximum hourly speed among all sections
  const maxSpeed = Math.max(
    ...x.slice(1).map((dist, i) => (3600 * (dist - x[i])) / s)
  );

  // Return the floored integer value of the maximum speed
  return Math.floor(maxSpeed);
}

/* 

Explanation:

Edge Case Check:
If x has 1 or fewer elements, we return 0 since there's no movement to calculate speed.

Calculate Speeds for Each Section:
We use x.slice(1).map() to start from the second element in x.
For each distance dist at index i, we calculate (dist - x[i]) to get the distance of the current section.
Multiply by 3600 / s to convert to an hourly speed.

Get Maximum Speed:
Math.max(...) finds the maximum speed from all calculated section speeds.

Return Floored Result:
Math.floor(maxSpeed) returns the integer part of the maximum speed, as required.

This solution is concise and efficient with a time complexity of O(n), iterating over the distances list only once.
*/
