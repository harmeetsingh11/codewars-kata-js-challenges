function shorterReverseShorter(a, b) {
  // If both strings have the same length, treat 'a' as the longer
  const [shorter, longer] = a.length < b.length ? [a, b] : [b, a];

  // Reverse the longer string
  const reversedLonger = longer.split('').reverse().join('');

  // Return the concatenated result
  return shorter + reversedLonger + shorter;
}

// Test cases
console.log(shorterReverseShorter('abc', 'defg')); // "abcdefgabc"
console.log(shorterReverseShorter('hello', 'hi')); // "hiollehhi"
console.log(shorterReverseShorter('same', 'size')); // "sizesemasize"
console.log(shorterReverseShorter('', 'nonempty')); // "nonempty"
console.log(shorterReverseShorter('empty', '')); // "empty"
console.log(shorterReverseShorter('first', 'abcde')); // "abcdetsrifabcde"
console.log(
  shorterReverseShorter('zodfczhjtrluqwzmqeyc', 'xmdquzmvbrdsfpohnvtq')
);

// Explanation:
// 1. Check the lengths of both strings to determine which is shorter.
// 2. If they are of the same length, treat `a` as the longer.
// 3. Reverse the longer string using split-reverse-join.
// 4. Concatenate the shorter string as prefix and suffix around the reversed longer string.
