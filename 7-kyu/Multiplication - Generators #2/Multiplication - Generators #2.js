function* multiplicationGenerator(a) {
  let b = 1; // Initialize multiplier
  while (true) {
    yield `${a} x ${b} = ${a * b}`; // Generate multiplication string
    b++; // Increment multiplier
  }
}

const multiplyBy5 = multiplicationGenerator(5);
console.log(multiplyBy5.next().value); // "5 x 1 = 5"
console.log(multiplyBy5.next().value); // "5 x 2 = 10"
console.log(multiplyBy5.next().value); // "5 x 3 = 15"

/* 
### Explanation:
1. **Generator Function (`function* multiplicationGenerator(a)`)**  
   - Uses `function*`, making it a generator that can pause and resume execution.

2. **State Management (`let b = 1;`)**  
   - Initializes `b` to `1`, ensuring the multiplication starts correctly.

3. **Infinite Loop (`while (true)`)**  
   - Ensures the generator keeps producing multiplication values endlessly.

4. **Yielding Values (`yield`)**  
   - Returns a formatted multiplication string each time `.next()` is called.

5. **Incrementing `b` (`b++`)**  
   - Ensures `b` increases sequentially for each subsequent call.
*/
