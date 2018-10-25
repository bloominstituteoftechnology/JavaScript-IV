/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

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

class CharacterStats extends GameObject {
  constructor(attributes) {
    super(attributes);
    this.createdAt = attributes.createdAt;
    this.dimensions = attributes.dimensions;
  }
  takeDamage() {
    return `${this.name} took damage`;
  }
}

class Humanoid extends CharacterStats {
  constructor(attributes) {
    super(attributes);
    this.name = attributes.name;
    this.hp = attributes.hp;
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

class Hero extends Humanoid {
  constructor(attributes) {
    super(attributes);
  }
  attack(e) {
    e.hp -= 3;
    if (e.hp <= 0) {
      console.log(e.destroy());
      return `${this.name} attacked ${e.name}, ${e.name} has been destroyed`;
    } else {
      return `${this.name} attacked ${e.name}, ${e.name} now has ${e.hp} hp`;
    }
  }
}

const protag = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 6,
    width: 2,
    height: 5
  },
  hp: 13,
  name: "Shrimp",
  faction: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "English"
});

class Villain extends Humanoid {
  constructor(attributes) {
    super(attributes);
  }
  attack(e) {
    e.hp -= 3;
    if (e.hp <= 0) {
      console.log(e.destroy());
      return `${this.name} attacked ${e.name}, ${e.name} has been destroyed`;
    } else {
      return `${this.name} attacked ${e.name}, ${e.name} now has ${e.hp} hp`;
    }
  }
}

const antag = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 6,
    width: 5,
    height: 10
  },
  hp: 22,
  name: "Ganon",
  faction: "Enther Kingdom",
  weapons: ["Mace", "Flames"],
  language: "Gorgon"
});

while (antag.hp > 0 && protag.hp > 0) {
  if (protag.hp > 0) {
    console.log(protag.attack(antag));
  }
  if (antag.hp > 0) {
    console.log(antag.attack(protag));
  }
}
