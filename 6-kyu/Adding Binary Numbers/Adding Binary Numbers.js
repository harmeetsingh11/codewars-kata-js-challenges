function add(a, b) {
  let result = ''; // to store the final binary sum
  let carry = 0; // to hold carry during addition
  let i = a.length - 1;
  let j = b.length - 1;

  // loop from the end of both strings to the start
  while (i >= 0 || j >= 0 || carry) {
    // get bits from both strings or 0 if index is out of bounds
    const bitA = i >= 0 ? +a[i--] : 0;
    const bitB = j >= 0 ? +b[j--] : 0;

    const sum = bitA + bitB + carry; // sum of bits + carry
    result = (sum % 2) + result; // add binary digit to result
    carry = Math.floor(sum / 2); // update carry (0 or 1)
  }

  // remove any leading zeroes from result (if any)
  return result.replace(/^0+(?!$)/, '');
}

console.log(add('111', '10')); // '1001'
console.log(add('1101', '101')); // '10010'
console.log(add('1101', '10111')); // '100100'

/*
### 🧠 **Explanation**:

* **Bit by bit addition**: It mimics how you’d add binary numbers by hand — right to left.
* **`carry` is maintained**: Just like in decimal addition.
* **No conversions**: We avoid `parseInt` or `.toString(2)`, fully compliant with the task constraint.
* **Leading zero removal**: Ensures final string has no unnecessary zeroes.
*/
