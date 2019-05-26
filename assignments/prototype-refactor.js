/* start 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// function GameObject(ele) {
//     this.createdAt = ele.createdAt;
//     this.dimensions = ele.dimensions;
//   };
  
//   GameObject.prototype.destroy = function() {
//     return `${this.name} was removed from the game.`;
//   };

class GameObject {
    constructor(attributes){
        this.createdAt = attributes.createdAt;
        this.dimensions = attributes.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game.`;
    }
}

// ------------------------------

//   function CharacterStats(ele) {
//     GameObject.call(this, ele);
//     this.hp = ele.hp;
//     this.name = ele.name;
//   };
  
//   CharacterStats.prototype = Object.create(GameObject.prototype);
  
//   CharacterStats.prototype.takeDamage = function() {
//     return `${this.name} took damage.`;
//   };

class CharacterStats extends GameObject {
    constructor(charAttributes) {
        super(charAttributes);
        this.hp = charAttributes.hp;
        this.name = charAttributes.name;
    }

    takeDamage() {
        return `${this.name} took damage.`;
    }
}

// ------------------------------

//   function Humanoid(ele) {
//     CharacterStats.call(this, ele);
//     this.faction = ele.faction;
//     this.weapons = ele.weapons;
//     this.language = ele.language;
//   };
  
//   Humanoid.prototype = Object.create(CharacterStats.prototype);
  
//   Humanoid.prototype.greet = function() {
//     return `${this.name} offers a greeting in ${this.language}.`;
//   };

class Humanoid extends CharacterStats {
    constructor(humanAttributes) {
        super(humanAttributes);
        this.faction = humanAttributes.faction;
        this.weapons = humanAttributes.weapons;
        this.language = humanAttributes.language;
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}.`;
    }
}
 
// ------------------------------

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
  
  
  console.log("_______________")
  console.log("Protoypes Start");
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



  // in class example
  // Base Class
/*
// Step 1: declare the class keyword
class Parent {
  // Step 2: create new constructor
  constructor(attributes) {
    this.age = attributes.age;
    this.name = attributes.name;
    this.location = attributes.location;
    this.phrase = attributes.phrase;
  }
  // Step 3: convert object.prototype into method syntax
  speak() {
    console.log(`${this.name} says ${this.phrase}`);
  }
}// parent

// extends creates the __proto__ chain
class Child extends Parent {
  constructor(childAttributes) {
    // Super allows me to gain access to the this items in the extended class
    super(childAttributes);
    this.toy = childAttributes.toy;
  }
  play() {
    console.log(`${this.name} plays with their ${this.toy}`);
  }
}

class GrandChild extends Child {
  constructor(gChildAttributes) {
    // Super allows me to gain access to the this items in the extended class
    super(gChildAttributes);
    this.presents = gChildAttributes.presents;
  }
  cry() {
    console.log(`${this.name} cries because they didn't like ${this.presents}`);
  }
}


const fred = new Parent({
  age: 35,
  name: 'Fred',
  location: 'Bedrock',
  phrase: 'Yabba Dabba Doo',
  toy: 'Rock club'
});

const willma = new Parent({
  age: 37,
  name: 'Willma',
  location: 'Bedrock',
  phrase: 'Fred!'
});

const pebbles = new Child({
  age: 27,
  name: 'Pebbles',
  location: 'Bedrock',
  phrase: 'Do not use your rock bat!',
  toy: 'Rock Car'
});

const bambamjr = new GrandChild({
  age: 2,
  name: 'bam bam jr',
  location: 'Bedrock',
  phrase: 'BAM BAM',
  toy: 'Rock Bat',
  presents: 'Rock Candy'
});

// console.log(fred);
// console.log(willma);

// console.log(pebbles);

// pebbles.play();
// pebbles.speak();

// fred.speak();
// willma.speak();

fred.play();

bambamjr.play();
bambamjr.speak();
bambamjr.cry();
*/