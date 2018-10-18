/* 
Prototype Refactor
1. Copy and paste your code or the solution from yesterday
2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.
*/
class GameObject {
  constructor(data) {
    this.createdAt = new Date();
    this.dimension = data.dimension;
  }

  destroy() {
    return `${this.name} was removed from the game.`;
  }

}

class CharacterStats extends GameObject {
  constructor(data) {
    super(data);
    this.hp = data.hp;
    this.name = data.name;
  }
  takeDamage() {
    return `${this.name} took damage.`;
  }
}

class Humanoid extends CharacterStats {
  constructor(data) {
    super(data);
    this.faction = data.faction;
    this.weapons = data.weapons;
    this.langauge = data.language;
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

class Hero extends Humanoid {
  constructor(data) {
    super(data);
    this.morals = data.morals;
    this.disposition = data.disposition;
  }

  tisButAScratch() {
    this.hp -= 3;
    if (this.hp <= 0) {return `${this.name} has been killed.`;}
    return `${this.name} has ${this.hp} health remaining.`;
  }

  prettyFlowers(foe) {
    foe.hp -= 6;
    if (foe.hp <= 0) {return `${this.name} has killed ${foe.name}!`;}
    return `${foe.name} has ${foe.hp} health remaining.`;
  }
}

const jeff = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 4,
    width: 1,
    height: 8,
  },
  hp: 15,
  name: 'Jeff',
  faction: 'DandyBoys',
  weapons: [
    'Hugs',
    'Kisses',
  ],
  language: 'Flowery Language',
  morals: 'exquisite',
  disposition: 'gentleman',
})

class sadBoy extends Humanoid {
  constructor(data) {
    super(data);
    this.level = data.level;
    this.disposition = data.disposition;
  }

  existentialAngst(foe) {
    foe.hp -= 3;
    if (foe.hp <= 2) {
    foe.disposition = 'sad';
    return `${foe.name} is now too ${foe.disposition} to go on living.`;
    }
    return `${this.name}'s sadness has crushed ${foe.name}'s will to live. ${foe.hp} health remaining.`;
  }

  youDontKnowMyPain() {
    this.disposition = 'miserable';
    this.hp -= 1;
    return `${this.name}'s self-pity has struck again, ${this.name}'s health is now down to ${this.hp}.`;
  }
}


const carl = new sadBoy({
  createdAt: new Date(),
  dimensions: {
    length: 4,
    width: 7,
    height: 3,
  },
  hp: 7,
  name: 'Carl',
  faction: 'Sad Boys',
  weapons: [
    'crippling depression',
    'soul-crushing regret',
  ],
  language: 'sadBoy twitter memes',
  morals: 'dead like his soul',
  disposition: 'apathetic',
})
