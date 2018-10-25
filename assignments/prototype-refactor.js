/*

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
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

class GameObject {
  constructor(attributes) {
    this.createdAt = attributes.createdAt
    this.dimensions = attributes.dimensions
  }

  destroy() {
    return `${this.name} was removed from the game`
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
  constructor(attributes) {
    super(attributes)
    this.hp = attributes.hp
    this.name = attributes.name
    this.speed = attributes.speed
    this.strength = attributes.strength
  }

  takeDamage() {
    return `${this.name} took damage`
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
  constructor(attributes) {
    super(attributes)
    this.faction = attributes.faction
    this.weapons = attributes.weapons
    this.language = attributes.language
  }

  greet() {
    return `${this.name} offers a greeting in ${this.language}`
  }

  defeat() {
    return `${this.name} was defeated in battle`
  }

  victory() {
    return `${this.name} has triumphed over the enemy!`
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
  function criticalHitCal(attackPoints, critChance) {
    if(critChance >= 9) {
      return attackPoints *= 1.75;
    }
  }

class Hero extends Humanoid {
  constructor(attributes) {
    super(attributes)
    this.morals = attributes.morals
    this.selflessness = attributes.selflessness
  }

  rescue() {
    return `The hero, ${this.name} with their ${this.morals} rescued an innocent civilian`
  }

  quickSlash(target) {
    let attackPoints = Math.floor((Math.random() * this.strength) + 1);
    let critChance = Math.floor((Math.random() * 25) + 1);
    let crit = false;

    attackPoints = criticalHitCal(attackPoints, critChance);

    console.log(attackPoints, crit)
    console.log(`${this.name} attacked ${target.name}, ${attackPoints} damage`);

    if(crit) {
      console.log('CRITICAL HIT')
    }

    target.hp -= attackPoints;
  }
}

class Villian extends Humanoid {
  constructor(attributes) {
    super(attributes)
    this.minions = attributes.minions
  }

  evilLaugh() {
    return `${this.name} and his ${this.minions} minions laugh maniacally`
  }

  powerStrike(target) {
    let attackPoints = Math.floor((Math.random() * 15) + 1);
    let critChance = Math.floor((Math.random() * 20) + 1);
    let crit = false;

    if(critChance > 12) {
      attackPoints *= 1.5;
      let crit = true;
    }

    target.hp -= attackPoints;

    if(crit) {
      console.log('CRITICAL HIT')
    }

    console.log(`${this.name} attacked ${target.name}, ${attackPoints} damage`);
  }
}

  const king = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    hp: 25,
    speed: 22,
    strength: 10,
    name: 'King Niceguy',
    faction: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Toungue',
    morals: 'High Moral Code',
    selflessness: true
  });

  const nemesis = new Villian({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    hp: 25,
    speed: 18,
    name: 'Lord Baddude',
    faction: 'Dark Knights',
    weapons: [
      'Long Blade'
    ],
    language: 'Common Toungue',
    minions: 10
  });

console.log(king.rescue());
console.log(king.selflessness);

console.log(nemesis.evilLaugh());
console.log(nemesis.minions)

while(king.hp > 0 && nemesis.hp > 0) {
  kingSpeed = Math.floor((Math.random() * king.speed) + 1);
  nemesisSpeed = Math.floor((Math.random() * nemesis.speed) + 1);


  if(kingSpeed > nemesisSpeed) {
    let miss = Math.floor((Math.random() * 50) + 1)

    if(miss <= 15) {
      console.log(`${king.name} missed!`)
      continue;
    }


    king.quickSlash(nemesis);
    console.log(`${nemesis.hp} hp remaining`);

    if(nemesis.hp <= 0) {
      console.log(nemesis.defeat());
      console.log(king.victory());
      break;
    }

    nemesis.powerStrike(king);
    console.log(`${king.hp} hp remaining`);

    if(king.hp <= 0) {
      console.log(king.defeat());
      console.log(nemesis.victory());
      break;
    }
    else {
      let miss = Math.floor((Math.random() * 50) + 1)

      if(miss <= 15) {
        console.log(`${nemesis.name} missed!`)
        continue;
      }

      nemesis.powerStrike(king);
      console.log(`${king.hp} hp remaining`);

      if(king.hp <= 0) {
        console.log(king.defeat());
        console.log(nemesis.victory());
        break;
      }

      king.quickSlash(nemesis);
      console.log(`${nemesis.hp} hp remaining`);

      if(nemesis.hp <= 0) {
        console.log(nemesis.defeat());
        console.log(king.victory());
        break;
      }
    }
  }
}
