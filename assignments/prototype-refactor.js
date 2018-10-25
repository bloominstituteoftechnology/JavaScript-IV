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
/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

// This keyword ,prototype methods
// function GameObject (game) {
//     this.createdAt = game.createdAt;
//     this.dimensions = game.dimensions;
//   }
//   GameObject.prototype.destroy = function () {
    
//   }

// Conversion To Class
  class GameObject {
      constructor (game) {
        this.createdAt = game.createdAt;
        this.dimensions = game.dimensions;
      }
      destroy() {
        return `${this.name} was removed from the game.`
      }
  }

  /*
    === CharacterStats ===
    * hp
    * name
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */

  // This keyword ,prototype methods
//   function CharacterStats(charac) {
//     GameObject.call(this,charac);
//     this.hp = charac.hp;
//     this.name =  charac.name;
    
//   }
//   CharacterStats.prototype = Object.create(GameObject.prototype);
  
//   CharacterStats.prototype.takeDamage = function() {
//     return `${this.name} took damage.`
//   }

  // Conversion To Class
  class CharacterStats extends GameObject {
      constructor (charac) {
        super(charac);
        this.hp = charac.hp;
        this.name =  charac.name;
      }
      takeDamage(){
        return `${this.name} took damage.`
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

// This keyword ,prototype methods
//   function Humanoid(huma) {
//     CharacterStats.call(this,huma);
//     this.faction = huma.faction
//     this.weapons = huma.weapons;
//     this.language = huma.language;
//     this.name = huma.name;
//     this.hp = huma.hp;
//     this.dimensions = huma.dimensions;
//     this.createdAt = huma.createdAt;
    
//   }
//   Humanoid.prototype = Object.create(CharacterStats.prototype);
//   Humanoid.prototype.greet = function() {
//     return`${this.name} offers a greeting ${this.language}`
//   }

//   Conversion to Class
  class Humanoid extends CharacterStats {
      constructor(huma) {
        super(huma);
        this.faction = huma.faction
        this.weapons = huma.weapons;
        this.language = huma.language;
        this.name = huma.name;
        this.hp = huma.hp;
        this.dimensions = huma.dimensions;
        this.createdAt = huma.createdAt;
      }
      greet() {
        return`${this.name} offers a greeting ${this.language}`
      }
  }
 
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test your work 
  
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