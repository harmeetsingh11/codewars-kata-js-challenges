function circleArea(circle) {
  // Destructure the radius from the circle object
  const { radius } = circle;

  // Validate that radius is a number and non-negative
  if (typeof radius !== 'number' || radius < 0) {
    throw new Error('Invalid radius: must be a non-negative number.');
  }

  // Calculate the area using the formula π * r^2
  return Math.PI * Math.pow(radius, 2);
}

// Example
// Define a Point and a Circle
const center = new Point(0, 0);
const circle = new Circle(center, 5);

console.log(circleArea(circle)); // Output: 78.53981633974483

/* 
Explanation:

Destructure Radius:
Extract the radius property from the Circle object for clarity and convenience.

Validation:
Ensure the radius is a valid number and is non-negative. If invalid, an error is thrown to indicate the problem.

Area Calculation:
Use the formula π×r^2, where r is the radius of the circle. The value of π is accessed through Math.PI.

Example:
Demonstrates how to create a Point and Circle object and call the circleArea function to compute the area.
*/
