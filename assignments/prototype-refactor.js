// Here we have a functioning solutoin to your challenge from yesterday.
// Today your goal is to refactor all of this code to use ES6 Classes.
// The console.log() statements should still return what is expected of them.

class GameObject{
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

class Hero extends Humanoid {
  constructor(args) {
    super(args);
    this.heroAttack = Math.floor((Math.random() * 7) + 1);
  }
}

class Villian extends Humanoid {
  constructor(args) {
    super(args);
    this.villianAttack = Math.floor((Math.random() * 5) + 1);
  }
}

const assassin = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 3,
    width: 1,
    height: 3
  },
  hp: 30,
  name: 'Ryu',
  faction: 'League of Assassins',
  weapons: [
    'Sword',
    'Dagger'
  ],
  language: 'Common Toungue'
});

const darkLord = new Villian({
  createdAt: new Date(),
  dimensions: {
    length: 4,
    width: 2,
    height: 5
  },
  hp: 40,
  name: 'Voldemort',
  faction: 'Evil',
  weapons: [
    'Dark Magic'
  ],
  language: 'Parseltongue'
});

function startEpicBattle(hero, villian) {
  let round = 1;
  while(hero.hp > 0 && villian.hp > 0) {
    hero.hp -= villian.villianAttack();
    villian.hp -= hero.heroAttack();
    console.log(`Round: ${round++}`);
    console.log(hero.takeDamage());
    console.log(`${hero.name}'s HP: ${hero.hp}`);
    console.log(villian.takeDamage());
    console.log(`${villian.name}'s HP: ${villian.hp}`);
  }
  if (hero.hp > 0) {
    return console.log(`${villian.destroy()} ${hero.name} defeated ${villian.name}!`)
  } else if (hero.hp < 0 && villian.hp < 0) {
    return console.log(`${hero.destroy()} ${villian.destroy()} Weird!`);
  }
  return console.log(`${hero.destroy()} ${hero.name} failed to defeat ${villian.name}!`)
}

startEpicBattle(assassin, darkLord);