/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by uncommenting these 3 objects and the list of console logs below:
// GameObject constructor
class GameObject {
  constructor(attributes) {
    this.createdAt = attributes.createdAt;
    this.dimensions = attributes.dimensions;
  }
  destroy() {
    if (this.alive) this.alive = false;
    if (!this.name) return `Game object was removed from the game.`;
    else return `${this.name} was removed from the game.`;
  }

  takeDamage() {
    if (!this.alive) return "He's dead, Jim.";
    return `${this.name} took damage.`;
  }
}

// CharacterStats constructor
class CharacterStats extends GameObject {
  constructor(attributes) {
    super(attributes);
    this.hp = attributes.hp;
    this.name = attributes.name;
    this.alive = true;
  }
}


// Humanoid constructor
class Humanoid extends CharacterStats {
  constructor(attributes) {
    super(attributes);
    this.faction = attributes.faction;
    this.weapons = attributes.weapons;
    this.language = attributes.language;
  }

  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  hp: 5,
  name: 'Bruce',
  faction: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Toungue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  hp: 15,
  name: 'Sir Mustachio',
  faction: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Toungue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  hp: 10,
  name: 'Lilith',
  faction: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});


console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.hp); // 15
console.log(mage.name); // Bruce
console.log(swordsman.faction); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch task: 
// * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villian and one a hero and fight it out with methods!

// Hero 
const Hero = function (attributes) {
  Humanoid.call(this, attributes);
  this.mp = attributes.mp;
  this.str = attributes.str;
}

Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.strike = function (target) {
  if (!this.alive) return `You can't do that, you're dead!`;
  else if (!target.alive) return `You just going to hack at that corpse all day?`;
  else {
    if ((Math.random() * 10) < 5) return target.takeDamage();
    else return "Attack missed";
  }
}

// Villain
const Villain = function (attributes) {
  Humanoid.call(this, attributes);
  this.mp = attributes.mp;
  this.str = attributes.str;
}

Villain.prototype = Object.create(Humanoid.prototype);