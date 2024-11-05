function isPowerOfTwo(n) {
  // A power of two has only one '1' bit in binary representation.
  // We check if 'n' is greater than 0 and 'n & (n - 1)' equals 0.
  return n > 0 && (n & (n - 1)) === 0;
}

/* 
Explanation:

Binary Trick:
A number that is a power of two has only a single 1 bit in its binary representation. For example:
1 (2^0) = 0001
2 (2^1) = 0010
4 (2^2) = 0100
8 (2^3) = 1000

Condition n > 0:
This ensures that n is positive, as 0 is not a power of two.

Condition (n & (n - 1)) === 0:
When n is a power of two, n - 1 flips all bits after the only 1 bit in n to 1. For example:
8 in binary: 1000
7 (8 - 1) in binary: 0111
Performing a bitwise AND operation between n and n - 1 results in 0 only if n is a power of two, since there are no common 1 bits.

Return Value:
If both conditions are met, it returns true, indicating n is a power of two. Otherwise, it returns false.
This solution is very efficient, with constant time complexity 

O(1), as it uses bitwise operations.
*/
