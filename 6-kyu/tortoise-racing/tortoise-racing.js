function race(v1, v2, g) {
  // If B's speed is not greater than A's, B can never catch up, so return null
  if (v1 >= v2) return null;

  // Calculate the time in hours it will take B to close the gap
  const timeInSeconds = Math.floor((g / (v2 - v1)) * 3600);

  // Convert total seconds to hours, minutes, and seconds
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;

  // Return the result as an array [hours, minutes, seconds]
  return [hours, minutes, seconds];
}

/* 
Explanation:

Early Return for Impossible Catch-Up:
If v1 (A's speed) is greater than or equal to v2 (B's speed), B will never catch up to A. In this case, return null.

Calculate Time to Close the Gap:
The time t (in hours) it will take B to close the distance g can be calculated using the formula:
t= g/(v2−v1)
​
To get the result in seconds, multiply t by 3600 (since 1 hour = 3600 seconds) and use Math.floor() to round down to the nearest second.

Convert Seconds to Hours, Minutes, and Seconds:
Hours: Math.floor(timeInSeconds / 3600) calculates full hours.
Minutes: Math.floor((timeInSeconds % 3600) / 60) calculates remaining minutes after hours are removed.
Seconds: timeInSeconds % 60 gives the remaining seconds after minutes are removed.

Return Result:
Return the result as an array [hours, minutes, seconds].

This solution is efficient because it calculates the result directly without unnecessary loops or complex calculations.
*/
