function type(val) {
  // Handle null explicitly because typeof null === 'object'
  if (val === null) return 'null';

  // Use Object.prototype.toString to get true type in form [object Type]
  // Then extract 'Type' using regex and convert to lowercase
  return Object.prototype.toString.call(val).slice(8, -1).toLowerCase();
}

console.log(type([])); // 'array'
console.log(type({})); // 'object'
console.log(type('')); // 'string'
console.log(type(NaN)); // 'number'
console.log(type(null)); // 'null'
console.log(type(() => {})); // 'function'
console.log(type(undefined)); // 'undefined'

/*
### Explanation:
- `Object.prototype.toString.call(val)` returns a string like `[object Array]`, `[object Object]`, `[object String]`, etc.
- `.slice(8, -1)` extracts the word inside the brackets (e.g., `'Array'`)
- `.toLowerCase()` makes it lowercase for consistency.
- We explicitly handle `null` since `typeof null === 'object'`, which is misleading.
*/
