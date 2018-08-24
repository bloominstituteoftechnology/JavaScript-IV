// Here we have a functioning solution to your challenge from yesterday.
// Today your goal is to refactor all of this code to use ES6 Classes.
// The console.log() statements should still return what is expected of them.
/*
function GameObject(options) {
  this.createdAt = options.createdAt;
  this.dimensions = options.dimensions;
}

GameObject.prototype.destroy = function() {
  return `Object was removed from the game.`;
};
*/

// refactored GameObject
class GameObject {
  constructor(gameObject_attributes) {
    this.createdAt = gameObject_attributes.createdAt;
    this.dimensions = gameObject_attributes.dimensions;
  }

  destroy() {
    return `${this.name} was removed from the game`;
  }
}


/* function CharacterStats(characterStatsOptions) {
  GameObject.call(this, characterStatsOptions);
  this.hp = characterStatsOptions.hp;
  this.name = characterStatsOptions.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
};
*/

//refactored CharacterStats
class CharacterStats extends GameObject {
  constructor (characterStats_attributes) {
    super (characterStats_attributes);
    this.hp = characterStats_attributes.hp;
    this.name = characterStats_attributes.name;
  }

  takeDamage () {
    return `${this.name} took damage`;
  }
}

/*
function Humanoid(humanoidOptions) {
  CharacterStats.call(this, humanoidOptions);
  this.faction = humanoidOptions.faction;
  this.weapons = humanoidOptions.weapons;
  this.language = humanoidOptions.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
};
*/

//refactored Humanoid
class Humanoid extends CharacterStats {
  constructor (humanoid_attributes) {
    super(humanoid_attributes);
    this.faction = humanoid_attributes.faction;
    this.weapons = humanoid_attributes.weapons;
    this.language = humanoid_attributes.language;
  }

  greet () {
    return `${this.name} offers a greeting in ${this.language}`;
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
