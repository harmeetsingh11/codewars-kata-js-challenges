function nextPal(val) {
  // Increment val to ensure we find the next palindrome number, not the same one
  val++;

  // Loop until we find a palindrome number
  while (true) {
    // Convert val to string to easily check if it's a palindrome
    const strVal = val.toString();

    // Check if the string is the same when reversed
    if (strVal === strVal.split('').reverse().join('')) {
      return val; // If it's a palindrome, return it
    }

    // Otherwise, increment the value and check the next number
    val++;
  }
}

/*
Explanation:

1. **Increment the input**: We increment `val` first to ensure we find the next palindrome number greater than `val`, not `val` itself.
2. **Loop until a palindrome is found**: We loop indefinitely and check if the current number is a palindrome.
3. **Palindrome check**: We convert the number to a string and compare it to its reversed version using `split('')`, `reverse()`, and `join('')`. If they match, it means the number is a palindrome.
4. **Return the palindrome**: Once a palindrome is found, we return the number. If not, we keep incrementing `val` and check the next number.

### Time complexity:
- This approach is efficient because the loop only runs until we find the next palindrome, which typically happens relatively soon for most numbers. The time complexity is proportional to the number of digits in the number (O(d)), where `d` is the number of digits in the input `val`.
*/
