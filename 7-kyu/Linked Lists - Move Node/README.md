# [Linked Lists - Move Node](https://www.codewars.com/kata/55da347204760ba494000038)

### Difficulty: `7 kyu`

### Tags: `Linked Lists` `Data Structures` `Fundamentals`

## Description

Linked Lists - Move Node

Write a MoveNode() function which takes the node from the front of the source list and moves it to the front of the destintation list. You should throw an error when the source list is empty. For simplicity, we use a Context object to store and return the state of the two linked lists. A Context object containing the two mutated lists should be returned by moveNode.

MoveNode() is a handy utility function to have for later problems.

**JavaScript**

```js
var source = 1 -> 2 -> 3 -> null
var dest = 4 -> 5 -> 6 -> null
moveNode(source, dest).source === 2 -> 3 -> null
moveNode(source, dest).dest === 1 -> 4 -> 5 -> 6 -> null
```

**Python**

```py
source = 1 -> 2 -> 3 -> None
dest = 4 -> 5 -> 6 -> None
move_node(source, dest).source == 2 -> 3 -> None
move_node(source, dest).dest == 1 -> 4 -> 5 -> 6 -> None
```

**Ruby**

```rb
source = 1 -> 2 -> 3 -> nil
dest = 4 -> 5 -> 6 -> nil
move_node(source, dest).source == 2 -> 3 -> nil
move_node(source, dest).dest == 1 -> 4 -> 5 -> 6 -> nil
```

The push() and buildOneTwoThree() functions need not be redefined.