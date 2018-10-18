/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class GameObject {
  constructor(dimensions) {
    this.createdAt = new Date();
    this.dimensions = dimensions.dimensions;
  }
  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

class CharacterStats extends GameObject {
  constructor(characterAttributes) {
    super(characterAttributes);
    this.hp = characterAttributes.hp;
    this.name = characterAttributes.name;
  }
  takeDamage() {
    return `${this.name} took damage.`;
  }
}

class Humanoid extends CharacterStats {
  constructor(humanTraits) {
    super(humanTraits);
    this.faction = humanTraits.faction;
    this.weapons = humanTraits.weapons;
    this.language = humanTraits.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`
  }
}

class Villian extends Humanoid {
  constructor(villianTraits) {
    super(villianTraits);
    this.blackMagic = function () {
      return `${this.name} has cursed you with black magic...You have taken 5hp of damage`
    }
  }
}

class Hero extends Humanoid {
  constructor(heroTraits) {
    super(heroTraits);
    this.holyLight = function () {
      return `${this.name} has called down a beam of holy light...You have taken 5hp of damage`
    }
  }
}

const villian = new Villian({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 3,
    height: 3,
  },
  hp: 95,
  name: 'Sauron',
  faction: 'Hades',
  weapons: [
    'Staff of Doom',
  ],
  language: 'Common Toungue',
})

const hero = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 3,
    width: 2,
    height: 2,
  },
  hp: 95,
  name: 'Achiles',
  faction: 'Greece',
  weapons: [
    'Sword of Life',
  ],
  language: 'Common Toungue',
})

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
console.log(mage.weapons[0]); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.