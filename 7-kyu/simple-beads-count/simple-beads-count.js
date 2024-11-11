function countRedBeads(n) {
  // If there are fewer than 2 blue beads, return 0 (no red beads possible)
  if (n < 2) return 0;

  // For n blue beads, there are (n - 1) gaps where red beads can be placed
  return (n - 1) * 2;
}
/* 
Explanation:

Base Condition:
If n (the number of blue beads) is less than 2, we return 0 because there aren't enough blue beads to place any red beads between them.

Calculate Red Beads:
If there are n blue beads, there will be n - 1 gaps between them.
Each gap can hold 2 red beads, so the total number of red beads is (n - 1) * 2.
*/
