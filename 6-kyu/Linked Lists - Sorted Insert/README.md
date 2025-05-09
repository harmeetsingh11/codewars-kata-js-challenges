# [Linked Lists - Sorted Insert](https://www.codewars.com/kata/55cc33e97259667a08000044)

### Difficulty: `6 kyu`

### Tags: `Fundamentals` `Linked Lists` `Data Structures`

## Description

Write a SortedInsert() function which inserts a node into the correct location of a pre-sorted linked list which is sorted in ascending order. SortedInsert takes the head of a linked list and data used to create a node as arguments. SortedInsert() should also return the head of the list.

```js
sortedInsert(1 -> 2 -> 3 -> null, 4) === 1 -> 2 -> 3 -> 4 -> null)
sortedInsert(1 -> 7 -> 8 -> null, 5) === 1 -> 5 -> 7 -> 8 -> null)
sortedInsert(3 -> 5 -> 9 -> null, 7) === 3 -> 5 -> 7 -> 9 -> null)
```

The push() and buildOneTwoThree() functions do not need to be redefined.