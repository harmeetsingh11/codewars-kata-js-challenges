# [Consecutive Vowels in a String](https://www.codewars.com/kata/62a933d6d6deb7001093de16)

### Difficulty: `7 kyu`

### Tags: `Fundamentals` `Strings`

## Description

You are given a random string of lower-case letters. Your job is to find out how many ordered and consecutive vowels there are in the given string beginning from `'a'`. Keep in mind that the consecutive vowel to `'u'` is `'a'` and the cycle continues.

Return an integer with the length of the consecutive vowels found.

This is better explained with a couple of examples:

1. You are given the string `"agrtertyfikfmroyrntbvsukldkfa"`. The logic is that you start from the `'a'` and make your way right. The next vowel is an `'e'` and it is the consecutive vowel, then `'i'` and so forth until you get to `'u'`. If you keep moving right you find `'a'` which happens to be the consecutive vowel. Return `6`.
2. This is a slightly trickier example: you are given the string `"erfaiekjudhyfimngukduo"`. As you move right you ignore all vowels until you get to the `'a'`, then ignore the rest until you get to the `'e'`, which is the consecutive vowel, and so forth until you get to the `'o'`. Return `4`.

### Note
For this kata, the vowels are `'a', 'e', 'i', 'o', 'u'`, in that order. `'y'` is not considered a vowel in this kata.

Good luck!