function productFib(prod) {
  // Initialize the first two Fibonacci numbers
  let prev = 0;
  let curr = 1;

  // Loop until the product of two consecutive Fibonacci numbers is greater than or equal to 'prod'
  while (prev * curr < prod) {
    // Calculate the next Fibonacci number
    let next = prev + curr;

    // Update the previous and current Fibonacci numbers
    prev = curr; // Move to the next Fibonacci number
    curr = next; // The new current Fibonacci number becomes the next one
  }

  // Return an array containing the two Fibonacci numbers and a boolean indicating whether their product equals 'prod'
  return [prev, curr, prev * curr === prod]; // Check if the product matches the input
}
