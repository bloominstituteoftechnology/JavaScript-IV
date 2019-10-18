/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

//GameObject Original code
// function GameObject(attribute){
//     this.createdAt = attribute.createdAt;
//     this.name = attribute.name;
//     this.dimensions = attribute.dimensions;
//   }
  
//   GameObject.prototype.destroy = function () {
//     return `${this.name} was removed from the game`
//   };

//GameObject refactor
class GameObject {
    constructor(gameAttribute) {
        this.createdAt = gameAttribute.createdAt,
            this.name = gameAttribute.name,
            this.dimensions = gameAttribute.dimensions
    }
    destroy() {
        return `${this.name} was removed from the game`;
    }
}

// CharacterStats Original Code

// function CharacterStats(attribute) {
//     GameObject.call(this,attribute);
//     this.healthPoints = attribute.healthPoints;
//   }
  
//   CharacterStats.prototype = Object.create(GameObject.prototype);
  
//   CharacterStats.prototype.takeDamage = function(){
//     return `${this.name} took damage`
//   }

//CharacterStats Refactor
class CharacterStats extends GameObject {
    constructor(charcAttr) {
        super(charcAttr);
        this.healthPoints = charcAttr.healthPoints
    }
    takeDamage() {
        return `${this.name} took damage`;
    }
}

// Humanoid Original Code

// function Humanoid(attribute) {
//     CharacterStats.call(this, attribute);
//     this.team = attribute.team;
//     this.weapons = attribute.weapons;
//     this.language = attribute.language;
//   }
  
//   Humanoid.prototype = Object.create(CharacterStats.prototype)
  
//   Humanoid.prototype.greet = function() {
//       return '${this.name} offers a greeting in ${this.language}'
//   }

//Humanoid Refactor

class Humanoid extends CharacterStats {
    constructor(humanAttr) {
        super(humanAttr);
        this.team = humanAttr.team,
        this.weapons = humanAttr.weapons,
        this.language = humanAttr.language
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}`;
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