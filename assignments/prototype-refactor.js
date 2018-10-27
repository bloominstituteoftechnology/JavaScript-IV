
// Base class
// step 1: Declare the class keyword
class GameObject {
  // step 2: Create new constructor
  constructor(attributes) {
  this.createdAt = attributes.createdAt,
  this.dimensions= attributes.dimensions,
  this.name = attributes.name;
  }
  // step 3: convert object.prototype into method syntax
  destroy() {
    return Object `${this.name} was removed from the game`;
  }
} // GameObject




// extends creates _proto_ chain
class CharacterStats extends GameObject {
  constructor(stats) {
    // Super allows me to gain access to the this items in the base class
    super(stats);
    this.hp = stats.hp;
  }
  takeDamage() {
    return `${this.name} took damage`;
  }
}

class Humanoid extends CharacterStats {
  constructor(HumanAttrs) {
    super(HumanAttrs);
    this.faction = HumanAttrs.faction,
    this.weapons = HumanAttrs.weapons,
    this.language = HumanAttrs.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}`;
  }
}



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
