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
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/
class GameObject {
  constructor(attributes) {
    this.createdAt = attributes.createdAt;
    this.dimensions = attributes.dimensions;
  }
  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

/*
    === CharacterStats ===
    * healthPoints
    * name
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
class CharacterStats extends GameObject {
  constructor(characterAttributes) {
    super(characterAttributes);
    this.healthPoints = characterAttributes.healthPoints;
    this.name = characterAttributes.name;
  }

  takeDamage() {
    return `${this.name} took damage.`;
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
class Humanoid extends CharacterStats {
  constructor(humanAttributes) {
    super(humanAttributes);
    this.team = humanAttributes.team;
    this.weapons = humanAttributes.weapons;
    this.language = humanAttributes.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}
class Hero extends Humanoid {
  constructor(heroAttributes) {
    super(heroAttributes);
    this.base = heroAttributes.base;
  }
  heroSpeak() {
    return `This is a test!!!`;
  }
  attack(chr) {
    if (chr.healthPoints <= 0) {
      console.log(chr.destroy());
    } else {
      chr.healthPoints -= 5;
    }
    console.log(chr.healthPoints);
  }
}
class Villian extends Humanoid {
  constructor(villianAttributes) {
    super(villianAttributes);
    this.lair = villianAttributes.lair;
  }

  laugh() {
    console.log(`Haha Haha! (menacingly)`);
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

const bestHeroEver = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 50,
  name: "The Hero",
  team: "Hero Team",
  weapons: ["Hero Sword", "Shield"],
  language: "Hero Speak",
  base: "Test Base"
});

const bigBadVillian = new Villian({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 3,
    height: 5
  },
  healthPoints: 25,
  name: "Uruk",
  team: "Dark Ones",
  weapons: ["Staff", "Wand"],
  language: "Dark Tongue",
  lair: "Haunted Castle"
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
console.log(bestHeroEver.healthPoints);
console.log(bestHeroEver.heroSpeak());
console.log(bestHeroEver.base);
console.log(bestHeroEver.attack(bigBadVillian));
console.log(bestHeroEver.attack(bigBadVillian));
console.log(bestHeroEver.attack(bigBadVillian));
console.log(bestHeroEver.attack(bigBadVillian));
console.log(bestHeroEver.attack(bigBadVillian));

// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!
