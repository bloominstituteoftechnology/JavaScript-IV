/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/
class GameObject {
  constructor(attr) {
    this.createdAt = attr.createdAt;
    this.dimensions = attr.dimensions;
  }
  destroy(){
    return 'Object was removed from the game.';
  }
}

/*
/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
class CharacterStats extends GameObject{
  constructor(attr) {
    super(attr);
    this.hp = attr.hp;
    this.name = attr.name;
  }
  takeDamage() {
    return `${this.name} took damage.`;
  }
}


/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
class Humanoid extends CharacterStats {
  constructor(attr) {
    super(attr);
    this.faction = attr.faction;
    this.weapons = attr.weapons;
    this.language = attr.language;
  }
  // create greet prototype method
  greet() {
    return `${this.name} offers a greeting in ${this.language}`;
  }
}


/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by uncommenting these 3 objects and the list of console logs below:


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


// Stretch task: 
// * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villian and one a hero and fight it out with methods!
class Hero extends Humanoid {
  constructor(attr) {
    super(attr);
    this.health = 100;
  }
  
  greet() {
    console.log(`${this.name.toUpperCase()} is here to safe the day!`);
  }

  // let Hero attack its opponent
  blast(obj) {
    obj.health -= this.hp; // decrease the health value

    if (obj.hp > 2) {   // decrease the hp value with a minimum
      obj.hp--;
    }

    if (obj.health <= 0) {    // if opponent is defeated
      console.log(`You're DEAD, ${obj.name}`);
      obj.dead = new Date();
    } else {
      console.log(`Take that you filthy thing!!!`);
    }
  }
}


// Villian
class Villian extends Humanoid {
  constructor(attr) {
    super(attr);
    this.health = 100;
    this.dead = null;
  }

  greet() {
    console.log(`${this.name.toUpperCase()} wants to destroy it all`);
  }

  // let Villian to revive from dead if it hasn't been dead for more than 2 seconds
  revive(){
    if (this.dead !== null) {
      if (new Date() - this.dead < 5000) {
        this.health = 100;
        this.dead = null;
        console.log("I Come Back!!!");
      } else {
        console.log("I'm really DEAD!!");
      }
    } else {
      console.log("I can't die.. HA HA HA!!!" );
    }
  }

  // let Villian strikes its opponent
  strike(obj) {
    obj.health -= this.hp; // decrease the health value
    
    if (obj.health <= 0) {
      console.log("I AM THE KING OF THE GAME!!!!");
      obj.dead = new Date();
    } else {
      console.log(`I'll beat you ${obj.name}!!!`);
    }
  }
}


const hero = new Hero({createdAt: new Date(), dimensions: 12, hp: 35, name: 'Gandalf The Gray', faction: 'faction', weapons: ['arrow'], language: 'babaraba'});

const villian = new Villian({createdAt: new Date(), dimensions: 12, hp: 10, name: 'Saruman The White', faction: 'faction', weapons: ['arrow'], language: 'babaraba'});


console.log('\n\n Starting the Game');
hero.greet();
villian.greet();
hero.blast(villian);
console.log(`Villian's health: ${villian.health}`);
villian.strike(hero);
villian.strike(hero);
hero.blast(villian);
hero.blast(villian); /// defeated villian
// setTimeout(e => {
//   villian.revive();
//   hero.blast(villian);
//   hero.blast(villian);
//   hero.blast(villian);
//   setTimeout(e => {
//     villian.revive();
//   }, 7000);
// }, 4000);