# [PatternCraft - State](https://www.codewars.com/kata/5682e72eb7354b2f39000021)

### Difficulty: `6 kyu`
 
### Tags: `Design Patterns` `Fundamentals`

## Description

The [State Design Pattern](https://www.youtube.com/watch?v=yZt7mUVDijU) can be used, for example, to manage the state of a tank in the StarCraft game.

The pattern consists in isolating the state logic in different classes rather than having multiple `if`s to determine what should happen.

### Your Task
Complete the code so that when a `Tank` goes into `SiegeMode` it cannot move and its damage goes to `20`. When it goes to `TankMode` it should be able to move and the damage should be set to `5`.

You have 3 classes:

- Tank: has a `state`, `canMove` and `damage` properties
- `SiegeState` and `TankState`: has `canMove` and `damage` properties

**Note:** The tank initial state should be `TankState`.