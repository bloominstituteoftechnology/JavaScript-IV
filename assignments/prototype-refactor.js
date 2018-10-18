/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance heirarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properites and methods that are defined in their block comments below:
*/
  

class GameObject {
    constructor (attrib){
    this.createdAt = attrib.createdAt;
    this.dimensions = attrib.dimensions;
}
    destroy() {
        return `${this.name} was removed from the game.`;
    }
} 
  
class CharacterStats extends GameObject {
    constructor(attrib){
    super(attrib);
    this.hp = attrib.hp;
    this.name = attrib.name;
}
    takeDamage() {
    return `${this.name} took damage.`; 
    }
}

class Humanoid extends CharacterStats{ 
    constructor(attrib){
    super(attrib);
    this.faction = attrib.faction;
    this.weapons = attrib.weapons;
    this.language = attrib.language;
}
    greet() {
        return `${this.name} offers a greeting in ${this.language}`;
    }
}    

class Villian extends Humanoid{
    constructor(attrib){
    super(attrib);
}
    attack(){
        let successChance = Math.random()
        if (successChance > 0.5 && this.hp >= 1 && hero.hp >=1) {
        hero.hp--;
            return `The hero has ${hero.hp} health left! You have ${this.hp} health remaining.`;
        } else if (successChance < 0.49 && this.hp >= 1 && hero.hp >=1) {
        this.hp--;
            return `You're strike missed and you've been hit instead! The hero has ${hero.hp} and you have ${this.hp} health remaining.`;
        } else if (this.hp < 1 && hero.hp >= 1){
            return `Sad trombone. You've been defeated!`
        } else if (hero.hp < 1 && this.hp >= 1){
            return `You are victorious! The hero has been defeated! You have ${this.hp} health remaining.`;
        } 
    }
}

class Hero extends Humanoid{
    constructor(attrib){
    super(attrib);
}
    attack(){
        let successChance = Math.random()
        if (successChance > 0.5 && this.hp >= 1 && villian.hp >=1) {
        villian.hp--;
            return `The villian has ${villian.hp} health left! You have ${this.hp} health remaining.`;
        } else if (successChance < 0.49 && this.hp >= 1 && villian.hp >=1) {
        this.hp--;
            return `You're strike missed and you've been hit instead! The villian has ${villian.hp} and you have ${this.hp} health remaining.`;
        } else if (this.hp < 1 && villian.hp >= 1){
            return `Sad trombone. You've been defeated!`
        } else if (villian.hp <1 && this.hp >= 1){
            return `You are victorious! The villian has been defeated! You have ${this.hp} health remaining.`;
        } 
    }
}

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
    language: 'Common Tongue',
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
    language: 'Common Tongue',
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

const hero = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 5,
    },
    hp: 5,
    name: 'Captain',
    faction: 'Hero Tribe',
    weapons: [
        'Greatsword',
        'Bow',
        'Mace',
    ],
    language: 'Common Tongue',
});

const villian = new Villian({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 3,
    },
    hp: 5,
    name: 'Evil',
    faction: 'Villian Tribe',
    weapons: [
        'Throwing Knives',
        'Crossbow',
        'Poison Darts',
    ],
    language: 'Elvish',
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