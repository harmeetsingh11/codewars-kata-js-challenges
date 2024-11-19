function squareArea(A) {
  // The length of the arc is given: A = r * θ (where θ is in radians)
  // θ for a quarter-circle is π/2, so r = A / (π/2)
  const radius = (2 * A) / Math.PI;

  // The side of the square is equal to the radius
  // Area of the square = side^2
  const area = radius ** 2;

  // Return the area rounded to two decimal places
  return +area.toFixed(2);
}

/* 
Explanation:

Understanding the Arc Length Formula:
The arc length A is calculated as r×θ, where r is the radius and θ is the angle in radians.
For a quarter-circle, 𝜃=𝜋/2.
Rearranging the formula: r= A/θ = 2A/π.

Square Area Calculation:
The radius of the circle corresponds to the side length of the square.
The area of the square is side^2=r^2.

Rounding:
The toFixed(2) method is used to round the result to two decimal places.
The unary + operator ensures the result is returned as a number, not a string.
*/
