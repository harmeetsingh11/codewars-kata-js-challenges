function Hero(name = 'Hero') {
  // Set the name to the provided argument or default to 'Hero'
  this.name = name;
  // Initialize position as '00'
  this.position = '00';
  // Set health to the default value of 100
  this.health = 100;
  // Set damage to the default value of 5
  this.damage = 5;
  // Initialize experience to 0
  this.experience = 0;
}

// Example
const defaultHero = new Hero(); // Creates a Hero with the default name 'Hero'
const customHero = new Hero('Archer'); // Creates a Hero with the name 'Archer'

console.log(defaultHero); // { name: 'Hero', position: '00', health: 100, damage: 5, experience: 0 }
console.log(customHero); // { name: 'Archer', position: '00', health: 100, damage: 5, experience: 0 }

/* 
Explanation:

Constructor Function:
The Hero function is used as a constructor, and it initializes the attributes of a new hero object.
If no name is provided, it defaults to 'Hero'.

Default Values:
The attributes position, health, damage, and experience are set to their respective fixed values as per the requirements.

Efficiency:
This implementation is concise and leverages JavaScript's default function parameters for simplicity.
Using a constructor function ensures that creating multiple heroes is straightforward and memory-efficient.
*/
