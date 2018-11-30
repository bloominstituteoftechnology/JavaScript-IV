/* 

Prototype Refactor

///////////////////////////////////// [GAME OBJECTS] ////////////////////////
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/


// function Animal(attributes) {
//     this.animalCommonName = attributes.animalCommonName;
//     this.weight = attributes.weight;
//     this.height = attributes.height;
//     this.food = attributes.food;
//   }
//    eat() {
//     console.log(`The ${this.animalCommonName} eats ${this.food}`);
//    }


function GameObject(parent){
    this.createdAt = parent.createdAt;
    this.dimensions = parent.dimensions;
  }
  
  deleted() {
    return `${this.name} was removed from the game`;
  }
  
  
  ///////////////////////////////////// [CHARACTER STATS] ////////////////////////
  /*
    === CharacterStats ===
    * healthPoints
    * name
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  
 
class CharacterStats extends GameObject {
  constructer (stats) {
  super(stats);
  this.healthPoints = stats.healthPoints;
  this.name = stats.name;
}
 manDown() {
  return `${this.name}  took damage`;
}
}
  
  
  ///////////////////////////////////// [HUMANOID] ////////////////////////
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
  constructor (statsChild) {
  super (statsChild);
  this.team = statsChild.team;
  this.weapons = statsChild.weapons;
  this.language = statsChild.language;
}
  
  Humanoid.prototype = Object.create(GameObject.prototype);
  
  Humanoid.prototype = Object.create(CharacterStats.prototype);
  
  Humanoid.prototype.greet = function() {
    return `${this.name}  offers a greeting in ${this.language}`
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
  
  
