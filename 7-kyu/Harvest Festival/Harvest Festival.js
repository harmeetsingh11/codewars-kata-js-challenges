function plant(seed, water, fert, temp) {
  // Build the stem portion as a string of hyphens, length = water
  const stem = '-'.repeat(water);

  // If temp is outside [20,30], all flowers die except one at the end
  if (temp < 20 || temp > 30) {
    // Stem length = water * number of segments (water),
    // but flowers reduced to single seed at end
    return stem.repeat(water) + seed;
  }

  // Otherwise, plant grows normally:
  // Create flower cluster of length = fert (fertilizer)
  const flowers = seed.repeat(fert);

  // The segment = stem + flowers
  const segment = stem + flowers;

  // Repeat the segment water times (water = number of segments)
  return segment.repeat(water);
}

console.log(plant('@', 3, 3, 25)); // "---@@@---@@@---@@@"
console.log(plant('$', 4, 2, 30)); // "----$$----$$----$$----$$"
console.log(plant('&', 1, 5, 20)); // "-&&&&&"
console.log(plant('^', 3, 3, 35)); // "---------^"

/*
### Explanation:

* The stem length between flowers is controlled by `water`.
* The number of segments (stem + flowers) repeated is `water`.
* The size of the flower cluster is `fert`.
* If temperature is outside the ideal range, flowers die except one at the very end, so we build full stem segments and just add one flower seed at the end.
*/
