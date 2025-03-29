# [Negation of a Value](https://www.codewars.com/kata/58f6f87a55d759439b000073)

### Difficulty: `7 kyu`

### Tags: `Logic` `Algorithms` `Fundamentals`

## Description

In programming you know the use of the logical negation operator (!), it reverses the meaning of a condition.

```js
!false = true
!!false = false
```

Your task is to complete the function 'negationValue()' that takes a string of negations with a value and returns what the value would be if those negations were applied to it.

```js
negationValue("!", false); //=> true
negationValue("!!!!!", true); //=> false
negationValue("!!", []); //=> true
```
Do not use the `eval()` function or the `Function()` constructor in JavaScript.

Note: Always return a boolean value, even if there're no negations.