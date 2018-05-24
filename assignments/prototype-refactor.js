// Here we have a functioning solutoin to your challenge from yesterday.
// Today your goal is to refactor all of this code to use ES6 Classes.
// The console.log() statements should still return what is expected of them.

class GameObject {
  constructor(options) {
    this.createdAt = options.createdAt;
    this.dimensions = options.dimensions;
  }
  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

class CharacterStats extends GameObject {
  constructor(characterStatsOptions) {
    super(characterStatsOptions);
    this.hp = characterStatsOptions.hp;
    this.name = characterStatsOptions.name;
  }
  takeDamage() {
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
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

class Villain extends Humanoid {
  constructor(villain) {
    super(villain);
  }
  bowShoot() {
    return Math.floor((Math.random() * 6));
  }
}

class Hero extends Humanoid {
  constructor(hero) {
    super(hero);
  }
  swordHit() {
    return Math.floor((Math.random() * 6));
  }
}

const robin = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 3,
  },
  hp: 30,
  name: 'Robin',
  faction: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Common tongue'
});

const ornn = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 3,
    width: 3,
    height: 4,
  },
  hp: 30,
  name: 'Ornn',
  faction: 'The Round Table',
  weapons: [
    'Sword',
    'Dagger',
  ],
  language: 'Common tongue'
});

function startBattle(hero, villain) {
  while(hero.hp > 0 && villain.hp > 0) {
    let currentHeroHp = hero.hp;
    let currentVillainHp = villain.hp;
    villain.hp -= hero.swordHit();
    let previousVillainHp = villain.hp;
    let villainDamageTaken = currentVillainHp - previousVillainHp; 
    hero.hp -= villain.bowShoot();
    let previousHeroHp = hero.hp;
    let heroDamageTaken = currentHeroHp - previousHeroHp;
    console.log(`${hero.name}'s HP: ${hero.hp} / Damage taken: ${heroDamageTaken}`);
    console.log(`${villain.name}'s HP: ${villain.hp} / Damage taken: ${villainDamageTaken}\n`);
  }
  if(hero.hp <= 0 && villain.hp <= 0) {
    console.log(`${hero.destroy()}\n${villain.destroy()}\n${hero.name} and ${villain.name} killed each other!`);
  } else if(hero.hp <= 0) {
    console.log(`${hero.destroy()}\n${villain.name} defeated ${hero.name} with ${villain.hp} hp left!`);
  } else {
    console.log(`${villain.destroy()}\n${hero.name} defeated ${villain.name} with ${hero.hp} hp left!`);
  }
}

startBattle(ornn, robin);
