function numPrimorial(n) {
  // Helper function to check if a number is prime
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  let count = 0; // Count of primes found
  let num = 2; // Starting number to check for primes
  let result = 1; // Primorial product starts at 1

  // Loop until we find 'n' prime numbers
  while (count < n) {
    if (isPrime(num)) {
      result *= num; // Multiply the prime number
      count++; // Increment count of primes found
    }
    num++; // Check the next number
  }

  return result; // Return the computed primorial
}

console.log(numPrimorial(3)); // Output: 30
console.log(numPrimorial(5)); // Output: 2310
console.log(numPrimorial(6)); // Output: 30030

/* 
Explanation:

Prime Check Function (isPrime):
A helper function that checks if a number is prime by dividing it with all integers up to its square root.
If a divisor is found, the number is not prime.

Counting Primes:
Use a while loop to find the first N prime numbers.
For each prime number found, multiply it into the result variable and increment the count.

Efficiency:
The isPrime function uses the square root for optimization, reducing the number of iterations.
The loop exits as soon as N primes are found.

Output:
Returns the product of the first N prime numbers as the primorial.
*/
