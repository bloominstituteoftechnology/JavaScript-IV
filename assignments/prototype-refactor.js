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
  constructor(gameObject) {
    this.createdAt = gameObject.createdAt;
    this.dimensions = gameObject.dimensions;
  }
  destroy() {
    return  `${this.name} was removed from the game.`;
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
  constructor(stats) {
    super(stats);
    this.hp = stats.hp;
    this.name = stats.name;
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
  constructor(human) {
    super(human);
    this.faction = human.faction;
    this.weapons = human.weapons;
    this.language = human.language;
    this.attack = human.attack;
  }

  greet() {
      return `${this.name} offers a greeting in ${this.language}.`;
  }

  fight(enemy) {
    enemy.hp -= this.attack;
    if (enemy.hp <= 0) {
      return enemy.destroy();
    } else
    return `${this.name} hits ${enemy.name} for ${this.attack} hp. ${enemy.name} has ${enemy.hp} hp remaining.`
    }
  }

  class Hero extends Humanoid {
    constructor(hero) {
        super(hero);
        this.healing = hero.healing;
    }

    heal() {
      this.hp += this.healing;
      return `${this.name} heals themself for ${this.healing} hp.`
    }
  }

  class Villain extends Humanoid {
    constructor(villain) {
        super(villain);
    }

    drain(enemy) {
      this.hp += this.attack;
      enemy.hp -= this.attack;
      return `${this.name} drains ${this.attack} hp from ${enemy.name}. ${this.name} now has ${this.hp} hp.`
    }
  }



/*
* Inheritance chain: GameObject -> CharacterStats -> Humanoid
* Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
* Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test your work by uncommenting these 3 objects and the list of console logs below:


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

const paladin = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 3,
    height: 4,
  },
  hp: 15,
  attack: 5,
  healing: 5,
  name: 'Light',
  faction: 'Heroes Guild',
  weapons: [
    'Mace',
    'Miracles',
  ],
  language: 'High Elf',
});

const darkKnight = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 3,
    height: 3,
  },
  hp: 15,
  attack: 5,
  name: 'Chaos',
  faction: 'Villains Guild',
  weapons: [
    'Katana',
    'Dark Magic',
  ],
  language: 'Blood Elf',
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

console.log(paladin.fight(darkKnight));
console.log(darkKnight.drain(paladin));
console.log(darkKnight.fight(paladin));
console.log(paladin.heal());
console.log(darkKnight.fight(paladin));
console.log(darkKnight.drain(paladin));
console.log(darkKnight.fight(paladin));

