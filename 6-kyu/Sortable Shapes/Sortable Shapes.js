// Base class Shape
class Shape {
  // Every shape must implement area
  area() {
    throw new Error("Method 'area()' must be implemented.");
  }

  // Enable comparison between shapes (used in sorting)
  valueOf() {
    return this.area();
  }
}

// Square: area = side²
class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }
  area() {
    return this.side * this.side;
  }
}

// Rectangle: area = width * height
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}

// Triangle: area = (base * height) / 2
class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }
  area() {
    return (this.base * this.height) / 2;
  }
}

// Circle: area = π * radius²
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}

// CustomShape: directly given area
class CustomShape extends Shape {
  constructor(area) {
    super();
    this._area = area;
  }
  area() {
    return this._area;
  }
}

// ----------------- Example Usage -----------------

let side = 1.1234;
let radius = 1.1234;
let base = 5;
let height = 2;

let shapes = [new Square(side), new Circle(radius), new Triangle(base, height)];

// Sort shapes by area (thanks to valueOf override)
shapes.sort((a, b) => a - b);

// Print areas after sorting
console.log(shapes.map((s) => s.area()));

/*
### 🔎 Explanation

1. **Base Class (Shape)**

   * Defines a common structure for all shapes.
   * Implements `valueOf()` → so shapes can be compared directly using `<`, `>`, and subtraction inside `sort`.

2. **Derived Classes**

   * `Square`, `Rectangle`, `Triangle`, `Circle`, `CustomShape` each override `area()` according to their formula.
   * This keeps the code clean, extensible, and easy to maintain.

3. **Sorting Logic**

   * Normally, JavaScript `.sort()` compares items as strings.
   * By overriding `valueOf()`, each shape "acts like" its numeric area in comparisons.
   * Thus, `shapes.sort((a, b) => a - b)` sorts them **by area naturally**.

4. **Efficiency**

   * Each area is calculated in O(1).
   * Sorting is O(n log n).
   * Implementation is both concise and extensible for future shapes.
*/
