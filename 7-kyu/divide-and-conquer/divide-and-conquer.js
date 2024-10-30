function divCon(arr) {
  // Use reduce to accumulate the result
  return arr.reduce((total, num) => {
    // Check if the element is a string; if so, subtract its value, otherwise add it
    return total + (typeof num === 'string' ? -Number(num) : num);
  }, 0); // Start the accumulator at 0
}
