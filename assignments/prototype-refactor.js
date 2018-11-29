/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
  constructor(attrs) {
    this.createdAt = attrs.createdAt;
    this.dimensions = attrs.dimensions;
  }

  destroy() {
    return `${this.name} was removed from game.`;
  }
}

/*
    === CharacterStats ===
    * hp
    * name
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */

class CharacterStats extends GameObject {
  constructor(attrs) {
    super(attrs);
    this.hp = attrs.hp;
    this.name = attrs.name;
    this.power = attrs.power;
  }

  takeDamage() {
    return `${this.name} took damage.`;
  }
}

/*
    === Humanoid ===
    * faction
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */

class Humanoid extends CharacterStats {
  constructor(attrs) {
    super(attrs);
    this.faction = attrs.faction;
    this.weapons = attrs.weapons;
    this.language = attrs.language;
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

// Test you work by uncommenting these 3 objects and the list of console logs below:
const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  hp: 5,
  name: "Bruce",
  faction: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Toungue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  hp: 15,
  name: "Sir Mustachio",
  faction: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Toungue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  hp: 10,
  name: "Lilith",
  faction: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
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

// Hero And Villian
class Heros extends Humanoid {
  constructor(attrs) {
    super(attrs);
  }
  defend(hp, power) {
    let currentHp = hp;
    while (currentHp > 0) {
      currentHp -= power;
      console.log(
        `HIT!!!! YOUR CURRENT HEALTH IS ${currentHp}, You opponent is ${power} STRONG!`
      );
    }
    console.log("YOU LOSE!!");
  }
}

class Villians extends Humanoid {
  constructor(attrs) {
    super(attrs);
  }

  attack(power) {
    console.log(power);
  }
}

const Hero = new Heros({
  name: "Hamza",
  hp: 20
});

const Villian = new Villians({
  power: 5,
  name: "BAD"
});

const JOHN = new Villians({
  name: "JOHN",
  power: 1
});
Hero.defend(Hero.hp, JOHN.power);
