/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/







// function Humanoid(hattributes) {
//     this.team = hattributes.team;
//     this.weapons = hattributes.weapons;
//     this.language = hattributes.language;
//     this.takeDamage = function takeDamage() {
//       return "Bruce took damage."
//     }
//     Characteristics.call(this, hattributes);
//   }


//   function Characteristics(cattributes) {
//     this.healthPoints = cattributes.healthPoints;
//     this.name = cattributes.name;
//     this.greet =function greet(){
//       return "Lilith offers a greeting in Elvish."
//     }
//     GameObject.call(this, cattributes)
//   }

//   function GameObject(gattributes) {
//     this.dimensions = gattributes.dimensions;
//     this.createdAt = gattributes.createdAt;
//     this.destroy = function destroy() {
//       return "Sir Mustachio was removed from the game."
//     }
//   }



class GameObject {
    constructor (gattributes) {
        this.dimensions = gattributes.dimensions;
        this.createdAt = gattributes.createdAt;
    }
    destroy() {
        return "Sir Mustachio was removed from the game."
      }
}

class Characteristics extends GameObject {
    constructor(cattributes) {
        super(cattributes);
        this.healthPoints = cattributes.healthPoints;
        this.name = cattributes.name;
    }
    greet(){
        return "Lilith offers a greeting in Elvish."
     }

}

class Humanoid extends Characteristics {
    constructor (hattributes) {
        super(hattributes)
        this.team = hattributes.team;
        this.weapons = hattributes.weapons;
        this.language = hattributes.language;
    }
    takeDamage() {
        return "Bruce took damage."
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