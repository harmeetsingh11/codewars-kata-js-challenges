function gap(g, m, n) {
  // Helper function to check if a number is prime
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  let prevPrime = null; // Variable to store the previous prime number

  // Loop from m to n (inclusive)
  for (let i = m; i <= n; i++) {
    if (isPrime(i)) {
      if (prevPrime && i - prevPrime === g) {
        // If gap is found, return the prime pair
        return [prevPrime, i];
      }
      prevPrime = i; // Update the previous prime to the current one
    }
  }

  // If no pair with the specified gap is found, return null
  return null;
}

// Explanation:

// isPrime Helper Function:
// This function checks if a number is prime by iterating from 2 to the square root of the number. If the number is divisible by any value in this range, it is not prime.

// Loop Through the Range:
// The main loop iterates through numbers from m to n inclusive.
// For each number, if it's prime (isPrime(i)), we check if the gap between the current prime and the previous prime is equal to g.
// If a prime pair with the exact gap is found, it returns the pair [prevPrime, i].

// Edge Case:
// If no such prime pair is found after completing the loop, the function returns null to indicate no prime pair with the specified gap was found.

// This solution is efficient due to the prime-checking method, and it's concise with minimal overhead in both space and time complexity.
