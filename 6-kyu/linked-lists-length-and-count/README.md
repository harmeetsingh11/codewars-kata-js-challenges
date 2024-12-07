# [Linked Lists - Length & Count](https://www.codewars.com/kata/55beec7dd347078289000021)

### Difficulty: `6 kyu`

### Tags: `Linked Lists` `Data Structures` `Fundamentals`

## Description

Linked Lists - Length & Count

Implement `length` to count the number of nodes in a linked list.

```js
length(null) => 0
length(1 -> 2 -> 3 -> null) => 3
```

Implement Count() to count the occurrences of an integer in a linked list.

```js
count(null, 1) => 0
count(1 -> 2 -> 3 -> null, 1) => 1
count(1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 3 -> 3 -> null, 2) => 4
```

I've decided to bundle these two functions within the same Kata since they are both very similar.

The `push()/Push()` and `buildOneTwoThree()/BuildOneTwoThree()` functions do not need to be redefined.