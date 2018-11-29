/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/


/*
  Object oriented design is commonly used in video games.  
  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid. 
   Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  


/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/


////////////////////////// GAME OBJECT ///////////////////////

class GameObject {
    constructor(attributes){
    this.createdAt = attributes.createdAt;
    this.dimensions = attributes.dimensions;
  
  }  
  
  destroy() {
    return `${this.name} was removed from the game`;
  }
} //G.O
  
  /*
    === GameObject ===
    * createdAt
    * dimensions (These represent the character's size in the video game)
    * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
  */
  
  ////////////////////////// CHARACTER STATS ///////////////////////
  
  class CharacterStats extends GameObject {
    constructor(charStats) {
    super(charStats);
    this.healthPoints = charStats.healthPoints;
    this.name = charStats.name;
  } 
  
    takeDamage() {
        return `${this.name} took damage`;
    }
  } //C.S



  /*
    === CharacterStats ===
    * healthPoints
    * name
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  
  
  ////////////////////////// HUMANOID ///////////////////////
  
  class Humanoid extends CharacterStats {
    constructor(innerChild){
    super(innerChild);
    this.team = innerChild.team;
    this.weapons = innerChild.weapons;
    this.language= innerChild.language;
  }
  
  // Only Humanoids can see this method, Parent, charStats, cannot!
        greet(){
             return `${this.name} offers a greeting in ${this.language}`;
  }
} // Humanoid
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
   
  
  ////////////////////////// STRETCH ///////////////////////
  
//   //VILLAIN
//   function Villain(badMan){
//     Humanoid.call(this, badMan);
//   }
  
//   //inherit from Humanoid
//   Villain.protoype= Object.create(Humanoid.prototype)
  
  
  
  
  // //Only for Villain
  // Villain.prototype.attack= function() {
  //     if( Hero.healthPoints = 0){
  //       return 'you have died!'
  //     }
  //     return 'you win!'
  // }
  
  
  // //HERO
  // function Hero(goodGuy){
  //   Villain.call(this, goodGuy);
  // }
  
  // //inherit from Villain
  // Hero.protoype= Object.create(Villain.prototype);
  
  // Hero.prototype.revive= function(addPoints) {
  //   Hero.healthPoints = 30;
  //     if( Hero.healthPoints = 0){
  //       return healthpoints + addPoints;
  //     }
  //     return 'you died!'
  // }
  
  
  
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
  
  
  ////////////////////////// STRETCH Objects ///////////////////////
  
  // const villain1 = new Humanoid({
  //   createdAt: new Date(),
  //   dimensions: {
  //     length: 2,
  //     width: 1,
  //     height: 1,
  //   },
  //   healthPoints: 30,
  //   name: 'ReallyBadguy',
  //   team: 'Mage Guild',
  //   weapons: [
  //     'Staff of Shamalama',
  //   ],
  //   language: 'Common Tongue',
  // });
  
  
  // CONSOLE LOGS
  
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
    // console.log(villain1.attack());
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!