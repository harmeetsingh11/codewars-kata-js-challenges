function iterPi(epsilon) {
  let pi = 0; // Directly track approximation of PI
  let denominator = 1; // Series denominator
  let sign = 1; // Alternating sign
  let iterations = 0; // Iteration count

  // Loop until the absolute difference between pi and Math.PI is within epsilon
  while (Math.abs(pi - Math.PI) >= epsilon) {
    pi += sign * (4 / denominator); // Update the approximation directly
    denominator += 2; // Next odd denominator
    sign *= -1; // Alternate the sign
    iterations++; // Count the iteration
  }

  // Return the iterations and PI approximation to 10 decimal places
  return [iterations, +pi.toFixed(10)];
}

console.log(iterPi(0.001)); // Output: [1000, 3.1405926538]
// For an input epsilon = 0.001, the loop will run until the approximation of π is within 0.001 of Math.PI. After each iteration, the approximation will become closer to the true value of π, and the number of iterations will be tracked. Once the condition is met, it will return the number of iterations and the approximation with 10 decimal places.

/* 
Explanation:

Initialize Variables:
pi holds the cumulative sum of the series approximation of π.
denominator starts at 1, and represents the odd numbers in the denominator for the Leibniz series (1, 3, 5, 7, etc.).
sign alternates between 1 and -1 to alternate between addition and subtraction in the series.
iterations tracks how many terms (iterations) have been added to the series.

Loop:
The while loop runs until the absolute difference between the calculated value of π (pi) and Math.PI is smaller than the given precision epsilon.
In each iteration, the formula sign * (4 / denominator) is added to pi. This represents the current term in the Leibniz series.

Update Terms:
Add the current term (calculated as sign * (4 / denominator)) to pi.
The denominator is incremented by 2 in each iteration to get the next odd number (3, 5, 7, etc.).
The sign is multiplied by -1 to alternate between adding and subtracting terms.

Precision and Output:
Once the approximation is within the desired precision (i.e., when the difference between pi and Math.PI is less than epsilon), the loop stops.
The result is rounded to 10 decimal places using toFixed(10) to ensure the output is precise to 10 decimal places.
The function then returns an array with the total number of iterations and the approximation of π.

*/
