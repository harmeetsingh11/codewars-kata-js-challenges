# [Fun with lists: map](https://www.codewars.com/kata/58259d9062cfb45e1a00006b)

### Difficulty: `6 kyu`

### Tags: `Lists` `Functional Programming` `Fundamentals`

## Description

IImplement the method map, which accepts a linked list (head) and a mapping function, and returns a new linked list (head) where every element is the result of applying the given mapping method to each element of the original list.

For example: Given the list: `1 -> 2 -> 3`, and the mapping function `x => x * 2`, map should return `2 -> 4 -> 6`

The linked list is defined as follows:

```js
function Node(data, next = null) {
  this.data = data;
  this.next = next;
}
```

Note: the list may be null and can hold any type of value.

Good luck!