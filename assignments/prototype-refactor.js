class GameObject {                // Parent
  // always in strict mode
  constructor(options) {
    this.createdAt = options.createdAt;
    this.dimensions = options.dimensions;
  }
  // Methods
  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

class CharacterStats extends GameObject{      // Child; extends = Object.create
    // always in strict mode
  constructor(characterStatsOptions) {        
    super(characterStatsOptions)              // acts as .call & this
    this.hp = characterStatsOptions.hp;
    this.name = characterStatsOptions.name;
  }   // constructor ends
  // Methods     now methods are stored in class after the constructor function
  takeDamage() {
    return `${this.name} took damage.`;
  }
}

class Humanoid extends CharacterStats{    // GrandChild; extends = Object.create
    // always in strict mode
  constructor(humanoidOptions) {        
    super(humanoidOptions)              // acts as .call & this
    this.faction = humanoidOptions.faction;
    this.weapons = humanoidOptions.weapons;
    this.language = humanoidOptions.language;
  }
  // Methods
  greet() {
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
console.log(mage.weapons[0]); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.