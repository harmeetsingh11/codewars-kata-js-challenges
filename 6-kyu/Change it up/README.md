# [Change it up](https://www.codewars.com/kata/58039f8efca342e4f0000023)

### Difficulty: `6 kyu`

### Tags: `Fundamentals` `Strings`

## Description

Create a function that takes a string as a parameter and does the following, in this order:

1. Replaces every letter with the letter following it in the alphabet (see note below)
2. Makes any vowels capital
3. Makes any consonants lower case

### Note:
- the alphabet should wrap around, so Z becomes A
- in this kata, y isn't considered as a vowel.

So, for example the string `"Cat30"` would return `"dbU30"` (`Cat30 --> Dbu30 --> dbU30`)