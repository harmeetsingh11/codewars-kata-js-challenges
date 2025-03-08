function tops(msg) {
  // Initialize result string and index variables
  let [res, i, j] = ['', 0, 0];

  // Loop through the string using calculated index positions
  while (msg[(j += i++ * 4 + 1)])
    // Prepend the character at index j to the result string
    res = msg[j] + res;

  return res; // Return the result string
}
