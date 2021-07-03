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

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by uncommenting these 3 objects and the list of console logs below:
// GameObject constructor
class GameObject {
  constructor(attributes) {
    this.createdAt = attributes.createdAt;
    this.dimensions = attributes.dimensions;
  }
  destroy() {
    if (this.alive) this.alive = false;
    if (!this.name) return `Game object was removed from the game.`;
    else return `${this.name} has been vanquished.`;
  }

}

// CharacterStats constructor
class CharacterStats extends GameObject {
  constructor(attributes) {
    super(attributes);
    this.hp = attributes.hp;
    this.name = attributes.name;
    this.alive = true;
  }

  takeDamage() {
    if (!this.alive) return "He's dead, Jim.";
    let damage = diceRoll();
    this.hp -= damage;
    if (damage < 1) return `${this.name} shrugs it off.`;
    else if (this.hp <= 0) return this.destroy();
    else {
    return `${this.name} took ${damage} damage.`;
  }
  }

}


// Humanoid constructor
class Humanoid extends CharacterStats {
  constructor(attributes) {
    super(attributes);
    this.faction = attributes.faction;
    this.weapons = attributes.weapons;
    this.language = attributes.language;
  }

  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}

// Dice roll function
function diceRoll () {
  let roll = Math.random() * 10;
  return Math.round(roll);
}
console.log(diceRoll());

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

// Hero
class Hero extends Humanoid {
  constructor(attributes) {
    super(attributes);
    this.mp = attributes.mp;
    this.str = attributes.str;
  }

  strike(target) {
    if (!this.alive) return `You can't do that, you're dead!`;
    else if (!target.alive) return `You just going to hack at that corpse all day?`;
    else {
      if (diceRoll() > 4) return target.takeDamage();
      else return "Attack missed";
    }
  }
}

// Villain
class Villain extends Humanoid {
  constructor(attributes) {
    super(attributes);
    this.mp = attributes.mp;
    this.str = attributes.str;
  }

  fireball(target) {
    if (!this.alive) return `Dead wizards cast no spells`;
    else if (!target.alive) return `Hard to get him more burnt than that.`;
    else {
      if (this.mp < 3) {
        this.mp += 1;
        return `You do not have enough MP`;
      } else {
        this.mp -= 3;
        if (diceRoll() > 4) return target.takeDamage();
        else return "Attack missed";
      }
    }
  }
}

// Playing God

const heros = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 1,
    height: 4
  },
  hp: 18,
  name: "Heros",
  faction: "River Raiders",
  weapons: ["The Smasheroo"],
  language: "Esperanto",
  mp: 0,
  str: 10
})

const villos = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  hp: 13,
  name: "Villos",
  faction: "Order of No Quarter",
  weapons: ["Staff of Flambert"],
  language: "Argonian",
  mp: 17,
  str: 2
})
// Battle

for (let i = 0; i < 100; i++) {
  console.log(heros.strike(villos));
  console.log(villos.fireball(heros));
  if ((!heros.alive) || (!villos.alive)) break;
}
