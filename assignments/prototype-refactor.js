/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
  // === GameObject ===
class GameObject {
  constructor(attribute) {
    this.createdAt = attribute.createdAt;
    this.name = attribute.name;
    this.dimensions = attribute.dimensions;
  }

  destroy() {
    return `${this.name} was removed from the game.`
  }
}
    
  // === CharacterStats ===
class CharacterStats extends GameObject { 
  constructor(attribute) {
    super(attribute);
    this.healthPoints = attribute.healthPoints;
  }
  takeDamage() {
    return `${this.name} took damage`;
  }
} 
  
  // === Humanoid (Having an appearance or character resembling that of a human.) ===
class Humanoid extends CharacterStats {  
  constructor(attribute) {
    super(attribute);
    this.team = attribute.team;
    this.weapons = attribute.weapons;
    this.language = attribute.language;
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

class Villain extends Humanoid {
  constructor(attribute) {
    super(attribute);
  }

  intro() {
    return `${this.name} is a Villain and will use a ${this.weapons} to destroy everyone!`;
  }
}   
  
class Hero extends Humanoid {    
  constructor(attribute) {
    super(attribute);
  }

  intro() {
    return `${this.name} is a Hero and will save the day using his ${this.weapons}`;
  }
}
    
const evilGenius = new Villain({
createdAt: new Date(),
dimensions: {
    length: 1,
    width: 2,
    height: 4,
},
healthPoints: 10,
name: 'Evil Genius',
team: 'Forest Kingdom',
weapons: 'plasma ray',
language: 'Elvish',
});

const hero = new Hero({
createdAt: new Date(),
dimensions: {
    length: 1,
    width: 2,
    height: 4,
},
healthPoints: 10,
name: 'Goody Two Shoes',
team: 'The Round Table',
weapons: 'good manners',
language: 'Elvish',
});

console.log(evilGenius.intro());
console.log(hero.intro());
console.log(hero.takeDamage());
console.log(hero.destroy());