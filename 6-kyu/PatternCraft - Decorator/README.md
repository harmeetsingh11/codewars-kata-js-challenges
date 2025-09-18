# [PatternCraft - Decorator](https://www.codewars.com/kata/5682e545fb263ecf7b000069)

### Difficulty: `6 kyu`
 
### Tags: `Design Patterns` `Fundamentals`

## Description

The [Decorator Design Pattern](https://www.youtube.com/watch?v=17XTOODeWQE) can be used, for example, in the StarCraft game to manage upgrades.

The pattern consists in "incrementing" your base class with extra functionality.

A decorator will receive an instance of the base class and use it to create a new instance with the new things you want "added on it".

### Your Task
Complete the code so that when a `Marine` gets a `WeaponUpgrade` it increases the damage by `1`, and if it is a `ArmorUpgrade` then increase the armor by `1`.

You have 3 classes:

- `Marine`: has a `damage` and an `armor` properties
- `MarineWeaponUpgrade` and `MarineArmorUpgrade`: upgrades to apply on marine. Accepts a `Marine` in the constructor and has the same properties as the `Marine`