# [Fibonacci's FizzBuzz](https://www.codewars.com/kata/57bf599f102a39bb1e000ae5)

### Difficulty: `7 kyu`

### Tags: `Fundamentals` `Algorithms`

## Description

The goal of this kata is two-fold:

1. You must produce a fibonacci sequence in the form of an array, containing a number of items equal to the input provided.

2. You must replace all numbers in the sequence `divisible by 3` with `Fizz`, those `divisible by 5` with `Buzz`, and those `divisible by both 3 and 5` with `FizzBuzz`.

For the sake of this kata, you can assume all input will be a positive integer.

### Use Cases
Return output must be in the form of an array, with the numbers as integers and the replaced numbers (fizzbuzz) as strings.

### Examples
Input:

```js
fibsFizzBuzz(5)
```

Output:

```js
[ 1, 1, 2, 'Fizz', 'Buzz' ]
```

Input:

```js
fibsFizzBuzz(1)
```

Output:

```js
[1]
```

Input:

```js
fibsFizzBuzz(20)
```

Output:

```js
[1,1,2,"Fizz","Buzz",8,13,"Fizz",34,"Buzz",89,"Fizz",233,377,"Buzz","Fizz",1597,2584,4181,"FizzBuzz"]
```