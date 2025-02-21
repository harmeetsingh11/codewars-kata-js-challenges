# [Mispelled word](https://www.codewars.com/kata/5892595f190ca40ad0000095)

### Difficulty: `7 kyu`

### Tags: `Fundamentals` `Arrays` `Algorithms`

## Description

Create a function mispelled(word1, word2):

```js
mispelled('versed', 'xersed'); // returns true
mispelled('versed', 'applb'); // returns false
mispelled('versed', 'v5rsed'); // returns true
mispelled('1versed', 'versed'); // returns true
mispelled('versed', 'versed'); // returns true
```

It checks if the word2 differs from word1 by at most one character.

This can include an extra char at the end or the beginning of either of words.

In the tests that expect `true`, the mispelled word will always differ mostly by one character. If the two words are the same, return `True`.