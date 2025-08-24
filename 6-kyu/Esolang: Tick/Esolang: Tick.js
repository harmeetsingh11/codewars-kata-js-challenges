/**
 * Tick Language Interpreter
 * @param {string} code - The Tick program as a string
 * @returns {string} - Output string from the program
 */
function tickInterpreter(code) {
  // Memory tape: dynamic object to handle infinite cells in both directions
  const memory = { 0: 0 };
  let pointer = 0; // data selector
  let output = [];

  for (let char of code) {
    switch (char) {
      case '>':
        pointer++;
        if (memory[pointer] === undefined) memory[pointer] = 0;
        break;

      case '<':
        pointer--;
        if (memory[pointer] === undefined) memory[pointer] = 0;
        break;

      case '+':
        memory[pointer] = (memory[pointer] + 1) % 256; // wrap 255→0
        break;

      case '*':
        output.push(String.fromCharCode(memory[pointer]));
        break;

      // Ignore non-command characters
    }
  }

  return output.join('');
}

// Example usage:
const helloWorld =
  '++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++**>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*>++++++++++++++++++++++++++++++++*>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*<<*>>>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*<<<<*>>>>>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*>+++++++++++++++++++++++++++++++++*';

console.log(tickInterpreter(helloWorld));
// Output: Hello World!

/*
We’ll build a **custom interpreter** for the esolang **Tick**.
Tick only has **4 commands** (`>`, `<`, `+`, `*`). Everything else is ignored.

### Rules Recap

* `>` → Move data pointer right (infinite in both directions).
* `<` → Move data pointer left.
* `+` → Increment current memory cell by 1 (wrap around: 255 → 0).
* `*` → Output the ASCII character represented by the current memory cell.
* Memory is **infinite in both directions**, each cell initialized to `0`.
  
### Explanation

1. **Memory Representation**

   * We use a **JavaScript object (`{}`)** instead of an array.
   * This avoids wasted space if the pointer moves far left/right (since arrays can’t be negative-indexed efficiently).

2. **Pointer Movement**

   * `>` increases the pointer.
   * `<` decreases the pointer.
   * New cells are auto-initialized to `0`.

3. **Cell Values**

   * Stored as `0–255`.
   * `+` increments and wraps back to `0` after `255`.

4. **Output**

   * `*` converts the current cell value into a character (`String.fromCharCode`).
   * Output is collected in an array and joined at the end (faster than string concatenation in loops).

---
*/
