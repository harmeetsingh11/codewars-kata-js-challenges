//  Returns a list of all neighboring points in the Cartesian coordinate system
//  for a given point (x, y). The neighbors are the 8 points adjacent to (x, y)
//  in the grid where the grid step = 1.

//  @param {number} x - The x-coordinate of the point.
//  @param {number} y - The y-coordinate of the point.
//  @returns {Array} - An array of tuples representing the neighboring points.

function getNeighbors(x, y) {
  // Define the relative positions of the 8 neighbors
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  // Map each relative position to an absolute coordinate based on (x, y)
  return directions.map(([dx, dy]) => [x + dx, y + dy]);
}

console.log(getNeighbors(2, 2)); // [[1, 1], [1, 2], [1, 3], [2, 1], [2, 3], [3, 1], [3, 2], [3, 3]]
console.log(getNeighbors(5, 7)); // [[4, 6], [4, 7], [4, 8], [5, 6], [5, 8], [6, 6], [6, 7], [6, 8]]

/*  
Explanation:

Define Neighboring Directions: The directions array holds the relative coordinates of the 8 neighboring points around a given point (x, y).
[-1, -1] represents the top-left neighbor, [-1, 0] is directly above, and so on.

Map to Absolute Coordinates: For each direction, we calculate the absolute coordinates of the neighbor by adding the relative offset (dx, dy) to (x, y).

Efficient and Readable: Using map ensures the function is concise and processes the directions array in a single iteration.
This implementation runs in O(1) time because the number of directions is constant (8). It is memory-efficient and straightforward to understand.
*/
