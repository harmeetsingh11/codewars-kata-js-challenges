# [Create a frame!](https://www.codewars.com/kata/5672f4e3404d0609ec00000a)

### Difficulty: `6 kyu`

### Tags: `Fundamentals` `Strings` `Arrays` `ASCII Art`

## Description

```
*************************
*  Create a frame!      *
*           __     __   *
*          /  \~~~/  \  *
*    ,----(     ..    ) *
*   /      \__     __/  *
*  /|         (\  |(    *
* ^  \  /___\  /\ |     *
*    |__|   |__|-..     *
*************************
```

Given an array of strings and a character to be used as border, output the frame with the content inside.

Notes:

- Always keep a space between the input string and the left and right borders.
- The biggest string inside the array should always fit in the frame.
- The input array is never empty.

### Example

`frame(['Create', 'a', 'frame'], '+')`

### Output:

```
++++++++++
+ Create +
+ a      +
+ frame  +
++++++++++
```