function minimumNumber(numbers) {
  // Function to check if a number is prime
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  // Calculate the sum of given numbers
  let sum = numbers.reduce((acc, num) => acc + num, 0);

  // Find the nearest prime number greater than or equal to sum
  let add = 0;
  while (!isPrime(sum + add)) {
    add++;
  }

  return add;
}

// Test cases
console.log(minimumNumber([3, 1, 2])); // ➞ 1
console.log(minimumNumber([2, 12, 8, 4, 6])); // ➞ 5
console.log(minimumNumber([50, 39, 49, 6, 17, 28])); // ➞ 2

/* 
Explanation:

Check if a number is prime (isPrime function)
Returns false for numbers less than 2.
Uses trial division up to √num for efficiency.

Calculate the sum of the given numbers
Uses reduce() to get the total sum.

Find the nearest prime greater than or equal to the sum
Starts with add = 0 and increments until sum + add is prime.
*/
