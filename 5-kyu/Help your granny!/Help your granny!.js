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
