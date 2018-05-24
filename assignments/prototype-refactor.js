// Here we have a functioning solutoin to your challenge from yesterday.
// Today your goal is to refactor all of this code to use ES6 Classes.
// The console.log() statements should still return what is expected of them.
//
// function GameObject(options) {
//   this.createdAt = options.createdAt;
//   this.dimensions = options.dimensions;
// }
//
// GameObject.prototype.destroy = function() {
//   return `Object was removed from the game.`;
// };

class GameObject {
  constructor (options) {
      this.createdAt = options.createdAt;
      this.dimensions = options.dimensions;
  }

  destroy() {
    return `${this.name} was removed from the game`;
  }
}

// function CharacterStats(characterStatsOptions) {
//   GameObject.call(this, characterStatsOptions);
//   this.hp = characterStatsOptions.hp;
//   this.name = characterStatsOptions.name;
// }
//
// CharacterStats.prototype = Object.create(GameObject.prototype);
//
// CharacterStats.prototype.takeDamage = function() {
//   return `${this.name} took damage.`;
// };

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


// function Humanoid(humanoidOptions) {
//   CharacterStats.call(this, humanoidOptions);
//   this.faction = humanoidOptions.faction;
//   this.weapons = humanoidOptions.weapons;
//   this.language = humanoidOptions.language;
// }
//
// Humanoid.prototype = Object.create(CharacterStats.prototype);
//
// Humanoid.prototype.greet = function() {
//   return `${this.name} offers a greeting in ${this.language}.`;
// };

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


// Stretch goals re-factored from yesterday

class Villain extends Humanoid{
  constructor(villainOptions) {
    super(villainOptions);
  }
  eyeGouge(opponent) {
    let attack = Math.floor((Math.random() * 8) + 1);
    let damage = attack - opponent.defend();

    if(damage > 0)
    {
      opponent.hp -= damage;
      console.log(`${this.name} attacked ${opponent.name} for ${damage}!`);
    }
    if(opponent.hp <=0 )
    { console.log(opponent.destroy()); }
  }

  defend() {
    return Math.floor((Math.random() * 6) + 1);
  }

}



class Hero extends Humanoid {
  constructor(heroOptions) {
    super(heroOptions);
  }

  heroicSlash(opponent) {
    let attack = Math.floor((Math.random() * 6) + 1);
    let damage = attack - opponent.defend();
    if(damage > 0)
    {
      opponent.hp -= damage;
      console.log(`${this.name} attacked ${opponent.name} for ${damage}!`);
    }
    if(opponent.hp <=0 )
    { console.log(opponent.destroy()); }
  }

  defend() {
    return Math.floor((Math.random() * 6) + 1);
  }
}


const demon = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  hp: 15,
  name: 'Reptar',
  faction: 'The Legions of Hell',
  weapons: [
    'Sicle',
  ],
  language: 'Javascript',
});

const demonSlayer = new Hero ({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  hp: 15,
  name: 'Kevin',
  faction: 'Demon Slayer Community College',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Toungue',
});

while(demonSlayer.hp > 0)
{
  demonSlayer.heroicSlash(demon);
  if(demon.hp <= 0 )
  { break;  }
  demon.eyeGouge(demonSlayer);
}
