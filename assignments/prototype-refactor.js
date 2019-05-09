/*

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class GameObject {
  constructor(object) {
    this.createdAt = object.createdAt;
    this.name = object.name;
    this.dimensions = object.dimensions;
  }
  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

class CharacterStats extends GameObject {
  constructor(object) {
    super(object);
    this.healthPoints = object.healthPoints;
  }
  takeDamage() {
    return `${this.name} took damage.`;
  }
}

class Humanoid extends CharacterStats {
  constructor(object) {
    super(object);
    this.team = object.team;
    this.weapons = object.weapons;
    this.language = object.language;
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
console.log("\n" + swordsman.healthPoints + "\n"); // 15
console.log(mage.name + "\n"); // Bruce
console.log(swordsman.team + "\n"); // The Round Table
console.log(mage.weapons + "\n"); // Staff of Shamalama
console.log(archer.language + "\n"); // Elvish
console.log(archer.greet() + "\n"); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage() + "\n"); // Bruce took damage.
console.log(swordsman.destroy() + "\n" + "\n" + "\n" + "\n"); // Sir Mustachio was removed from the game.

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

const Hero = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 45,
  name: "Hero",
  team: "Good guy",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

const Villan = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 1000,
  name: "Villan",
  team: "bad guy",
  weapons: ["Dagger"],
  language: "common"
});

console.log(Hero.greet() + "\n");
console.log(Villan.greet() + "\n");

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

while (Villan.healthPoints > 0 || Hero.healthPoints > 0) {
  let herodamage = getRandomInt(50);
  let villandamage = getRandomInt(3);
  if (Villan.healthPoints <= 0) {
    break;
  }
  if (Hero.healthPoints <= 0) {
    break;
  }
  if (Hero.healthPoints >= 0) {
    if (herodamage === 0) {
      console.log(`Hero misses`);
    } else if (herodamage < 30) {
      console.log(Villan.takeDamage());
      console.log(`Hero deals ${herodamage} damage`);
    } else {
      console.log(Villan.takeDamage());
      console.log(`Hero lands a critical hit dealing ${herodamage} damage`);
    }
    console.log(`Villan's health is ${(Villan.healthPoints -= herodamage)}\n`);
  }
  if (Villan.healthPoints >= 0) {
    if (villandamage === 0) {
      console.log(`Villan misses`);
    } else {
      console.log(Hero.takeDamage());
      console.log(`Villan deals ${villandamage} damage`);
    }
    console.log(`Hero's health is ${(Hero.healthPoints -= villandamage)}\n`);
  }
}

if (Hero.healthPoints <= 0) {
  console.log(Hero.destroy());
}
if (Villan.healthPoints <= 0) {
  console.log(Villan.destroy());
}
