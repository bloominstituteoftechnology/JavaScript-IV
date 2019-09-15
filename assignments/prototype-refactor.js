/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

//Game object

//function GameObject(gameObjectAttrs) {
  //this.createdAt = new Date();
  //this.name = gameObjectAttrs.name;
  //this.dimensions = gameObjectAttrs.dimensions;
  //this.destroy = function() {
    //return `${this.name} was removed from the game`;
  //};
//}

//Refactor

class GameObject {
       constructor(gameObjectAttrs) {
         this.createdAt = new Date();
         this.name = gameObjectAttrs.name;
         this.dimensions = gameObjectAttrs.dimensions;
    }
    
       destroy() {
         return this.name + " was removed from the game.";
     }

//Character stats

//function CharacterStats(characterStatsAttrs) {
  //GameObject.call(this, characterStatsAttrs);
  //this.healthPoints = characterStatsAttrs.healthPoints;
  //this.takeDamage = function() {
    //return this.name + " took damage.";
  //};
//}

//Refactor

class CharacterStats extends GameObject {
       constructor(characterStatsAttrs) {
         super(characterStatsAttrs);
         this.healthPoints = characterStatsAttrs.healthPoints;
       }
       takeDamage() {   
           return super.name + " took damage.";
       }
    }

//Humanoid
//function Humanoid(humanoidAttrs) {
  //CharacterStats.call(this, humanoidAttrs);
  //this.team = humanoidAttrs.team;
  //this.weapons = humanoidAttrs.weapons;
  //this.language = humanoidAttrs.language;
  //this.greet = function() {
    //return this.name + " offers a greeting in " + this.language;
  //};
//}

//Refactor

function Humanoid(humanoidAttrs) {
    CharacterStats.call(this, humanoidAttrs);
    this.team = humanoidAttrs.team;
    this.weapons = humanoidAttrs.weapons;
    this.language = humanoidAttrs.language;
    this.greet = function() {
      return this.name + " offers a greeting in " + this.language;
    };
  }
  

// Test your work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
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
