/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
// function GameObject(attributes) {
//     this.createdAt = attributes.createdAt;
//     this.name = attributes.name;
//     this.dimensions = attributes.dimensions;
// }

class GameObject { 
  constructor(attributes) {
    this.createdAt = attributes.createdAt;
    this.name = attributes.name;
    this.dimensions = attributes.dimensions;
  }
  // as a prototype so other objects can use it outside of GameObj
  destroy() {
    console.log(`${this.name} was removed from the game`);
  }
}

//CharacterStats inheritance destroy() from GameObj
class CharacterStats extends GameObject {
    constructor(attributes) {
        super(attributes); // binding
        this.healthPoints = attributes.healthPoints;
    }
    takeDamage() {
        console.log(`${this.name} took damage`);
    }
} 

class Humanoid extends CharacterStats {
    constructor(attributes){
    super(attributes) // binding
    this.team = attributes.team;
    this.weapons = attributes.weapons;
    this.language = attributes.language;
    }
    greet() {
         return `${this.name} offers a greeting in ${this.language}.`;
    }
    battle(opponent){
        // console.log(opponent.healthPoints);
        let opHealth = opponent.healthPoints;
        for (let i = 0; i < opHealth; i++) {
            opponent.removeHealth();
            opponent.takeDamage();
        }
        opponent.destroy();
        return ` Your opponent has ${opponent.healthPoints} points!`;
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

class Hero extends Humanoid{
    constructor(attributes){
        super(attributes) //binding
    }
    removeHealth() {
        this.healthPoints -= 1;
        console.log(`${this.name} has ${this.healthPoints} points`);
    }
}

class Villain extends Humanoid {
    constructor(attributes) {
        super(attributes) //binding
    }
    removeHealth() {
        this.healthPoints -= 1;
        console.log(`${this.name} has ${this.healthPoints} points`);
    }
}


// * Create two new objects, one a villain and one a hero and fight it out with methods!

const hero = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 100,
    name: 'Dingus',
    team: 'Dangle Kingdom',
    weapons: [
        'rocks',
        'bottles',
    ],
    language: 'Spanglish',
});


const villain = new Villain({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 10,
    name: 'Lee Boy',
    team: 'Wokeomon',
    weapons: [
        'Ad Hom',
        'Pepper Spray',
    ],
    language: 'reverslish',
});


console.log(hero.battle(villain));
// console.log(villain.healthPoints);


