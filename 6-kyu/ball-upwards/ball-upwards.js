function max_ball(v) {
  // Convert velocity from km/h to m/s
  const velocity = (v * 1000) / 3600;
  // Earth's gravity in m/s²
  const g = 9.81;

  // The time in seconds to reach maximum height is velocity / g.
  // Convert this to tenths of a second and round to the nearest integer.
  return Math.round((velocity / g) * 10);
}

console.log(max_ball(15)); // 4
console.log(max_ball(25)); // 7

/* 
Explanation:

Convert v from km/h to m/s:
Velocity in m/s is obtained by dividing the value in km/h by 3.6 (since 1 km = 1000 meters and 1 hour = 3600 seconds).

Physics formula for maximum height:
The ball reaches its maximum height when its vertical velocity becomes zero. This occurs at time t= g/v ​(in seconds), where v is the velocity in m/s and g is the gravitational acceleration (∼9.81m/s^2).

 Convert time to tenths of a second:
Multiply t by 10 to get the time in tenths of a second, as required by the problem.

Round to the nearest integer:
Since the device records at every tenth of a second, we round the calculated time to the nearest integer.
*/
