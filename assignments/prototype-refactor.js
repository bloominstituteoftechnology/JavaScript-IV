// Here we have a functioning solution to your challenge from yesterday.
// Today your goal is to refactor all of this code to use ES6 Classes.
// The console.log() statements should still return what is expected of them.

// function GameObject(options) {
//   this.createdAt = options.createdAt;
//   this.dimensions = options.dimensions;
// }

// GameObject.prototype.destroy = function() {
//   return `Object was removed from the game.`;
// };
class GameObject {
  constructor(gameAttr) {
    let date = gameAttr.createdAt;
    this.createdAt = (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();
  }
  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

// function CharacterStats(characterStatsOptions) {
//   GameObject.call(this, characterStatsOptions);
//   this.hp = characterStatsOptions.hp;
//   this.name = characterStatsOptions.name;
// }

// CharacterStats.prototype = Object.create(GameObject.prototype);

// CharacterStats.prototype.takeDamage = function() {
//   return `${this.name} took damage.`;
// };
class CharacterStats extends GameObject {
  constructor(charAttr){
    super(charAttr);
    this.hp = charAttr.hp;
    this.name = charAttr.name;
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

// Humanoid.prototype = Object.create(CharacterStats.prototype);

// Humanoid.prototype.greet = function() {
//   return `${this.name} offers a greeting in ${this.language}.`;
// };
class Humanoid extends CharacterStats {
  constructor(humanAttr){
    super(humanAttr);
    this.faction = humanAttr.faction;
    this.weapons = humanAttr.weapons;
    this.language = humanAttr.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}


/*
  === Hero ===
*/
// function Hero(heroAttr) {
// 	Humanoid.call(this, heroAttr);
// }

// Hero.prototype = Object.create(Humanoid.prototype);

// Hero.prototype.heal = function(target) {
//   target.hp += 2;
//   return `${this.name} heals ${target.name} for 2hp`;
// }
class Hero extends Humanoid {
  constructor(heroAttr){
    super(heroAttr);
  }
  heal(target) {
    target.hp += 2;
    return `${this.name} heals ${target.name} for 2hp`;
  }
}

/*
  === Villain ===
*/
// function Villain(villainAttr) {
// 	Humanoid.call(this, villainAttr);
// }

// Villain.prototype = Object.create(Humanoid.prototype);

// Villain.prototype.facePie = function(target) {
//   target.hp -= 2;
// 	if (target.hp <= 0) {
// 		return target.destroy();
// 	} else {
// 		return `${this.name} expels a pie from hand and harms ${target.name} for 2hp`;
// 	}
// }
class Villain extends Humanoid {
  constructor(villainAttr){
    super(villainAttr);
  }
  facePie(target) {
    target.hp -= 2;
    if (target.hp <= 0) {
      return target.destroy();
    } else {
      return `${this.name} expels a pie from hand and harms ${target.name} for 2hp`;
    }
  }
}


// New Character Objects
const mage = new Hero({
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

const swordsman = new Villain({
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

// Adding heal ability
console.log("Archer's health: ", archer.hp); // 10
console.log(mage.heal(archer));
console.log("Archer's health: ", archer.hp); // 12

// Adding damage ability and destroy ability
console.log("Archer's health: ", archer.hp) // 12
console.log(swordsman.facePie(archer));
console.log(swordsman.facePie(archer));
console.log(swordsman.facePie(archer));
console.log(swordsman.facePie(archer));
console.log(swordsman.facePie(archer));
console.log(swordsman.facePie(archer));
console.log("Archer's health: ", archer.hp) // 0
