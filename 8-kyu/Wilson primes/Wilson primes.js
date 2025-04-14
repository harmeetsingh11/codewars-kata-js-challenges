function isWilsonPrime(p) {
  // Only known Wilson primes as of now are 5, 13, and 563.
  // Wilson's theorem makes it computationally impractical to verify for large numbers.
  // Instead of computing factorial, we just check against known values.
  return p === 5 || p === 13 || p === 563;
}

/*
### Explanation:
- A **Wilson prime** satisfies:  
  \[(P - 1)! + 1 \equiv 0 \ (\text{mod} \ P^2)\]
- Only **three** Wilson primes are known: `5`, `13`, and `563`.
- Computing `(P - 1)!` for large `P` is extremely **inefficient** and **unnecessary**.
- So, the most efficient way is to **hardcode** these values — as they are the **only known solutions**.
*/
