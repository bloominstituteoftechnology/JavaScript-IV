/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.


// ------------------------- ES5
*/
// function GameObject(feature) {
//     this.createdAt = feature.createdAt;
//     this.name = feature.name;
//     this.dimensions = feature.dimensions;
//   }
//   GameObject.prototype.destroy = function() {
//     return `${this.name} was removed from the game.`;
//   };

// ------------------------- ES6
class GameObject {
  constructor(feature) {
    this.createdAt = feature.createdAt;
    this.name = feature.name;
    this.dimensions = feature.dimensions;
  }
  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

// ------------------------- ES5
/*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
//   function CharacterStats(feat) {
//     GameObject.call(this, feat);
//     this.healthPoints = feat.healthPoints;
//   }
//   CharacterStats.prototype = Object.create(GameObject.prototype);
//   CharacterStats.prototype.takeDamage = function() {
//     return `${this.name} took damage`;
//   };

// ------------------------- EC6
class CharacterStats extends GameObject {
  constructor(feat) {
    super(feat);
    this.healthPoints = feat.healthPoints;
  }
  takeDamage() {
    return `${this.name} took damage`;
  }
}

/*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */

//   // ------------------------- Es5
//   function Humanoid(otherFeat) {
//     CharacterStats.call(this, otherFeat);
//     this.team = otherFeat.team;
//     this.weapons = otherFeat.weapons;
//     this.language = otherFeat.language;
//   }

//   Humanoid.prototype = Object.create(CharacterStats.prototype);
//   Humanoid.prototype.greet = function() {
//     return `${this.name} offers a greeting in ${this.language}`;
//   };

// ------------------------- Es6

class Humanoid extends CharacterStats {
  constructor(otherFeat) {
    super(otherFeat);
    this.team = otherFeat.team;
    this.weapons = otherFeat.weapons;
    this.language = otherFeat.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}`;
  }
}

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
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
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

//   function VillanAndHero(attr) {
//     Humanoid.call(this, attr);
//   }
//   VillanAndHero.prototype = Object.create(Humanoid.prototype);

class VillanAndHero extends Humanoid {
  constructor(attr) {
    super(attr);
  }

  whoGotKilled() {
    if (this.healthPoints <= 0) {
      return `${this.name} is killd`;
    } else {
      return `${this.name} is a live`;
    }
  }
}

let me = new VillanAndHero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 0,
  name: "Yasir",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

console.log(me.whoGotKilled());
