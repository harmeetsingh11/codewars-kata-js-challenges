function numbers(...args) {
  // Check if every argument is a number type using Array.prototype.every()
  return args.every((num) => typeof num === 'number');
}

console.log(numbers(1, 4, 3, 2, 5)); // true
console.log(numbers(1, 'a', 3)); // false
console.log(numbers(1, 3, NaN)); // true

/*
### Explanation:
1. The function `numbers` uses the **rest parameter (`...args`)** to accept any number of arguments.
2. The method `.every(callback)` is used on the `args` array to check if **every element is of type `"number"`**.
3. **`typeof num === "number"`** returns `true` even for `NaN`, which is why `numbers(1, 3, NaN)` correctly returns `true`.
4. This solution is concise, efficient (`O(n)`, where `n` is the number of arguments), and uses modern JavaScript best practices.
*/
