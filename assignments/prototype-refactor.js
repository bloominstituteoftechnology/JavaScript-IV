// Here we have a functioning solutoin to your challenge from yesterday.
// Today your goal is to refactor all of this code to use ES6 Classes.
// The console.log() statements should still return what is expected of them.

function GameObject(options) {
  this.createdAt = options.createdAt;
  this.dimensions = options.dimensions;
}

GameObject.prototype.destroy = function() {
  return `Object was removed from the game.`;
};

function CharacterStats(characterStatsOptions) {
  GameObject.call(this, characterStatsOptions);
  this.hp = characterStatsOptions.hp;
  this.name = characterStatsOptions.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
};

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

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  hp: 5,
  name: 'Thor',
  faction: 'Asgardian',
  weapons: [
    'Mjolnir',
  ],
  language: 'Native Toungue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  hp: 15,
  name: 'Deadpool',
  faction: 'Mutant',
  weapons: [
    'Swords',
    'Guns',
    'More Guns',
  ],
  language: 'Sarcasm',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  hp: 10,
  name: 'Joker',
  faction: 'Arkham Patient ',
  weapons: [
    'Bombs',
    'Guns',
    'Mob',
  ],
  language: 'English 1940s street slang',
});

console.log(mage.createdAt); 
console.log(archer.dimensions); 
console.log(swordsman.hp); 
console.log(swordsman.faction); 
console.log(mage.weapons); 
console.log(archer.language); 
console.log(archer.greet()); 
console.log(mage.takeDamage()); 
console.log(swordsman.destroy()); 
