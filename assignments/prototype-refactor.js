/*

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject(attributes) {
  this.createdAt = Date();
  this.name = attributes.name;
  this.dimensions = attributes.dimensions;
}

Object.prototype.destroy = function() {
  return `${this.name} was removed from the game.`
};

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(attributes) {
  GameObject.call(this, attributes);
  this.healthPoints = attributes.healthPoints;
}

Object.prototype.takeDamage = function() {
  return `${this.name} took damage.`
};

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
function Humanoid(attributes) {
  CharacterStats.call(this, attributes);
  this.team = attributes.team;
  this.weapons = attributes.weapons;
  this.language = attributes.language;
}

Object.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`
};

function Villain(attributes) {
  Humanoid.call(this, attributes);
}

Object.prototype.shadowBall = function() {
  if (this.name === 'Evil Person') {
    let HpChange = Math.ceil(Math.random() * 10);
    hero.healthPoints -= (HpChange);
    if (hero.healthPoints <= 0) {
      return `The villain has defeated the hero!`;
    }
    else {
      return `The ${this.name} conjures a shadowball and hurls it at the hero for ${HpChange} damage. The hero now has ${hero.healthPoints}hp remaining.`
    }
  }
  else {
    return `${this.name} cannot cast a shadowball.`
  }
};

function Hero(attributes) {
  Humanoid.call(this, attributes);
}

Object.prototype.basicAttack = function() {
  if (this.name === 'Hero Person'){
    villain.healthPoints -= 5;
    if (villain.healthPoints <= 0) {
      return `The hero has defeated the villain!`
    }
    else {
      return `The hero attacks the villain with his sword for 5 damage. The villain now has ${villain.healthPoints}hp remaining.`;
    }
  }
  else {
    return `${this.name} cannot perform a basic attack.`
  }
};

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

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

  const villain = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 1,
      height: 5,
    },
    healthPoints: 100,
    name: 'Evil Person',
    team: 'Evil Team',
    weapons: [
      'Staff of Evil'
    ],
    language: 'Demonic',
  });

  const hero = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 3,
      width: 3,
      height: 4,
    },
    healthPoints: 50,
    name: 'Hero Person',
    team: 'Hero Team',
    weapons: [
      'The Sword of a Thousand Truths'
    ],
    language: 'Common',
  })

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
  // console.log(villain.shadowBall());
  // console.log(hero.shadowBall());
  // console.log(villain.basicAttack());
  // console.log(hero.basicAttack());
  console.log(villain.shadowBall());
  console.log(villain.shadowBall());
  console.log(villain.shadowBall());
  console.log(villain.shadowBall());
  console.log(hero.shadowBall());
  console.log(hero.basicAttack());
  console.log(hero.basicAttack());
  console.log(hero.basicAttack());
  console.log(hero.basicAttack());
  console.log(hero.basicAttack());
  console.log(hero.basicAttack());
  console.log(hero.basicAttack());
  console.log(hero.basicAttack());
  console.log(hero.basicAttack());
  console.log(hero.basicAttack());
  console.log(villain.shadowBall());



  // Stretch task:
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!
