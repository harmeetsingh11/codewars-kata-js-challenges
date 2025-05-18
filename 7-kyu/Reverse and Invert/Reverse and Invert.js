function reverseInvert(array) {
  return array
    .filter(Number.isInteger) // Keep integers only
    .map((n) => {
      // Reverse digits of absolute value
      const reversed = parseInt(
        String(Math.abs(n)).split('').reverse().join('')
      );
      // If reversed is zero, return -0 explicitly
      if (reversed === 0) return -0;
      // If original positive, invert sign (negative), else keep positive reversed number
      return n > 0 ? -reversed : reversed;
    });
}
/* * **filter** removes non-integers.
 * **map** reverses digits and flips sign accordingly.
 * Handles zero sign edge case. */

/*
## Thought Process & Intuition

1. **Filter for Integers Only:**
   The input array can contain many types (strings, floats, etc.). We only want to work with integers, so the first step is to filter out everything else using `Number.isInteger`.

2. **Reverse the Digits of Each Integer:**
   To reverse an integer, first convert it to a string, split into characters, reverse the array, then join back into a string. Finally, convert it back to a number with `parseInt`.

3. **Ignore the Original Sign When Reversing:**
   We take the absolute value before reversing because the minus sign `-` isn’t part of the digits to reverse.

4. **Invert the Sign According to the Original Number:**

   * If the original number was positive, **invert** it to negative after reversal.
   * If the original number was negative, **keep** the reversed number positive (which means the negative sign is effectively “inverted” again by leaving the reversed digits positive).

5. **Handle Zero Special Case:**
   JavaScript has `0` and `-0`, which are almost the same but can differ in tests. If the reversed number is `0`, return `-0` explicitly to satisfy strict test cases.

*/
