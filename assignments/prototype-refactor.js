/*

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance heirarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.

  Each constructor function has unique properites and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/
// function GameObject(attributes) {
//   this.createdAt =attributes.createdAt,
//   this.dimensions= attributes.dimensions,
//   this.name = attributes.name;
//
// }
// Base class
// step 1: Declare the class keyword
class GameObject {
  // step 2: Create new constructor
  constructor(attributes) {
  this.createdAt = attributes.createdAt,
  this.dimensions= attributes.dimensions,
  this.name = attributes.name;
  }
  // step 3: convert object.prototype into method syntax
  destroy() {
    return Object `${this.name} was removed from the game`;
  }
} // GameObject


/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
// function CharacterStats(stats) {
//   GameObject.call(this, stats); // binding this to GameObject
//   this.hp = stats.hp;
// }

// extends keyword - used in class declarations/class expressions to creat  a class
// which is a child of another class

// extends creates _proto_ chain
class CharacterStats extends GameObject {
  constructor(stats) {
    // Super allows me to gain access to the this items in the base class
    super(stats);
    this.hp = stats.hp;
  }
  takeDamage() {
    return `${this.name} took damage`;
  }
}

// CharacterStats.prototype  =Object.create(GameObject.prototype); // Inheritance
//
// CharacterStats.prototype.takeDamage = function() {
//   return `${this.name} took damage`;
// }
/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
// function Humanoid(HumanAttrs) {
//   CharacterStats.call(this, HumanAttrs); // Bind this
//   this.faction = HumanAttrs.faction,
//   this.weapons = HumanAttrs.weapons,
//   this.language = HumanAttrs.language;
// }

class Humanoid extends CharacterStats {
  constructor(HumanAttrs) {
    super(HumanAttrs);
    this.faction = HumanAttrs.faction,
    this.weapons = HumanAttrs.weapons,
    this.language = HumanAttrs.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}`;
  }
}

// Humanoid.prototype = Object.create(CharacterStats.prototype);
//
// Humanoid.prototype.greet = function() {
//   return `${this.name} offers a greeting in ${this.language}`;
// }

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/



// Test you work by uncommenting these 3 objects and the list of console logs below:


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
