# [Linked Lists - Remove Duplicates](https://www.codewars.com/kata/55d9f257d60c5fd98d00001b)

### Difficulty: `6 kyu`

### Tags: `Fundamentals` `Linked Lists` `Data Structures`

## Description

Write a RemoveDuplicates() function which takes a list sorted in increasing order and deletes any duplicate nodes from the list. Ideally, the list should only be traversed once. The head of the resulting list should be returned.

```js
var list = 1 -> 2 -> 3 -> 3 -> 4 -> 4 -> 5 -> null
removeDuplicates(list) === 1 -> 2 -> 3 -> 4 -> 5 -> null
```

If the passed in list is null/None/nil, simply return null.

Note: Your solution is expected to work on long lists. Recursive solutions may fail due to stack size limitations.

The push() and buildOneTwoThree() functions need not be redefined.