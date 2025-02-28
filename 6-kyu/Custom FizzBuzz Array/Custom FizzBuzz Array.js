function fizzBuzzCustom(
  fizz = 'Fizz',
  buzz = 'Buzz',
  fizzNum = 3,
  buzzNum = 5
) {
  return Array.from({ length: 100 }, (_, i) => {
    let num = i + 1;
    let result =
      (num % fizzNum === 0 ? fizz : '') + (num % buzzNum === 0 ? buzz : '');
    return result || num;
  });
}

console.log(fizzBuzzCustom()[15]); // 16
console.log(fizzBuzzCustom()[44]); // "FizzBuzz"
console.log(fizzBuzzCustom('Hey', 'There')[25]); // 26
console.log(fizzBuzzCustom('Hey', 'There')[11]); // "Hey"
console.log(fizzBuzzCustom("What's ", 'up?', 3, 7)[80]); // "What's "

/*
### Explanation:
1. **Default Parameters:**  
   - The function takes up to 4 arguments with default values (`"Fizz"`, `"Buzz"`, `3`, and `5`).
   
2. **Generating the Sequence Efficiently:**  
   - `Array.from({ length: 100 }, (_, i) => { ... })` creates an array of size 100, mapping each index `i` to a transformed value.
   - `num = i + 1` adjusts `i` (0-based) to the 1-based sequence.

3. **FizzBuzz Logic (Concise and Efficient):**  
   - `(num % fizzNum === 0 ? fizz : '') + (num % buzzNum === 0 ? buzz : '')`  
     - Concatenates `fizz` if `num` is divisible by `fizzNum`.
     - Concatenates `buzz` if `num` is divisible by `buzzNum`.
     - If neither condition is met, `result || num` ensures the number is returned instead.

This implementation is efficient (`O(1)` per element, `O(100)` total) and concise, leveraging JavaScript's powerful `Array.from` and string concatenation for an optimal solution.
*/
