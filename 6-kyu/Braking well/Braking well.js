const G = 9.81; // Gravity constant in m/s^2
const REACTION_TIME = 1; // Reaction time in seconds

// Function to calculate total stopping distance given speed v (km/h) and friction coefficient mu
function dist(v, mu) {
  const v_mps = v / 3.6; // Convert speed from km/h to m/s
  const braking_distance = v_mps ** 2 / (2 * mu * G); // d1 = v^2 / (2 * mu * g)
  const reaction_distance = v_mps * REACTION_TIME; // Reaction distance = v * t
  return braking_distance + reaction_distance; // Total stopping distance
}

// Function to calculate speed in km/h given total stopping distance d (meters) and friction coefficient mu
function speed(d, mu) {
  // Solving quadratic equation for v_mps: v^2 / (2 * mu * G) + v * REACTION_TIME - d = 0
  const a = 1 / (2 * mu * G);
  const b = REACTION_TIME;
  const c = -d;

  // Quadratic formula: v_mps = (-b + sqrt(b^2 - 4ac)) / 2a (only positive root is relevant)
  const v_mps = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
  return v_mps * 3.6; // Convert back to km/h
}

console.log(dist(100, 0.7)); // 83.9598760937531
console.log(speed(83.9598760937531, 0.7)); // 100.0

/* 
### Explanation:
1. **Conversion:** Since speed is given in km/h, we convert it to m/s by dividing by 3.6.
2. **Braking Distance Calculation:** Using the formula \( d1 = \frac{v^2}{2 \cdot \mu \cdot g} \).
3. **Reaction Distance Calculation:** Since reaction time is 1s, reaction distance is simply \( v \cdot t \).
4. **Total Stopping Distance:** Sum of braking and reaction distances.
5. **Speed Calculation:** Using the quadratic equation \( \frac{v^2}{2\mu g} + v \cdot t = d \), solving for \( v \).
*/
