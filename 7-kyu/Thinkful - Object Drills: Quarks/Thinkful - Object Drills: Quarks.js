class Quark {
  // Baryon number is a constant for all quarks
  static BARYON_NUMBER = 1 / 3;

  constructor(color, flavor) {
    // Validating color and flavor
    if (!['red', 'blue', 'green'].includes(color)) {
      throw new Error('Invalid color');
    }
    if (!['up', 'down', 'strange', 'charm', 'top', 'bottom'].includes(flavor)) {
      throw new Error('Invalid flavor');
    }

    this.color = color;
    this.flavor = flavor;
    this.baryon_number = Quark.BARYON_NUMBER;
  }

  // Interact method swaps colors between two quarks
  interact(otherQuark) {
    if (!(otherQuark instanceof Quark)) {
      throw new Error('Can only interact with another Quark');
    }
    [this.color, otherQuark.color] = [otherQuark.color, this.color];
  }
}

const q1 = new Quark('red', 'up');
const q2 = new Quark('blue', 'strange');

console.log(q1.color); // "red"
console.log(q2.color); // "blue"

q1.interact(q2);

console.log(q1.color); // "blue"
console.log(q2.color); // "red"
