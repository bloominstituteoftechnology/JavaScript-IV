// Here we have a functioning solutoin to your challenge from yesterday.
// Today your goal is to refactor all of this code to use ES6 Classes.
// The console.log() statements should still return what is expected of them.

class GameObject {
  constructor(options) {
    this.createdAt = options.createdAt;
    this.dimensions = options.dimensions;
  }
  destroy () {
    return `Object was removed from the game.`;
  }
} // end of GameObject

class CharacterStats extends GameObject {
  constructor(characterStatsOptions) {
    super(characterStatsOptions);
    this.hp = characterStatsOptions.hp;
    this.name = characterStatsOptions.name;
  }
  takeDamage () {
    return `${this.name} took damage.`;
  }
}


class Humanoid extends CharacterStats {
  constructor(humanoidOptions) {
    super(humanoidOptions);
    this.faction = humanoidOptions.faction;
    this.weapons = humanoidOptions.weapons;
    this.language = humanoidOptions.language;
  }
  greet () {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  hp: 5,
  name: 'Bruce',
  faction: 'Mage Guild',
  weapons: ['Staff of Shamalama'],
  language: 'Common Toungue'
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  hp: 15,
  name: 'Sir Mustachio',
  faction: 'The Round Table',
  weapons: ['Giant Sword', 'Shield'],
  language: 'Common Toungue'
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  hp: 10,
  name: 'Lilith',
  faction: 'Forest Kingdom',
  weapons: ['Bow', 'Dagger'],
  language: 'Elvish'
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


class Villian extends Humanoid {
  constructor(villianAttributes) {
    super(villianAttributes);
    this.spells = villianAttributes.spells;
  }
  cast () {
    return `${this.name} casts a ${this.spells} spell.`;
  }
}

class Hero extends Humanoid {
  constructor(heroAttributes) {
    super(heroAttributes);
    this.abilities = heroAttributes.abilities;
  }
  ability () {
    return `${this.name} uses a ${this.abilities} ability.`;
  }
}

const giant = new Villian({
  createdAt: new Date(),
  dimensions: {
    length: 4,
    width: 2,
    height: 8,
  },
  hp: 25,
  name: 'Forest Giant',
  faction: 'Giant Clan',
  weapons: [
    'Club',
    'Fist',
  ],
  language: 'Giantish',
  spells: [
    'curse',
    'mock',
  ],
});

const barbarian = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 5,
    width: 3,
    height: 6,
  },
  hp: 20,
  name: 'Connan',
  faction: 'Barbarian Clan',
  weapons: [
    'sword',
    'sheild',
  ],
  language: 'Barbarish',
  abilities: 'defense',
});


console.log(giant.createdAt);
console.log(barbarian.createdAt);
console.log(barbarian.hp);
console.log(giant.name);
console.log(giant.faction);
console.log(barbarian.weapons);
console.log(giant.weapons);
console.log(giant.spells);
console.log(barbarian.abilities);
console.log(giant.language);
console.log(barbarian.greet());
console.log(giant.takeDamage());
console.log(giant.cast()); //Is there a way to define which of his spells he can cast?!?!
console.log(barbarian.ability());