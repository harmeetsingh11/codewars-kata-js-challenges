function last(...args) {
  // If there are multiple arguments, return the last one
  if (args.length > 1) return args[args.length - 1];

  const singleArg = args[0];

  // If the single argument is an array or string, return its last element
  if (Array.isArray(singleArg) || typeof singleArg === 'string') {
    return singleArg[singleArg.length - 1];
  }

  // Otherwise, return the argument itself
  return singleArg;
}

// Examples
console.log(last(5)); // 5
console.log(last([1, 2, 3, 4])); // 4
console.log(last('xyz')); // "z"
console.log(last(1, 2, 3, 4)); // 4
console.log(last([1, 2], [3, 4])); // [3, 4]
console.log(
  last([
    [1, 2],
    [3, 4],
  ])
); // [3, 4]

/* 
Explanation:

Multiple Arguments: If there are multiple arguments, the last one is returned directly using args[args.length - 1].

Single Argument:
If the single argument is a string or an array (Array.isArray(singleArg) or typeof singleArg === 'string'), the last element is accessed using singleArg[singleArg.length - 1].
If it is neither, the argument itself is returned (e.g., numbers or other types).
*/
