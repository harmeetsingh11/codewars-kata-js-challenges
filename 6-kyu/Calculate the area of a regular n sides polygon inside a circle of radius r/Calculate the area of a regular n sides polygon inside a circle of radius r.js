function areaOfPolygonInsideCircle(circleRadius, numberOfSides) {
  // Step 1: Calculate the central angle of each triangle in radians
  const centralAngle = (2 * Math.PI) / numberOfSides;

  // Step 2: Calculate the area of the polygon using the formula:
  // Area = (1/2) * numberOfSides * (circleRadius^2) * sin(centralAngle)
  const area =
    (numberOfSides * Math.pow(circleRadius, 2) * Math.sin(centralAngle)) / 2;

  // Step 3: Round the result to 3 decimal places and return
  return +area.toFixed(3);
}

console.log(areaOfPolygonInsideCircle(3, 3)); // Output: 11.691
console.log(areaOfPolygonInsideCircle(5.8, 7)); // Output: 92.053
console.log(areaOfPolygonInsideCircle(4, 5)); // Output: 38.042

/* 
Explanation

Central Angle Calculation:
The polygon can be divided into numberOfSides triangles, each with a central angle of 
2𝜋/numberOfSides radians.

Polygon Area Formula:
The area of the entire polygon is the sum of the areas of these triangles.
For a single triangle, the area is (1/2).r^2⋅sin(central angle), where r is the circle's radius.
Multiply by the number of sides to get the total polygon area.

Rounding:
The result is rounded to three decimal places using toFixed(3) and converted back to a number using the unary +.

This implementation is both efficient and concise, with a time complexity of O(1) since the calculations involve basic arithmetic and trigonometric operations.
*/
