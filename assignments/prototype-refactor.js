 

//Prototype Refactor

// //1. Copy and paste your code or the solution from yesterday
// //GameObject Old code
// function GameObject(attributes) {
//   this.createdAt = attributes.createdAt;
//   this.name = attributes.name;
//   this.dimensions = attributes.dimensions;
// }
// GameObject.prototype.destroy = function () {
//   return `${this.name} was removed from the game.`;
// }

// // GameStats*** Old code
// function CharacterStats(attributes) {
//     GameObject.call(this, attributes);
//     this.healthPoints = attributes.healthPoints;
//   }
//   CharacterStats.prototype = Object.create(GameObject.prototype);

//   CharacterStats.prototype.takeDamage = function takeDamage () {
//     return `${this.name} took damage.`;
//   }


//   // Humanoid Old Code ***
//   function Humanoid(attributes) {
//     CharacterStats.call(this, attributes);
//     this.team = attributes.team;
//     this.weapons = attributes.weapons;
//     this.language = attributes.language;
//   }
  
//   Humanoid.prototype = Object.create(CharacterStats.prototype);
  
//   Humanoid.prototype.greet = function () {
//     return `${this.name} offers a greeting in ${this.language}.`
//   }


//2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.
//GameObject New code**

class GameObject {
    constructor(attributes) {
    this.createdAt = attributes.createdAt;
    this.name = attributes.name;
    this.dimensions = attributes.dimensions;
    }
    
    destroy() {
      console.log(`${this.name} was removed from the game.`);
    }
  }

// GameStats New code ***
class CharacterStats extends GameObject { //if doesnt work come back here
    constructor(attributes) {
       super(attributes);
      this.healthPoints = attributes.healthPoints;
    }
   takeDamage() {
     console.log(`${this.name} took damage.`);
   }
   
  }


  // Humanoid New code ***
  class Humanoid extends CharacterStats {
    
    constructor(attributes) {
        super(attributes);
    this.team = attributes.team;
    this.weapons = attributes.weapons;
    this.language = attributes.language;
    }
    
    greet() {
      console.log(`${this.name} offers a greeting in ${this.language}.`);
    }
  }




  // Test Code
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
  console.log('mage', mage.createdAt); // Today's date
  console.log('archer', archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log('swordsman', swordsman.healthPoints); // 15
  console.log('mage name', mage.name); // Bruce
  console.log('swordsman team', swordsman.team); // The Round Table
  console.log('mage weapons', mage.weapons); // Staff of Shamalama
  console.log('archer language', archer.language); // Elvish
  console.log('archer greet', archer.greet()); // Lilith offers a greeting in Elvish.
  console.log('mage takedamage', mage.takeDamage()); // Bruce took damage.
  console.log('swordsman detroy', swordsman.destroy()); // Sir Mustachio was removed from the game.
// 
  
