# [PatternCraft - Visitor](https://www.codewars.com/kata/5682e646d5eddc1e21000017)

### Difficulty: `7 kyu`

### Tags: `Design Patterns` `Fundamentals`

## Description

The [Visitor Design Pattern](https://www.youtube.com/watch?v=KSEyIXnknoY) can be used, for example, to determine how an attack deals a different amount of damage to a unit in the StarCraft game.

The pattern consists of delegating the responsibility to a different class.

When a unit takes damage it can tell the visitor what to do with itself.

### Your Task
Complete the code so that when a Tank attacks a Marine it takes 21 damage and when a Tank attacks a Marauder it takes 32 damage.

The Marine's initial health should be set to 100 and the Marauder's health should be set to 125.

You have 3 classes:

- ``Marine`: has a health property and accept(visitor) method
- ``Marauder`: has a health property and accept(visitor) method
- ``TankBullet`: the visitor class. Has visitLight(unit) and visitArmored(unit) methods
