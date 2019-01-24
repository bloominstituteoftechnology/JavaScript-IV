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
    constructor (type) {
        this.createdat = type.createdAt;
        this.dimensions = type.dimensions;
    }
    
    destroy () {
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
    constructor (type) {
        super(type);

        this.healthpoints = type.healthPoints;
        this.name = type.name;
        }

        takedamage () {
            return(`${this.name} took damage`);
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
    constructor (type){
        super(type);

        this.team = type.team;
        this.weapons = type.weapons;
        this.language = type.language;
        }

        greet(language, name) {
        if (this.language === 'Common Tongue'){
             return (`${this.name}: Hello There!`);
        }else if (this.language === 'Elvish'){
            return(`${this.name} : Greets you in Elvish`);
        }}
    
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

 console.log(mage.createdat); // today's date
 console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
 console.log(swordsman.healthpoints); // 15
 console.log(mage.name); // bruce
 console.log(swordsman.team); // the round table
 console.log(mage.weapons); // staff of shamalama
 console.log(archer.language); // elvish
 console.log(archer.greet()); // lilith offers a greeting in elvish.
 console.log(mage.takedamage()); // bruce took damage.
 console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


 // Stretch task:
 // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
 // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
 // * Create two new objects, one a villain and one a hero and fight it out with methods!

 //MVP complete
 

