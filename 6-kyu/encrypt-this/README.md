# [Encrypt this!](https://www.codewars.com/kata/5848565e273af816fb000449)

### Difficulty: `6 kyu`

### Tags: `Fundamentals` `Regular Expressions` `Strings` `Arrays` `Ciphers` `Algorithms` `Cryptography` `Security`

## Description

Encrypt this!

You want to create secret messages which can be deciphered by the [Decipher this](https://www.codewars.com/kata/decipher-this)! kata. Here are the conditions:

1. Your message is a string containing space separated words.
2. You need to encrypt each word in the message using the following rules:
    - The first letter must be converted to its ASCII code.
    - The second letter must be switched with the last letter

3. Keepin' it simple: There are no special characters in the input.


### Examples:

```js
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
```