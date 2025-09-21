# [Binary Tree Search (not BST)](https://www.codewars.com/kata/5acc79efc6fde7838a0000a0)

### Difficulty: `7 kyu`

### Tags: `Binary Trees` `Fundamentals`

## Description

Given a number and a binary tree ( not a Binary Search Tree! ):

- return `True/true` if the given number is in the tree
- return `False/false` if it isn't

Each node in the binary tree is either of this `Node` class or `null`:

```js
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
```