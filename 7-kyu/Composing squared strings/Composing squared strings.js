function compose(s1, s2) {
  // Split the input strings into arrays of lines
  let arr1 = s1.split('\n');
  let arr2 = s2.split('\n').reverse(); // Reverse s2 to match required order

  // Construct the result using map and join
  return arr1
    .map((line, i) => line.slice(0, i + 1) + arr2[i].slice(0, -i || undefined))
    .join('\n');
}

let s1 = 'abcd\nefgh\nijkl\nmnop';
let s2 = 'qrst\nuvwx\nyz12\n3456';
console.log(compose(s1, s2));

/* 
Explanation:

1. **Splitting Strings**: The input strings are split into arrays using `split('\n')`.
2. **Reversing `s2`**: The second string is reversed to align with the expected order.
3. **Constructing Output**:
   - `arr1[i].slice(0, i + 1)`: Takes the first `i + 1` characters from `s1`.
   - `arr2[i].slice(0, -i || undefined)`: Takes all but the last `i` characters from `s2` (using `-i || undefined` to handle `i=0` correctly).
   - Concatenates both substrings.
4. **Joining the Result**: The transformed lines are joined back with `'\n'`. 
*/
