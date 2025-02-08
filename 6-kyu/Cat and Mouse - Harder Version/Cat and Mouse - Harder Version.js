function catMouse(x, j) {
  // Find the index positions of the cat, dog, and mouse
  var dLoc = x.indexOf('D');
  var cLoc = x.indexOf('C');
  var mLoc = x.indexOf('m');

  // Check if all three characters exist in the string
  if (dLoc == -1 || cLoc == -1 || mLoc == -1) return 'boring without all three';

  // Check if the cat can jump far enough to reach the mouse
  if (Math.abs(cLoc - mLoc) <= j) {
    // Check if the dog is in between the cat and the mouse and within jump range
    if (dLoc > cLoc && dLoc < mLoc && cLoc + j >= dLoc) {
      return 'Protected!';
    } else if (dLoc > mLoc && dLoc < cLoc && cLoc - j <= dLoc) {
      return 'Protected!';
    }

    // If no dog is blocking, the cat catches the mouse
    return 'Caught!';
  }

  // If the cat cannot reach the mouse within jump distance
  return 'Escaped!';
}

/* 
Explanation of the Approach:

This function determines whether a cat ('C') can catch a mouse ('m') while considering a dog ('D') as an obstacle. 

The function follows these steps:

1. **Identify Positions**  
   - It finds the index positions of 'C' (cat), 'm' (mouse), and 'D' (dog) in the string.

2. **Check if all characters are present**  
   - If any of the three characters ('C', 'D', or 'm') is missing, return `"boring without all three"`.

3. **Check if the cat can reach the mouse**  
   - If the absolute distance between 'C' and 'm' is **less than or equal to** the jump limit `j`, proceed to the next step. Otherwise, return `"Escaped!"`.

4. **Check if the dog is in the way**  
   - If the dog is positioned **between** the cat and the mouse **AND** is within the cat's jump range, return `"Protected!"`.
   - Two cases are checked:
     - The cat is **to the left** of the dog and the mouse is **to the right**, and the dog is **within jump range**.
     - The cat is **to the right** of the dog and the mouse is **to the left**, and the dog is **within jump range**.

5. **Final Outcome**  
   - If the dog **is not** blocking the path, return `"Caught!"`.


### Why is this solution efficient?
- **Single pass checks**: The function only scans the string **once** to get positions of 'C', 'm', and 'D'.
- **Direct index comparisons**: Instead of slicing the string, it checks relative positions efficiently using conditionals.
- **Optimal checks**: The conditions are structured to **eliminate unnecessary checks early** (e.g., if the cat can’t jump far enough, we don’t check for obstacles).
*/
