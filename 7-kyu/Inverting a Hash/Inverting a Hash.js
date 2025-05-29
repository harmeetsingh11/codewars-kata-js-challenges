function invert(obj) {
  // Convert object to array of [key, value] pairs, reverse each pair, and build a new object
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key])
  );
}

// Explanation (via comments):

function invert(obj) {
  // Step 1: Object.entries(obj) converts the object to an array of [key, value] pairs.
  //         e.g. { a: '1', b: '2' } => [['a', '1'], ['b', '2']]

  // Step 2: .map(([key, value]) => [value, key]) swaps each key-value pair to value-key.
  //         => [['1', 'a'], ['2', 'b']]

  // Step 3: Object.fromEntries(...) turns the array of [value, key] pairs back into an object.
  //         => { '1': 'a', '2': 'b' }

  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key])
  );
}

console.log(invert({ a: '1', b: '2', c: '3' }));
// Output: { '1': 'a', '2': 'b', '3': 'c' }

console.log(invert({ foo: 'bar', hello: 'world' }));
// Output: { bar: 'foo', world: 'hello' }
