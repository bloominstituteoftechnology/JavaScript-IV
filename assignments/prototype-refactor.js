/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance heirarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properites and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/
//============== Constructor GameObject function =================
// function GameObject(attributes) {
//     this.createdAt = attributes.createdAt;
//     this.dimensions = attributes.dimensions;
// }

//========================== GameObject Class ====================
class GameObject {
  constructor(attributes) {
    this.createdAt = attributes.createdAt;
    this.dimensions = attributes.dimensions;
  }

  // =============== GameObject Class destroy method =============
  destroy() {
    return `${this.name} was removed from the game`;
  }
}

//================== GameObject Prototype method =================

// GameObject.prototype.destroy = function () {
//     return `${this.name} was removed from the game`;
// };

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
// ================ CharacterStats Constructor Function ============

// function CharacterStats(attributes) {
//     GameObject.call(this, attributes);
//     this.hp = attributes.hp;
//     this.name = attributes.name;
// }
// CharacterStats.prototype = Object.create(GameObject.prototype);

// CharacterStats.prototype.takeDamage = function () {
//     return `${this.name} took damage`;
// };

//============== CharacterStats Class ===============================
class CharacterStats extends GameObject {
  constructor(attributes) {
    super(attributes);
    this.hp = attributes.hp;
    this.name = attributes.name;
  }
  //============= CharacterStats Class takeDamage Method ==============
  takeDamage() {
    return `${this.name} took damage`;
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
// ====================== Humanoid Constructor Function ===================

// function Humanoid(attributes) {
//     CharacterStats.call(this, attributes);
//     this.faction = attributes.faction;
//     this.weapons = attributes.weapons;
//     this.language = attributes.language;
// }
// Humanoid.prototype = Object.create(CharacterStats.prototype);

// Humanoid.prototype.greet = function () {
//     console.log(`${this.name} offers a greeting in ${this.language}`);
// };

//============================ Humanoid Class ==============================
class Humanoid extends CharacterStats {
  constructor(attributes) {
    super(attributes);
    this.faction = attributes.faction;
    this.weapons = attributes.weapons;
    this.language = attributes.language;
  }
  // ================= Humanoid Class Methods ==============================
  greet() {
    console.log(`${this.name} offers a greeting in ${this.language}`);
  }

  heavyAttack(attacker, enemy) {
    this.attacker = attacker;
    this.enemy = enemy;
    console.log(`${attacker.name} dropped a heavy attack on ${enemy.name}`);
    if (enemy.hp === 0) {
      console.log(enemy.destroy());
    } else {
      console.log(`${enemy.takeDamage()} by 5 points`);
      enemy.hp -= 5;
      console.log(`${enemy.name} remaining Hp: ${enemy.hp}`);
    }
  }

  mediumAttack(attacker, enemy) {
    this.attacker = attacker;
    this.enemy = enemy;
    console.log(`${attacker.name} dropped a heavy attack on ${enemy.name}`);
    if (enemy.hp === 0) {
      console.log(enemy.destroy());
    } else {
      console.log(`${enemy.takeDamage()} by 5 points`);
      enemy.hp -= 2;
      console.log(`${enemy.name} remaining Hp: ${enemy.hp}`);
    }
  }

  lightAttack(attacker, enemy) {
    this.attacker = attacker;
    this.enemy = enemy;
    console.log(`${attacker.name} dropped a heavy attack on ${enemy.name}`);
    if (enemy.hp === 0) {
      console.log(enemy.destroy());
    } else {
      console.log(`${enemy.takeDamage()} by 5 points`);
      enemy.hp -= 1;
      console.log(`${enemy.name} remaining Hp: ${enemy.hp}`);
    }
  }
} // Humanoid class

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
    height: 1
  },
  hp: 5,
  name: "Bruce",
  faction: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Toungue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  hp: 15,
  name: "Sir Mustachio",
  faction: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Toungue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  hp: 10,
  name: "Lilith",
  faction: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
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

//=============================== Stretch task: Game ====================================================
/* Playable characters:
        mage, swordsman, 
        archer, warrior, goblin
*/
/* Possible attacks: 
        attacker.heavyAttack(attacker, enemy),
        attacker.mediumAttack(attacker, enemy),
        attacker.lightAttack(attacker, enemy)
*/

// * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.

class Hero extends Humanoid {
  constructor(attributes) {
    super(attributes);
  }
}

class Villian extends Humanoid {
  constructor(attributes) {
    super(attributes);
  }
}

// * Create two new objects, one a villian and one a hero and fight it out with methods!

const warrior = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  hp: 15,
  name: "Boromir",
  faction: "Gandor",
  weapons: ["Sword", "Shield", "Dagger"],
  language: "Sindar"
});

const goblin = new Villian({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  hp: 5,
  name: "Gollum",
  faction: "N/A",
  weapons: ["Scary face"],
  language: "English"
});
