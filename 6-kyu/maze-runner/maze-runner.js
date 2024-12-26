function mazeRunner(maze, directions) {
  // Find the starting point (2) in the maze
  let startRow, startCol;
  for (let row = 0; row < maze.length; row++) {
    for (let col = 0; col < maze[row].length; col++) {
      if (maze[row][col] === 2) {
        startRow = row;
        startCol = col;
      }
    }
  }

  // Current position
  let [x, y] = [startRow, startCol];

  // Directions mapping
  const moves = {
    N: [-1, 0], // North -> decrease row
    S: [1, 0], // South -> increase row
    E: [0, 1], // East -> increase column
    W: [0, -1], // West -> decrease column
  };

  for (let dir of directions) {
    // Update position based on the direction
    x += moves[dir][0];
    y += moves[dir][1];

    // Check if out of bounds
    if (x < 0 || y < 0 || x >= maze.length || y >= maze.length) {
      return 'Dead'; // Stepped outside the maze
    }

    // Check cell value
    const cell = maze[x][y];
    if (cell === 1) return 'Dead'; // Hit a wall
    if (cell === 3) return 'Finish'; // Reached the end
  }

  return 'Lost'; // Used all moves without finishing or dying
}

// Test case
const maze = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 3],
  [1, 0, 1, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 2, 1, 0, 1, 0, 1],
];
const directions = ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'E', 'E', 'E'];
console.log(mazeRunner(maze, directions)); // Output: "Finish"

/* 
Explanation:

Find the Start Point:
Locate the cell with value 2 to determine the starting position in the maze.

Direction Mapping:
Use a dictionary (moves) to map each direction (N, S, E, W) to its corresponding change in row and column indices.

Move Through Directions:
Iterate through the directions array. For each direction, update the current position (x, y) based on the mapping.

Check Conditions:
If the position goes out of bounds, return "Dead".
If the position lands on a wall (1), return "Dead".
If the position lands on the finish point (3), return "Finish".

Final Condition:
If all moves are used up without dying or reaching the finish, return "Lost".
*/
