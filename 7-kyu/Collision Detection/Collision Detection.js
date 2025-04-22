function collision(x1, y1, radius1, x2, y2, radius2) {
  // Calculate squared distance between circle centers
  const dx = x2 - x1;
  const dy = y2 - y1;
  const distanceSquared = dx * dx + dy * dy;

  // Calculate squared sum of radii
  const radiiSum = radius1 + radius2;
  const radiiSumSquared = radiiSum * radiiSum;

  // Circles collide if the distance between centers is less than or equal to sum of radii
  return distanceSquared <= radiiSumSquared;
}

/*
### Explanation
- Instead of using `Math.sqrt`, we compare **squared distances** to avoid the extra cost of computing a square root — this is both **faster** and **numerically more stable**.
- Two circles **collide** if the **distance between their centers** is **less than or equal** to the **sum of their radii**.
*/
