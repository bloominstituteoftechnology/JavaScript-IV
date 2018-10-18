class GameObject {
  constructor({ dimensions }) {
    this.createdAt = new Date().toString();
    this.dimensions = dimensions;
  }
  destroy() {
    const name = this.name ? this.name : 'Object';
    return `${name} was removed from the game.`;
  }
}

class CharacterStats extends GameObject {
  constructor(atrs) {
    super(atrs);
    this.hp = atrs.hp;
    this.name = atrs.name;
  }
  takeDamage(dmg) {
    this.hp -= dmg;
    return `${this.name} took damage.`;
  }
}

class Humanoid extends CharacterStats {
  constructor(atrs) {
    super(atrs);
    this.faction = atrs.faction;
    this.weapons = atrs.weapons;
    this.language = atrs.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
  taunt() {
    return `${this.name} taunts its attacker!`;
  }
}

const mage = new Humanoid({
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
  constructor(atrs) {
    super(atrs);
  };
  heavySwing(target) {
    console.log(`${this.name} takes a heavy swing at ${target.name}!`);
    console.log(target.takeDamage(5));
    return (target.hp < 1 ? target.destroy() : target.taunt());
  }
  massiveSwing(target) {
    console.log(`${this.name} takes a massive swing at ${target.name}!`);
    console.log(target.takeDamage(10));
    return (target.hp < 1 ? target.destroy() : target.taunt());
  }
}

class Villain extends Humanoid {
  constructor(atrs) {
    super(atrs);
  };
  summonImp(target) {
    console.log(`${this.name} summons an imp to attack ${target.name}!`);
    console.log(target.takeDamage(7));
    return (target.hp < 1 ? target.destroy() : target.taunt());
  }
  summonDragon(target) {
    console.log(`${this.name} summons a dragon to attack ${target.name}!`);
    console.log(target.takeDamage(15));
    return (target.hp < 1 ? target.destroy() : target.taunt());
  }
}

const hero = new Hero({
  dimensions: {
    length: 3,
    width: 4,
    height: 3
  },
  hp: 40,
  name: 'Gareth',
  faction: 'The Common Good',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const villain = new Villain({
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  hp: 15,
  name: 'Gigi',
  faction: 'The Common Evil',
  weapons: [
    'Great Staff',
    'Orb of Destruction',
  ],
  language: 'Common Tongue',
});

console.log(villain.summonDragon(hero)); // surprise attack
console.log(hero.heavySwing(villain)); // hero strikes back
console.log(villain.summonImp(hero)); // villain needs to recover for another dragon
console.log(hero.heavySwing(villain)); // hero strikes again
console.log(villain.summonDragon(hero)); // hero kills dragons on the daily just to bring home some food
console.log(hero.massiveSwing(villain)); // hero slays villain
