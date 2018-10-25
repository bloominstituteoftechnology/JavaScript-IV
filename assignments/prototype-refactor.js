/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.
*/
class GameObject {
  constructor(atr) {
    this.createdAt = atr.createdAt;
    this.dimensions = atr.dimensions;
  }

  destroy() {
    return 'Object was removed form the game.';
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
  constructor(charAtr) {
    super(charAtr);
    this.hp = charAtr.hp;
    this.name = charAtr.name;
  }

  takeDamage() {
    return `${this.name} took damage.`
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
  constructor(humAtr) {
    super(humAtr);
    this.faction = humAtr.faction;
    this.weapons = humAtr.weapons;
    this.language = humAtr.language;
  }

  greet() {
    return `${this.name} offers a greeting in ${this.language}`;
  }

  attack(target) {
    target.hp --;
    if(target.hp === 0) {
      return target.death();
    }
    return `${this.name} attacks ${target.name} 
      ${target.name} has ${target.hp}hp left.`;
  }

  death() {
    return `${this.name} hath been slain!`;
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

  class Villian extends Humanoid { 
    constructor(villianAtr) {
      super(villianAtr);
      this.evil = true;
    }
  }


  class Hero extends Humanoid {
    constructor(heroAtr) {
      super(heroAtr);
      this.evil = false;
    }
  }

  
  const knight = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 15,
    name: 'Jobeth',
    faction: 'Forest Kingdom',
    weapons: [
      'Long-sword',
      'Shield',
    ],
    language: 'American',
  });

  const demon = new Villian({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 14,
    name: 'Rathmagia',
    faction: 'Hell Kingdom',
    weapons: [
      'Bad-axe',
    ],
    language: 'Foriegn',
  });

  console.log(demon.attack(knight));
  console.log(knight.attack(demon));
  console.log(mage.attack(demon));
  console.log(demon.attack(mage));
  console.log(knight.attack(demon));
  console.log(archer.attack(demon));
  console.log(swordsman.attack(demon));
  console.log(demon.attack(knight));
  console.log(demon.attack(mage));
  console.log(demon.attack(archer));
  console.log(demon.attack(swordsman));
  console.log(mage.attack(demon));
  console.log(knight.attack(demon));
  console.log(archer.attack(demon));
  console.log(swordsman.attack(demon));
  console.log(demon.attack(swordsman));
  console.log(demon.attack(knight));
  console.log(mage.attack(demon));
  console.log(archer.attack(demon));
  console.log(knight.attack(demon));
  console.log(swordsman.attack(demon));
  console.log(swordsman.attack(demon));