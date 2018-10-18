/*

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

*/

class GameObject {
  constructor(GOstats){
    this.createdAt = GOstats.createdAt;
    this.dimensions = GOstats.dimensions;
  }
  destroy() {
    return (`${this.name} was removed from the game.`);
  }
}

// function GameObject(GOstats){
//   this.createdAt = GOstats.createdAt;
//   this.dimensions = GOstats.dimensions;
// }
//
// GameObject.prototype.destroy = function() {
//   return (`${this.name} was removed from the game.`)
// }

class CharacterStats extends GameObject {
  constructor(CSstats) {
    super(CSstats);
    this.hp = CSstats.hp;
    this.name = CSstats.name;
  }
  takeDamage() {
    return (`${this.name} took damage.`);
  }
}

// function CharacterStats(CSstats){
//   GameObject.call(this, CSstats);
//   this.hp = CSstats.hp;
//   this.name = CSstats.name;
// }
// CharacterStats.prototype = Object.create(GameObject.prototype);
//
// CharacterStats.prototype.takeDamage = function() {
//   return (`${this.name} took damage.`)
// }

class Humanoid extends CharacterStats {
  constructor(Hstats) {
    super(Hstats);
    this.faction = Hstats.faction;
    this.weapons = Hstats.weapons;
    this.language = Hstats.language;
  }
  greet() {
    return (`${this.name} offers a greeting in ${this.language}`);
  }
}

// function Humanoid(Hstats){
//   CharacterStats.call(this, Hstats);
//   this.faction = Hstats.faction;
//   this.weapons = Hstats.weapons;
//   this.language = Hstats.language;
// }
// Humanoid.prototype = Object.create(CharacterStats.prototype);
//
// Humanoid.prototype.greet = function() {
//   return (`${this.name} offers a greeting in ${this.language}`)
// }

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

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

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

*/

// Stretch task:
// * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villian and one a hero and fight it out with methods!
