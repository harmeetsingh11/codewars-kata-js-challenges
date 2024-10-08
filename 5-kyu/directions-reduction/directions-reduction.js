function dirReduc(directions) {
  const opposite = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    EAST: 'WEST',
    WEST: 'EAST',
  };

  // Initialize a stack to process directions
  return directions.reduce((stack, dir) => {
    // If the last direction in the stack is the opposite of the current direction, remove it
    if (stack.length && stack[stack.length - 1] === opposite[dir]) {
      stack.pop();
    } else {
      // Otherwise, push the current direction to the stack
      stack.push(dir);
    }
    return stack;
  }, []);
}
