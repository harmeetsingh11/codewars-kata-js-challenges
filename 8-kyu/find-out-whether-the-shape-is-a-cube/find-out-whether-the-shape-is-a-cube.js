function isCube(volume, side) {
  // Check for invalid inputs (non-positive volume or side)
  if (volume <= 0 || side <= 0) return false;

  // Check if the cube formed by the side has the same volume
  return side ** 3 === volume;
}

// Explanation:
// 1. If either the volume or the side is less than or equal to 0, it's invalid, so return false.
// 2. Calculate the cube of the given side (side^3) and compare it to the volume.
// 3. If they're equal, it means the cuboid is a cube; otherwise, it's not.
