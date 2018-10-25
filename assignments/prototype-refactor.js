class GameObject {
  constructor(att) {
    this.createdAt = att.createdAt;
    this.dimensions = att.dimensions;
  }
  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

class CharacterStats extends GameObject {
  constructor(att) {
    super(att);
    this.hp = att.hp;
    this.name = att.name;
  }
  takeDamage() {
    return `${this.name} took damage.`;
  }
}

class Humanoid extends CharacterStats {
  constructor(att) {
    super(att);
    this.faction = att.faction;
    this.weapons = att.weapons;
    this.language = att.language;
  }
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

console.log(mage.createdAt);
console.log(archer.dimensions);
console.log(swordsman.hp);
console.log(mage.name);
console.log(swordsman.faction);
console.log(mage.weapons);
console.log(archer.language);
console.log(archer.greet());
console.log(mage.takeDamage());
console.log(swordsman.destroy());
