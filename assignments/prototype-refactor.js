// Here we have a functioning solutoin to your challenge from yesterday.
// Today your goal is to refactor all of this code to use ES6 Classes.
// The console.log() statements should still return what is expected of them.

class GameObject {

  constructor(options) {
    this.createdAt = options.createdAt;
    this.dimensions = options.dimensions;
  }
  destroy() {
    return `Object was removed from the game.`;
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

//Stretch Goal
class Villain extends Humanoid {
  constructor(villainOptions) {
    super(villainOptions);
  }

  deadbeam(obj) {
    let damage = Math.ceil(Math.random()*3);
    //Remove hp from object when this function is called
    obj.hp -= damage;
  
    //Check object's hp, if it's <= 0 then call destroy() function
    if (obj.hp <= 0) {
      return `${obj.name} has no hp left. ${obj.destroy()}`;
    }
  
    //if not then return message showing how much damage was done.
    return `${this.name} has performed Dead Beam on ${obj.name}. ${obj.takeDamage()}(${damage} dmg). ${obj.name}'s remaining hp is ${obj.hp}.`
  }
}

//Create hero class
class Hero extends Humanoid {
  constructor(heroSkills) {
    super(heroSkills)
  }
  
  kamehameha(obj) {
    let damage = Math.ceil(Math.random()*3);
    //Remove hp from object when this function is called
    obj.hp -= damage;
  
    //Check object's hp, if it's <= 0 then call destroy() function
    if (obj.hp <= 0) {
      return `${obj.name} has no hp left. ${obj.destroy()}`;
    }
  
    //if not then return message showing how much damage was done.
    return `${this.name} has performed Dead Beam on ${obj.name}. ${obj.takeDamage()}(${damage} dmg). ${obj.name}'s remaining hp is ${obj.hp}.`
    }
}  

//Create 2 new characters villain and hero  
const villain = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  hp: 10,
  name: 'Cell',
  faction: 'Android',
  weapons: [
    'Dead Beam',
    'Ki Blast',
  ],
  language: 'Common Tongue',
});

const hero = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  hp: 10,
  name: 'Songoku',
  faction: 'Human',
  weapons: [
    'Martial Art',
    'Energy Blast',
  ],
  language: 'Common Tongue',
});

console.log(hero.kamehameha(villain));
console.log(villain.deadbeam(hero));
console.log(hero.kamehameha(villain));
console.log(villain.deadbeam(hero));
console.log(hero.kamehameha(villain));
console.log(villain.deadbeam(hero));
console.log(hero.kamehameha(villain));
console.log(villain.deadbeam(hero));