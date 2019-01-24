

//Prototype Refactor

//1. Copy and paste your code or the solution from yesterday
// function GameObject(pAttributes) {
//   this.createdAt = pAttributes.createdAt;
//   this.dimensions = pAttributes.dimensions;
//     this.length = pAttributes.length;
//     this.width= pAttributes.width;
//     this.height =pAttributes.height;
  
// };

// GameObject.prototype.destroy = function () {
//     return (`${this.name} was removed from the game.`);
//   }

//   function CharacterStats(cAttributes) {
//     this.healthPoints= cAttributes.healthPoints;
//     this.name= cAttributes.name;
//     GameObject.call(this, cAttributes)
//   }

//   CharacterStats.prototype = Object.create(GameObject.prototype);
// CharacterStats.prototype.takeDamage = function () {
//   return (`${this.name} took damage.`)
// }

// function Humanoid(gAttributes) {
//     this.team= gAttributes.team;
//     this.weapons= gAttributes.weapons;
//     this.language= gAttributes.language;
//     CharacterStats.call(this, gAttributes)
//     }

    
// Humanoid.prototype= Object.create(GameObject.prototype);
// Humanoid.prototype= Object.create(CharacterStats.prototype);
// Humanoid.prototype.greet = function() {
//   return (`${this.name} offers a greeting in ${this.language}.`)
// }

// const mage = new Humanoid({
//     createdAt: new Date('January 21, 2019'),
//     dimensions: {
//       length: 2,
//       width: 1,
//       height: 1,
//     },
//     healthPoints: 5,
//     name: 'Bruce',
//     team: 'Mage Guild',
//     weapons: [
//       'Staff of Shamalama',
//     ],
//     language: 'Common Tongue',
//   });

//   const swordsman = new Humanoid({
//     createdAt: new Date('January 21, 2019'),
//     dimensions: {
//       length: 2,
//       width: 2,
//       height: 2,
//     },
//     healthPoints: 15,
//     name: 'Sir Mustachio',
//     team: 'The Round Table',
//     weapons: [
//       'Giant Sword',
//       'Shield',
//     ],
//     language: 'Common Tongue',
//   });

//   const archer = new Humanoid({
//     createdAt: new Date('January 21, 2019'),
//     dimensions: {
//       length: 1,
//       width: 2,
//       height: 4,
//     },
//     healthPoints: 10,
//     name: 'Lilith',
//     team: 'Forest Kingdom',
//     weapons: [
//       'Bow',
//       'Dagger',
//     ],
//     language: 'Elvish',
//   });

 


//2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

class Parent  {
    constructor(pAttributes) {
    this.createdAt = pAttributes.createdAt;
  this.dimensions = pAttributes.dimensions;
    this.length = pAttributes.length;
    this.width= pAttributes.width;
    this.height =pAttributes.height;
    }

    destroy(){
        return (`${this.name} was removed from the game.`);  
    }
}

class Child extends Parent {
    constructor(childAttributes){
    super(childAttributes);  
    this.healthPoints= childAttributes.healthPoints;
    this.name= childAttributes.name;  
    } 
    takeDamage(){
        return (`${this.name} took damage.`);
    }
}

class GrandChild extends Child {
    constructor(gchildAttributes) {
        super(gchildAttributes);
        this.team= gchildAttributes.team;
        this.weapons= gchildAttributes.weapons;
        this.language= gchildAttributes.language;    
    }
    greet(){
        return (`${this.name} offers a greeting in ${this.language}.`); 
    }
}


const mage = new GrandChild({
    createdAt: new Date('January 21, 2019'),
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

  const swordsman = new GrandChild({
    createdAt: new Date('January 21, 2019'),
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

  const archer = new GrandChild({
    createdAt: new Date('January 21, 2019'),
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

