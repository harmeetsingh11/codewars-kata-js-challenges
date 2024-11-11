function overTheRoad(address, n) {
  // Calculate the house number on the opposite side
  return 2 * n + 1 - address;
}
/*
Explanation:

Observation of Patterns:
The sum of each pair of opposite houses is constant for a given n. For example, if n = 3:
1 + 6 = 7, 3 + 4 = 7, 5 + 2 = 7
This constant sum is always (2 * n + 1).

Formula Derivation:
To find the opposite house number for a given address, we can use the formula:
opposite=(2×n+1)−address
This avoids creating large arrays or loops, making it highly efficient even for large values of n.

Efficiency:
This solution runs in constant time, O(1), since it only involves basic arithmetic. It's optimal for very large values of n and address without requiring excessive memory or time.
*/
