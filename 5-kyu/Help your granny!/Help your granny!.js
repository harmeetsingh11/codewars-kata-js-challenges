function tour(friends, townmap, dist) {
  // Convert townmap array into an object mapping friend names to their respective towns
  var towns = townmap.reduce(
    (obj, town) => (obj[town[0]] = town[1]) && obj,
    {}
  );

  // Helper function using the Pythagorean theorem to compute the travel distance
  var pyth = (c, a) => Math.sqrt(c * c - a * a);

  return (
    friends
      // Map each friend to their respective town
      .map((friend) => towns[friend])
      // Map each town to its distance from X0, defaulting to 0 if not found
      .map((town) =>
        dist.indexOf(town) !== -1 ? dist[dist.indexOf(town) + 1] : 0
      )
      // Remove any invalid distances (undefined or 0)
      .filter((valid) => valid)
      // Compute total travel distance using the Pythagorean theorem
      .map((dist, idx, arr) =>
        !idx
          ? dist
          : pyth(dist, arr[idx - 1]) + (!(arr.length - idx - 1) ? dist : 0)
      )
      // Sum up all distances and apply bitwise OR 0 to floor the result
      .reduce((sum, distance) => sum + distance, 0) | 0
  );
}

/* 
Approach Used:
1. **Convert `townmap` into an object (`towns`)** for quick lookup of towns associated with friends.
2. **Define a `pyth` function** to compute distances using the Pythagorean theorem.
3. **Map `friends` to their corresponding towns** using the `towns` object.
4. **Convert towns to their distances from `X0`** using `dist` lookup.
5. **Filter out undefined distances** (i.e., friends whose towns are unknown).
6. **Calculate distances using Pythagorean theorem** while handling the first and last town differently:
   - The first town keeps its direct distance.
   - Intermediate towns use the Pythagorean theorem for indirect travel.
   - The last town adds its direct distance to complete the circuit.
7. **Sum up all computed distances and return the floored value** using bitwise OR (`| 0`), ensuring an integer result.
*/
