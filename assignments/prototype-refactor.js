/*

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/


/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.

  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
/*
function GameObject(stats) {
    this.createdAt = stats.createdAt;
    this.dimensions = stats.dimensions;
}
*/

class GameObject {
    constructor(stats) {
        this.createdAt = stats.createdAt;
        this.dimensions = stats.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game.`;
    }
}
/*
GameObject.prototype.destroy = function () {
    return `${this.name} was removed from the game.`;
}
*/
/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
/*
function CharacterStats(stats) {
    GameObject.call(this, stats);
    this.healthPoints = stats.healthPoints;
    this.name = stats.name;
}
*/


class CharacterStats extends GameObject{
    constructor(stats) {
        super(stats);
        this.healthPoints = stats.healthPoints;
        this.name = stats.name;
    }
    takeDamage(){
        return `${this.name} took damage.`
    }
}

/*
// link current to parent
CharacterStats.prototype = Object.create(GameObject.prototype);

// damage
CharacterStats.prototype.takeDamage = function () {
    return `${this.name} took damage.`
}
*/

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
// Humanoid should take (stats), not multiple params as the objects get passed in



// var Humanoid = function (team, weapon, language) {
//     this.team = team;
//     this.weapon = weapon;
//     this.language = language;
//     this.greet
// }; Humanoid should take (stats), not all those params as the indiviual Humanoid stats will populate due to being passsed as a parameter
/*
function Humanoid(stats) {
    CharacterStats.call(this, stats);
    this.team = stats.team;
    this.weapons = stats.weapons;
    this.language = stats.language;
}
*/

class Humanoid extends CharacterStats {
    constructor(stats) {
        super(stats);
        this.team = stats.team;
        this.weapons = stats.weapons;
        this.language = stats.language;
    }
    greet(){
        return `${this.name} offers a greeting in ${this.language}.`
    }
}

/*
Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function () {
    return `'${this.name} offers a greeting in ${this.language}.`
}
*/
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  const hero = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 3,
      width: 2,
      height: 6,
    },
    healthPoints: 20,
    name: 'Rickay',
    team: 'Spaceball One',
    weapons: [
      'The Sword of a Thousand Truths',
      'Dagger',
    ],
    language: 'English',
  });

  const villain = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 4,
      width: 1,
      height: 7,
    },
    healthPoints: 25,
    name: 'Moranis',
    team: 'Lonestar',
    weapons: [
      'Left Fist',
      'Right Fist',
    ],
    language: 'Old English',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task:
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!
