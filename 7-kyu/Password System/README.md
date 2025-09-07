# [Password maker](https://www.codewars.com/kata/57a23e3753ba332b8e0008da)

### Difficulty: `7 kyu`

### Tags: ``Fundamentals`

## Description

In Star Labs we use password system to unlock the lab doors and only Team Flash is given the password for these labs. The password system is made of a `n x n` keypad (`n > 0`).

One day Zoom saw Cisco using the password. He figured out that the password is symmetric about the centre point (the centre point for a `n x n` keypad will be the point with co-ordinates `(n / 2, n / 2))`. Now he has to try all possible symmetric combinations to unlock the door. Since he does not have enough time, he asks you to determine whether a given password is symmetric or not.

You will be given a flattened `n x n` binary grid containing elements as 0 if that key is not used and `1` if that key is used. You need to tell whether the given binary grid is symmetric according to the centre point. The grid might not be square; in that case you should return `"No"`.

### Your Task
Write a function that takes an one-dimensional array of integers containing `0` and `1` as input and returning `"Yes"` or `"No"` depending on whether the given password is symmetric or not.

### Examples

- `[1, 1, 0, 0, 0, 0, 0, 1, 1] => "Yes"`
    The given password is symmetric about the centre point. For ease of understanding, the above 1D array can be represented as follows:

    ```
    1  1  0
    0  0  0
    0  1  1
    ```
- `[1, 1, 0, 0, 1, 0, 0, 1] => "No"`
    This array cannot be represented as a `n x n` matrix, so it's invalid.

- `[1, 0, 1, 1, 0, 0, 0, 0, 0] => "No"` 
    This password is not symmetric along the centre point.

