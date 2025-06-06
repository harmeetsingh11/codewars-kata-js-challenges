function magicSumOf3s(arr) {
  return arr.reduce((sum, num) => {
    // Check if number is odd and contains the digit '3'
    if (num % 2 !== 0 && String(num).includes('3')) {
      sum += num;
    }
    return sum;
  }, 0);
}

console.log(magicSumOf3s([3, 12, 5, 8, 30, 13])); // Output: 16
console.log(magicSumOf3s([12, 4, 60])); // Output: 0

/*
### Explanation:

- **`.reduce()`** is used to accumulate the sum.
- **`num % 2 !== 0`** ensures the number is odd.
- **`String(num).includes('3')`** checks if the digit `3` is present in the number.
- Starts with a sum of `0` and adds only those numbers which satisfy both conditions.
*/
