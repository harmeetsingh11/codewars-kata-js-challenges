# [Sum The Tree](https://www.codewars.com/kata/5800580f8f7ddaea13000025)

### Difficulty: `6 kyu`

### Tags: `Trees` `Recursion` `Binary Trees` `Binary Search Trees` `Data Structures` `Fundamentals`

## Description

### Task

Given a node object representing a binary tree:

```
Node:
  value: <int>,
  left: <Node> or null,
  right: <Node> or null
```

write a function that returns the sum of all values, including the root. Absence of a node will be indicated with a `null` value.

Examples:

```
10
| \
1  2
=> 13

1
| \
0  0
    \
     2
=> 3
```