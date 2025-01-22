function landPerimeter(arr) {
  let totalPerimeter = 0;

  // Iterate through each cell in the 2D grid
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      // Check if the current cell is land ('X')
      if (arr[row][col] === 'X') {
        // Start with 4 sides of the cell
        let perimeter = 4;

        // Check top neighbor
        if (row > 0 && arr[row - 1][col] === 'X') {
          perimeter -= 1; // Shared side with the top cell
        }

        // Check bottom neighbor
        if (row < arr.length - 1 && arr[row + 1][col] === 'X') {
          perimeter -= 1; // Shared side with the bottom cell
        }

        // Check left neighbor
        if (col > 0 && arr[row][col - 1] === 'X') {
          perimeter -= 1; // Shared side with the left cell
        }

        // Check right neighbor
        if (col < arr[row].length - 1 && arr[row][col + 1] === 'X') {
          perimeter -= 1; // Shared side with the right cell
        }

        // Add this cell's perimeter to the total
        totalPerimeter += perimeter;
      }
    }
  }

  return `Total land perimeter: ${totalPerimeter}`;
}

console.log(landPerimeter(['XOOXO', 'XOOXO', 'OOOXO', 'XXOXO', 'OXOOO'])); // Output: "Total land perimeter: 24"
console.log(landPerimeter(['XOOO', 'XOXO', 'XOXO', 'OOXX', 'OOOO'])); // Output: "Total land perimeter: 18"

/* 
Explanation:

Iterate Over the Grid: We loop through each cell in the grid using nested loops.

Check If Cell Is Land ('X'): For each land cell, start with a perimeter of 4 (each side contributes one unit).

Adjust for Shared Edges: For every adjacent land cell (top, bottom, left, or right), reduce the perimeter by 1, as the edge is shared and does not contribute to the external perimeter.

Sum Up: Add the adjusted perimeter of each land cell to the total.

Return Result: Return the total perimeter in the specified format.

Efficiency:
Time Complexity: 
O(m×n), where m is the number of rows and n is the number of columns. We examine each cell once.

Space Complexity: 
O(1), as we only use a few variables to track the perimeter.
*/
