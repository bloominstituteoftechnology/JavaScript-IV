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
class GameObject{
    constructor (gameAttributes) {
        this.createdAt = new Date('November 28, 2018 15:00:00');
        this.dimensions = gameAttributes.dimensions;
        }
    destroy() {
        return `${this.name} was removed from the game.`;
}
}

  // const tester = new GameObject({dimensions: 'who cares'});
  // console.log(tester.destroy());
  /*
    === CharacterStats ===
    * healthPoints
    * name
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
 class CharacterStats extends GameObject {
     constructor(characterAttributes) {
         super(characterAttributes);
         this.healthPoints = characterAttributes.healthPoints;
         this.name = characterAttributes.name;
     }
     takeDamage() {
        return `${this.name} took damage.`;
     }
 }
//   function CharacterStats(characterAttributes) {
//     GameObject.call(this, characterAttributes);
//     this.healthPoints = characterAttributes.healthPoints;
//     this.name = characterAttributes.name;
//     this.takeDamage = function() {
//       return `${this.name} took damage.`
//     }
//   }
  // const charTester = new CharacterStats({dimensions: 'who cares', name: "Dingus", healthPoints: 2});
  // console.log(charTester);
  // console.log(charTester.takeDamage());
  // console.log(charTester.destroy());
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
     constructor(humanoidAttributes) {
        super(humanoidAttributes);
        this.team = humanoidAttributes.team;
        this.weapons = humanoidAttributes.weapons;
        this.language = humanoidAttributes.language;
     }
     greet() {
        return `${this.name} offers a greeting in ${this.language}.`;
     }
 }
//    function Humanoid(humanoidAttributes) {
//     CharacterStats.call(this, humanoidAttributes);
//     this.team = humanoidAttributes.team;
//     this.weapons = humanoidAttributes.weapons;
//     this.language = humanoidAttributes.language;
//     this.greet = function() {
//       return `${this.name} offers a greeting in ${this.language}.`;
//     }
//    }
  //  const humanoidTester = new Humanoid({
  //    name: 'Dingus',
  //    team: "The testers",
  //    weapons: "Knowledge",
  //    language: "Armenian"
  //  });
  //  console.log(humanoidTester);
  //  console.log(humanoidTester.greet());
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
 class Villain extends Humanoid {
     constructor(villainAttributes) {
         super(villainAttributes);
     }
     screwYou(otherCharacter) {
        return `Screw you, ${otherCharacter.name}!`;
     }
     burn(opponent) {
        opponent.healthPoints -= 2;
        console.log(opponent.takeDamage());
        if (opponent.healthPoints <= 0) {
          console.log(opponent.destroy());
          alert(`${opponent.name} says "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"`);
        }
     }
 }
//   function Villain(villainAttributes) {
//     Humanoid.call(this, villainAttributes);
//     this.screwYou = function(otherCharacter) {
//       return `Screw you, ${otherCharacter.name}!`;
//     }
//     this.burn = function(opponent) {
//       opponent.healthPoints -= 2;
//       console.log(opponent.takeDamage());
//       if (opponent.healthPoints <= 0) {
//         console.log(opponent.destroy());
//         alert(`${opponent.name} says "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"`);
//       }
//     }
//   }
  
class Hero extends Humanoid {
    constructor(humanoidAttributes) {
        super(humanoidAttributes);
    }
    screwYou(otherCharacter) {
        return `Screw you, ${otherCharacter.name}!`;
    }
    banjo(opponent) {
        opponent.healthPoints -= 2;
        console.log(opponent.takeDamage());
        if (opponent.healthPoints <= 0) {
          console.log(opponent.destroy());
          alert(`${opponent.name} says "The banjo hurts so good!"`);
        }
    }
}

//   function Hero(heroAttributes) {
//     Humanoid.call(this, heroAttributes);
//     this.screwYou = function(otherCharacter) {
//       return `Screw you, ${otherCharacter.name}!`;
//     }
//     this.banjo = function(opponent) {
//       opponent.healthPoints -= 2;
//       console.log(opponent.takeDamage());
//       if (opponent.healthPoints <= 0) {
//         console.log(opponent.destroy());
//         alert(`${opponent.name} says "The banjo hurts so good!"`);
//       }
//     }
//   }
  const Ryan = new Villain({
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'fire'
    ],
    language: 'Common Tongue',
  
  });
  
    
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
  
    // console.log(mage.createdAt); // Today's date
    // console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    // console.log(swordsman.healthPoints); // 15
    // console.log(mage.name); // Bruce
    // console.log(swordsman.team); // The Round Table
    // console.log(mage.weapons); // Staff of Shamalama
    // console.log(archer.language); // Elvish
    // console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    // console.log(mage.takeDamage()); // Bruce took damage.
    // console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
    // console.log(dingusTester.screwYou(mage));
    // console.log(mage.healthPoints);
    // console.log(dingusTester.burn(mage));
    // console.log(mage.healthPoints);
    // console.log(dingusTester.burn(mage));
    // console.log(dingusTester.burn(mage));
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!