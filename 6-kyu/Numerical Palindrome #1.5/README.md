# [Numerical Palindrome #1.5](https://www.codewars.com/kata/58e09234ca6895c7b300008c)

### Difficulty: `6 kyu`

### Tags: `Fundamentals` `Arrrays`

## Description

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

2332
110011
54322345

You'll be given 2 numbers as arguments: (`num,s`). Write a function which returns an array of `s` number of numerical palindromes that come after `num`. If `num` is a palindrome itself, it should be included in the count.

Return "Not valid" instead if any one of the inputs is not an integer or is less than 0.

For this kata, single digit numbers will NOT be considered numerical palindromes.

```js
palindrome(6,4) => [11,22,33,44]
palindrome(59,3) => [66,77,88]
palindrome(101,2) => [101,111]
palindrome("15651",5) => "Not valid" 
palindrome(1221,"8") => "Not valid" 
```