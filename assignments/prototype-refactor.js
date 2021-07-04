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
    constructor(attributes) {
        this.createdAt = attributes.createdAt;
        this.dimensions = attributes.dimensions;

    }

    destroy() {
        //console.log(`Object was removed from the game.`);
        return `Object was removed from the game.`;
    }
}
/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/
class CharacterStats extends GameObject {
    constructor(characterStatsAttributes) {
        super(characterStatsAttributes);
        this.hp = characterStatsAttributes.hp;
        this.name = characterStatsAttributes.name;

    }
    takeDamage() {
        //console.log(`${this.name} took damage.`);
        return `${this.name} took damage.`;
    };

}

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype******************************
*/

class Humanoid extends CharacterStats {
    constructor(humanoidAttributes) {
        super(humanoidAttributes);
        this.faction = humanoidAttributes.faction;
        this.weapons = humanoidAttributes.weapons;
        this.language = humanoidAttributes.language;
    }
    greet() {
        //console.log(`${this.name} offers a greeting in ${this.language}.`);
        return `${this.name} offers a greeting in ${this.language}.`;
    }

}

/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats******************************
  * should inherit takeDamage() from CharacterStats***********************************************
*/

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
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


// Stretch task: 
// * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villian and one a hero and fight it out with methods!

// const Villian = function(VillianAttributes) {
//     Humanoid.this(this, VillianAttributes);
//     this.faction = villianAttributes.faction;
//     this.weapons = villianAttributes.weapons;
//     this.language = villianAttributes.language;


// }

// Villian.prototype = Object.create(Humanoid.prototype);

// Villian.prototype.greet = function() {
//     //console.log(`${this.name} offers a greeting in ${this.language}.`);
//     return `${this.name} offers a greeting in ${this.language}.`;
// }
// Villian.prototype.stab = function() {
//     return `${this.name} offers a not so friendly stab in the gut, and a slick quip to boot.`;
// }

// // Villian.prototype.blocks = function() {
// //     return `${this.name} protective defence with his sheald.`;
// // };



// const Hero = function(heroAttributes) {
//     Humanoid.this(this, heroAttributes);
//     this.faction = heroAttributes.faction;
//     this.weapons = heroAttributes.weapons;
//     this.language = heroAttributes.language;


// }

// Hero.prototype = Object.create(Humanoid.prototype);

// Hero.prototype.greet = function() {
//     //console.log(`${this.name} offers a greeting in ${this.language}.`);
//     return `${this.name} offers a greeting in ${this.language}.`;
// }

// const McEvil = new villian({
//     createdAt: new Date(),
//     dimensions: {
//         length: 3,
//         width: 3,
//         height: 3,
//     },
//     hp: 18,
//     name: 'Sir McEvil Chops',
//     faction: 'Death',
//     weapons: ['Giant Sword', 'Shield',
//         'Dagger'
//     ],
//     language: 'Common Toungue',
// });


// const SaveTheDayer = new hero({
//     createdAt: new Date(),
//     dimensions: {
//         length: 3,
//         width: 3,
//         height: 3,
//     },
//     hp: 18,
//     name: 'Sir SaveTheDayer',
//     faction: 'Free People',
//     weapons: ['Giant Sword', 'Shield',
//         'Dagger'
//     ],
//     language: 'Common Toungue',
// });