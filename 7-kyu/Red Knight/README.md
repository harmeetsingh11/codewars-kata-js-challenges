# [Red Knight](https://www.codewars.com/kata/5fc4349ddb878a0017838d0f)

### Difficulty: `7 kyu`

### Tags: `Fundamentals` `Puzzles` `Algorithms`

## Description

Red Knight is chasing two pawns. Which pawn will be caught, and where?

### Input / Output
Input will be two integers:

- `N / n` (Ruby) vertical position of Red Knight (`0` or `1`).
- `P` / `p` (Ruby) horizontal position of two pawns (between `2` and `1000000`).

Output has to be a tuple (python, haskell, Rust, prolog, C#), an array (javascript, ruby), an object (java), or a structure (C) with:

- `"Black"` or `"White"` - which pawn was caught
- Where it was caught (horizontal position)

### Example

```js
Input = 0, 4
Output = ["White", 8]
```

![alt text](image.png)


### Notes

- Red Knight will always start at horizontal position `0`.
- The black pawn will always be at the bottom (vertical position `1`).
- The white pawn will always be at the top (vertical position `0`).
- The pawns move first, and they move simultaneously.
- Red Knight moves `2` squares forward and `1` up or down.
- Pawns always move `1` square forward.
- Both pawns will start at the same horizontal position.
