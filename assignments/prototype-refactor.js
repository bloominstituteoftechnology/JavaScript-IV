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

// function GameObject(attributes) {
//     this.createdAt = attributes.createdAt;
//     this.dimensions = attributes.dimensions;
//   }
  
//   GameObject.prototype.destroy = function() {
//     return `${this.name} was removed from the game.`;
//   }
  
    class GameObject {
        constructor (attributes) {
            this.createdAt = attributes.createdAt;
            this.dimensions = attributes.dimensions;
        }
        destroy() {
            return `${this.name} was removed from the game.`;
        }
    }

  
  /*
    === CharacterStats ===
    * hp
    * name
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  
//   function CharacterStats(charStatsAttributes) {
//     GameObject.call(this, charStatsAttributes);
    
//     this.hp = charStatsAttributes.hp;
//     this.name = charStatsAttributes.name;
//   }
  
//   CharacterStats.prototype = Object.create(GameObject.prototype);
  
//   CharacterStats.prototype.takeDamage = function() {
//     return `${this.name} took damage.`;
//   }
  
class CharacterStats extends GameObject{
    constructor (charStatsAttributes) {
        super(charStatsAttributes);
        this.hp = charStatsAttributes.hp;
        this.name = charStatsAttributes.name;
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
   
//   function Humanoid (humanoidAttributes){
//     CharacterStats.call(this, humanoidAttributes);
  
//     this.faction = humanoidAttributes.faction;
//     this.weapons = humanoidAttributes.weapons;
//     this.language = humanoidAttributes.language;
//   }
  
//   Humanoid.prototype = Object.create(CharacterStats.prototype);
  
//   Humanoid.prototype.greet = function() {
//     return `${this.name} offers a greeting in ${this.language}.`;
//   }
  
class Humanoid extends CharacterStats {
    constructor (humanoidAttributes) {
        super(humanoidAttributes);
        this.faction = humanoidAttributes.faction;
        this.weapons = humanoidAttributes.weapons;
        this.language = humanoidAttributes.language;
    }
    greet () {
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
    
    //Villian
//   function Villian (villianAttributes){
//     Humanoid.call(this, villianAttributes);
  
//     this.special = villianAttributes.special;
//   }
  
//   Villian.prototype = Object.create(Humanoid.prototype);
  
  class Villian extends Humanoid{
    constructor (villianAttributes) {
        super(villianAttributes);
        this.special = villianAttributes.special;
    }
    activateSpecial() {
        return `${this.name} the ${this.faction} entices with the ${this.special}!!!`;
    }

  }



  
//   //Hero
//   function Hero (heroAttributes){
//     Humanoid.call(this, heroAttributes);
  
//     this.special = heroAttributes.special;
//   }
  
//   Hero.prototype = Object.create(Humanoid.prototype);

    class Hero extends Humanoid {
        constructor (heroAttributes) {
            super(heroAttributes);
            this.special = heroAttributes.special;
        }
        activateSpecial () {
            return `${this.name} blocks with ${this.special}!!!`;
        }
    }


  
  
   // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  
//   Villian.prototype.activateSpecial = function() {
//     return `${this.name} the ${this.faction} entices with the ${this.special}!!!`;
//   }
  
//   Hero.prototype.activateSpecial = function() {
//     return `${this.name} blocks with ${this.special}!!!`;
//   }
  
  // * Create two new objects, one a villian and one a hero and fight it out with methods!
  
    //Villian
    const herbert = new Villian({
      createdAt: new Date(),
      dimensions: {
        length: 8,
        width: 10,
        height: 400,
      },
      hp: 1000,
      name: 'Herbert',
      faction: 'Creepy Old Pervert',
      weapons: [
        'Land-Line',
      ],
      language: 'Whistle',
      special: 'Sweet, Melty, Ice Cream',
    });
    
    //Hero
    const chris = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 400,
        width: 2000000,
        height: 7,
      },
      hp: 600,
      name: 'Chris',
      faction: 'Normal-ish',
      weapons: [
        'Rolled-up NewsPaper',
      ],
      language: 'New England English',
      special: 'Pre-pubesant voice cracking and acne',
    });
  
    console.log(herbert.activateSpecial()); 
    console.log(chris.activateSpecial()); 
    
   
    