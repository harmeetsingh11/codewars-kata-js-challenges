H; // Helper function to check if a number is prime
function isPrime(num) {
  if (num < 2) return false; // Numbers less than 2 are not prime
  for (let i = 2; i * i <= num; i++) {
    // Loop up to square root of num for efficiency
    if (num % i === 0) return false; // Not a prime if divisible by any number
  }
  return true; // Return true if prime
}

// Main function to check if the given number is a twin prime
function is_twin_prime(n) {
  if (!isPrime(n)) return false; // Return false if n is not prime
  // Check if n has a prime twin either 2 less or 2 more
  return isPrime(n - 2) || isPrime(n + 2);
}

// Test cases
console.log(is_twin_prime(5)); // true
console.log(is_twin_prime(7)); // true
console.log(is_twin_prime(9)); // false
console.log(is_twin_prime(953)); // false

/*
### Explanation:

1. **isPrime function**: 
   - This function checks if a number is prime by iterating from 2 up to the square root of the number.
   - If any number divides evenly into `num`, it's not prime.
   - If no divisors are found, the number is prime.

2. **is_twin_prime function**:
   - First, we check if `n` is prime. If it's not, we return `false` immediately.
   - Then, we check if `n-2` or `n+2` are prime. If either is prime, we return `true` because `n` has at least one prime twin.
   - If neither is prime, we return `false`.

### Time Complexity:
- Checking if a number is prime takes \( O(\sqrt{n}) \), so the overall complexity for `is_twin_prime` is \( O(\sqrt{n}) \).
*/
