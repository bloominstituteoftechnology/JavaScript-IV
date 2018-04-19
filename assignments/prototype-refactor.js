// Here we have a functioning solutoin to your challenge from yesterday.
// Today your goal is to refactor all of this code to use ES6 Classes.
// The console.log() statements should still return what is expected of them.

/*
  Object oriented design is commonly used in video games.  For this part of the assignment
  you will be implementing several classes with their correct inheritance heirarchy.

  In this file you will be creating three classes: GameObject, CharacterStats, Humanoid.  
  At the bottom of this file are 3 objects that all inherit from Humanoid.  Use the objects at the bottom of the page to test your classes.
  
  Each class has unique properites and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string 'Object was removed from the game.'
*/
class GameObject {
  constructor(obj) {
    this.createdAt = obj.createdAt;
    this.dimensions = obj.dimensions;
  }
  destroy() {
    return 'Object was removed from the game.';
  }
}

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
class CharacterStats extends GameObject {
  constructor(obj) {
    super(obj);
    this.hp = obj.hp;
    this.name = obj.name;
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
  constructor(obj) {
    super(obj);
    this.faction = obj.faction;
    this.weapons = obj.weapons;
    this.language = obj.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`
  }
}

// Villian Class
class Villian extends Humanoid {
  constructor(obj) {
    super(obj);
  }
  attack(obj) {
    obj.hp -= 3;
    obj.takeDamage();
    if (obj.hp <= 0) {
      return 'The hero has been slain.';
    } else {
      return `${obj.name} took 3 points of damage and now has ${obj.hp}hp left.`
    }
  }
}

// Hero Class
class Hero extends Humanoid {
  constructor(obj) {
    super(obj);
  }
  attack(obj) {
    obj.hp -= 5;
    obj.takeDamage();
    if (obj.hp <= 0) {
      obj.destroy();
      return 'The villian has been slain';
    } else {
      return `${obj.name} took 5 points of damage and now has ${obj.hp}hp left.`
    }
  }
}



/*
  * Inheritance chain: Humanoid -> CharacterStats -> GameObject
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

//Test you work by uncommenting these 3 objects and the list of console logs below:


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

const swordsman = new Villian({
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

const archer = new Hero({
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

console.log(archer.attack(swordsman));
console.log(swordsman.attack(archer));
console.log(archer.attack(swordsman));
console.log(archer.attack(swordsman));
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
  // * Create Villian and Hero classes that inherit from the Humanoid class.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!