function solve(a, b) {
  // If no asterisk in 'a', simply check for equality
  if (!a.includes('*')) return a === b;

  let [prefix, suffix] = a.split('*');

  // Check if 'b' starts with 'prefix' and ends with 'suffix'
  return (
    b.startsWith(prefix) &&
    b.endsWith(suffix) &&
    b.length >= prefix.length + suffix.length
  );
}

// Test cases
console.log(solve('code*s', 'codewars')); // true
console.log(solve('codewar*s', 'codewars')); // true
console.log(solve('codewars', 'codewars')); // true
console.log(solve('a', 'b')); // false
console.log(solve('*', 'codewars')); // true

/* 
### Explanation:
1. If `a` doesn't contain `*`, simply check if `a === b`.
2. Split `a` at `*` to get `prefix` (before `*`) and `suffix` (after `*`).
3. Check if `b` starts with `prefix`, ends with `suffix`, and is long enough to accommodate them.
4. If all conditions hold, return `true`; otherwise, return `false`.

This ensures an optimal O(n) runtime complexity.
*/
