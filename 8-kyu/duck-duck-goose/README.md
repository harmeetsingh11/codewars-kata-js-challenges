# [Duck Duck Goose](https://www.codewars.com/kata/582e0e592029ea10530009ce)

### Difficulty: `8 kyu`

### Tags: `Fundamentals` `Arrays` `Lists`

## Description

The objective of [Duck, duck, goose](https://en.wikipedia.org/wiki/Duck,_duck,_goose) is to walk in a circle, tapping on each player's head until one is chosen.

### Task:

Given an array of Player objects and a position (first position is 1), return the `name` of the chosen Player.
`name` is a property of `Player` objects, e.g `Player.name`

### Example:

```
duck_duck_goose([a, b, c, d], 1) should return a.name
duck_duck_goose([a, b, c, d], 5) should return a.name
duck_duck_goose([a, b, c, d], 4) should return d.name
```

### Random input limits:

- `6≤Players≤50`
- `5000≤Position≤50000`