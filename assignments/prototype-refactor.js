/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

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
  constructor(charAttributes) {
    super(charAttributes);
    this.healthPoints = charAttributes.healthPoints;
    this.name = charAttributes.name;
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
  constructor(humAttributes) {
    super(humAttributes);
    this.team = humAttributes.team;
    this.weapons = humAttributes.weapons;
    this.language = humAttributes.language;
  }

  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
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

Humanoid.prototype.attack = function(opponent) {
  opponent.healthPoints--;
  if (opponent.healthPoints <= 0) {
    return opponent.destroy();
  } else {
    return `${opponent.takeDamage()} Health Points: ${opponent.healthPoints}`;
  }
};

class Villain extends Humanoid {
  constructor(vilAttributes) {
    super(vilAttributes);
  }
}

class Hero extends Humanoid {
  constructor(heroAtrributes) {
    super(heroAtrributes);
  }
}

const viggo = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 4,
    width: 4,
    height: 4
  },
  healthPoints: 10,
  name: "Viggo",
  team: "Dragon Hunters",
  weapons: ["Sword", "Dagger"],
  language: "Unknown"
});

const hiccup = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 3,
    height: 3
  },
  healthPoints: 10,
  name: "Hiccup",
  team: "Dragon Riders",
  weapons: ["Fire Sword", "Night Fury Dragon"],
  language: "Old Norse"
});

function fight(hero, villain) {
  // both players have life, attack
  while (hero.healthPoints > 0 && villain.healthPoints > 0) {
    const villainAttacks = Math.random() > 0.5;

    if (villainAttacks) {
      console.log(villain.attack(hero));
    } else {
      console.log(hero.attack(villain));
    }
  }

  // check who won
  if (hero.healthPoints > 0) {
    return `Winner is ${hero.name}!!!`;
  } else {
    return `Winner is ${villain.name}!!!`;
  }
}
console.log(fight(hiccup, viggo));
