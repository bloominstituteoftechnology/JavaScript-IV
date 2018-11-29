/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
  constructor(attr) {
    this.createdAt = new Date();
    this.dimensions = attr.dimensions;
  }
  destroy() {
    return `${this.name} was removed from the game.`
  }
};

class CharacterStats extends GameObject {
  constructor(attr) {
    super(attr);
    this.healthPoints = attr.healthPoints;
    this.name = attr.name;
  }
  takeDamage() {
    return `${this.name} took damage.`;
  }
};

class Humanoid extends CharacterStats {
  constructor(attr) {
    super(attr);
    this.team = attr.team;
    this.weapons = attr.weapons;
    this.language = attr.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}`
  }  
}

// Villain & Hero Constructors

class Villain extends Humanoid {
  constructor(attr) {
  super(attr);  
  }
  slimeTime(target) {
    target.healthPoints -= 7;
    return `${this.name} hits ${target.name} with slime`;
  }
}

class Hero extends Humanoid {
  constructor(attr) {
    super(attr);
  }
  magicMissle(target) {
    target.healthPoints -= 4;
    return `${this.name} hits ${target.name} with magic missle`;
  }
}

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

const heroJim = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 18,
  name: 'Jim',
  team: 'Honorable Dudes',
  weapons: [
    'Sword',
    'Mace',
  ],
  language: 'Common Tongue',
  constitution: 'Hero',
});

const villainDan = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 3,
    height: 3,
  },
  healthPoints: 20,
  name: 'Dan',
  team: 'Bad News Fools',
  weapons: [
    'Spiked Bat',
    'Net',
  ],
  constitution: 'Villain',
});

// console.log(mage.createdAt); // Today's date
// console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
// console.log(swordsman.healthPoints); // 15
// console.log(mage.name); // Bruce
// console.log(swordsman.team); // The Round Table
// console.log(mage.weapons); // Staff of Shamalama
// console.log(archer.language); // Elvish
// console.log(archer.greet()); // Lilith offers a greeting in Elvish.
// console.log(mage.takeDamage()); // Bruce took damage.
// console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

function fight(hero, villain) {
  let round = 1;
  while(hero.healthPoints > 0 && villain.healthPoints > 0) {
    console.log('Round ' + round)
    round++;

    if(hero.healthPoints > 0) {
      console.log(`${hero.name} attacked. It was effective.`);
      hero.magicMissle(villain);

      if(villain.healthPoints <= 0) {
        console.log(hero.destroy());
      } else {
        console.log(villain.takeDamage(), `${villain.name} has ${villain.healthPoints} remaining health.`)
      }
    }
    
    if(villain.healthPoints > 0) {
      console.log(`${villain.name} attacked. It was effective.`);
      villain.slimeTime(hero);

      if(hero.healthPoints <= 0) {
        console.log(hero.destroy());
      } else {
        console.log(hero.takeDamage(), `${hero.name} has ${hero.healthPoints} remaining health.\n`)
      }
    }
  }
}

fight(heroJim, villainDan);