 
function GameObject(object) {
  this.createdAt = object.createdAt;
  this.dimensions = object.dimensions;
  }

  GameObject.prototype.destroy = function() {
    return `${this.name} was removed from the game.`;
  };

  class GameObject {
      constructor(object) {
          this.createdAt = object.createdAt;
          this.dimensions = object.dimensions;
      }

  };

//   function Animal(attributes) {
//     this.animalCommonName = attributes.animalCommonName;
//     this.weight = attributes.weight;
//     this.height = attributes.height;
//     this.food = attributes.food;
//   }
  
//   Animal.prototype.eat = function() {
//     console.log(`The ${this.animalCommonName} eats ${this.food}`);
//   }

// class Animal {
//     constructor(attributes) {
//       this.animalCommonName = attributes.animalCommonName;
//       this.weight = attributes.weight;
//       this.height = attributes.height;
//       this.food = attributes.food;
//     }
//     eat() {
//       console.log(`The ${this.animalCommonName} eats ${this.food}`);
//     }
//   }
  

// Dog.prototype = Object.create(Animal.prototype);

// Dog.prototype.speak = function() {
//   console.log(`${this.name} says: ${this.bark}`);
// }



  

//   class GameObject {
//       constructor()
//   }

// // class blank extends blank {
//     constructor(name) {
//         super();
//     }

// }

// const blank = new blank {
//     constructor() {

//     }
// }

function CharacterStats(gameStats) {
    GameObject.call(this, gameStats);
    this.healthPoints = gameStats.healthPoints;
    this.name = gameStats.name;
  
  }
  
  CharacterStats.prototype = Object.create(GameObject.prototype);
  
  CharacterStats.prototype.takeDamage = function() {
    return `${this.name} took damage.`;
  
  };

  
  function Humanoid (gameHumanoid) {
    this.team = gameHumanoid.team;
    this.weapons = gameHumanoid.weapons;
    this.language = gameHumanoid.language;
  
    CharacterStats.call(this, gameHumanoid);
  }
  
  Humanoid.prototype = Object.create(CharacterStats.prototype);
  
  Humanoid.prototype.greet = function() {
    return `${this.name} offers a greeting in ${this.language}`;
  
  
  };
  
  
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
  


//2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

