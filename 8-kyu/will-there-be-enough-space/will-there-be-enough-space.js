function enough(cap, on, wait) {
  // Calculate the number of passengers that can fit
  const availableSpace = cap - on;

  // If enough space, return 0; otherwise, return the number of excess passengers
  return Math.max(wait - availableSpace, 0);
}

/* 
Explanation:

Calculate available space: Subtract the number of passengers already on the bus (on) from the bus's capacity (cap). This gives the number of additional passengers that can fit.
const availableSpace = cap - on;

Determine if all passengers can fit: Subtract the availableSpace from the number of waiting passengers (wait). If the result is negative or zero, it means everyone can fit, so return 0.

Ensure no negative values are returned: Use Math.max to ensure the result is 0 (if all can fit) or the positive number of passengers who can't fit.
return Math.max(wait - availableSpace, 0);
*/
