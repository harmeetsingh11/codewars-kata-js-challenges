// Helper function to check if a number is prime
function isPrime(num) {
  if (num < 2) return false; // Numbers less than 2 are not prime
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) return false; // Divisible by any number means not prime
  }
  return true;
}

// Main function to find the first pair of primes with step g
function step(g, m, n) {
  for (let i = m; i <= n - g; i++) {
    // Check if both numbers in the step are prime
    if (isPrime(i) && isPrime(i + g)) {
      return [i, i + g]; // Return the first pair found
    }
  }
  return null; // Return null if no such pair is found
}

// Examples:
console.log(step(2, 2, 50)); // Output: [3, 5]
console.log(step(2, 5, 7)); // Output: [5, 7]
console.log(step(2, 5, 5)); // Output: null
console.log(step(4, 130, 200)); // Output: [163, 167]
console.log(step(6, 100, 110)); // Output: [101, 107]

/* 
Explanation:

isPrime(num) function:
This checks if a number is prime. It returns false for any number less than 2, and for numbers divisible by any integer up to the square root of the number, as these numbers aren't prime. Otherwise, it returns true.

step(g, m, n) function:
This function searches for the first pair of prime numbers that have a gap of g between them, within the range from m to n.
It iterates from m to n-g because we're checking pairs (i, i+g) and want to make sure i + g is within the range n.
For each iteration, it checks if both i and i + g are prime using the isPrime() function. If both are prime, it returns the pair [i, i + g].
If no such pair is found after iterating through the range, the function returns null.

Examples:
step(2, 2, 50) returns [3, 5], the first prime pair with a gap of 2 between 2 and 50.
step(2, 5, 7) returns [5, 7], the first prime pair with a gap of 2 between 5 and 7.
step(2, 5, 5) returns null since there are no prime pairs with a gap of 2 starting from 5.
step(4, 130, 200) returns [163, 167], the first pair with a gap of 4 between 130 and 200.
step(6, 100, 110) returns [101, 107], the first prime pair with a gap of 6 between 100 and 110.
*/
