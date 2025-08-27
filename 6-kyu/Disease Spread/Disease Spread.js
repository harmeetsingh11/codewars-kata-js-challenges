/**
 * Simulates an epidemic spread using finite difference approximation
 * and returns the maximum number of infected individuals.
 *
 * @param {number} tm - Total time (days).
 * @param {number} n - Number of intervals to divide the time into.
 * @param {number} s0 - Initial susceptible population.
 * @param {number} i0 - Initial infected population.
 * @param {number} b - Contact rate (spread factor).
 * @param {number} a - Recovery rate (fraction of infected recovering).
 * @returns {number} - Maximum infected population (integer).
 */
function epidemic(tm, n, s0, i0, b, a) {
  const dt = tm / n; // Step size (time increment per iteration)
  let S = s0,
    I = i0,
    R = 0;
  let maxInfected = I; // Track maximum infections

  for (let k = 0; k < n; k++) {
    // Apply finite difference updates
    const dS = -dt * b * S * I;
    const dI = dt * (b * S * I - a * I);
    const dR = dt * a * I;

    S += dS;
    I += dI;
    R += dR;

    if (I > maxInfected) maxInfected = I; // Update max
  }

  return Math.floor(maxInfected); // Truncate to integer
}

console.log(epidemic(14, 336, 996, 2, 0.00206, 0.41)); // → 483

/*
We’re solving the **SIR epidemic model** using finite differences. The goal is to **simulate** the spread and return the **maximum infected population** (truncated to integer).
  
### 🔎 Explanation:

1. **Model basis**:
We approximate the differential equations using finite differences:
 ```
 S[k+1] = S[k] - dt * b * S[k] * I[k]
 I[k+1] = I[k] + dt * (b * S[k] * I[k] - a * I[k])
 R[k+1] = R[k] + dt * a * I[k]
   ```
2. **Simulation**:

   * Start with `S = s0`, `I = i0`, `R = 0`.
   * Loop `n` times (discretized time steps).
   * Update populations each step using the above formulas.
3. **Tracking infections**:

   * Keep track of `maxInfected` while updating.
   * Return `Math.floor(maxInfected)` (truncate).

*/
