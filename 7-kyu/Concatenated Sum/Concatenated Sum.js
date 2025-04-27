function checkConcatenatedSum(num, n) {
  // Store the sign (+1 or -1) and work with absolute value
  const sign = Math.sign(num);
  const strNum = Math.abs(num).toString();

  // Calculate the sum by repeating each digit 'n' times and adding them up
  const sum = [...strNum].reduce((acc, digit) => {
    const repeated = Number(digit.repeat(n)); // Repeat the digit n times and convert to number
    return acc + repeated;
  }, 0);

  // Compare original number and calculated sum considering the sign
  return sum * sign === num;
}

console.log(checkConcatenatedSum(2997, 3)); // true
console.log(checkConcatenatedSum(-2997, 3)); // true
console.log(checkConcatenatedSum(198, 2)); // true
console.log(checkConcatenatedSum(123, 2)); // false

/*
**Quick Explanation**:

- We **preserve the sign** of the input (`+` or `-`) because the sum must match it.
- Work with the **absolute value** to avoid issues during string manipulation.
- **Repeat** each digit `n` times (using `.repeat(n)`) and **convert** it back to a number.
- **Sum** all these numbers using `.reduce`.
- Finally, **restore the sign** and **compare** to the original input.
*/
