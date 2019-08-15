/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class GameObject {
    constructor(char) {
        this.createdAt = char.createdAt;
        this.name = char.name;
        this.dimensions = char.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game.`;
    }
}

class CharacterStats extends GameObject {
    constructor(stats) {
        super(stats);
        this.healthPoints = stats.healthPoints;
    }
    takeDamage() {
        return `${this.name} took damage.`;
    }
}
  

class Humanoid extends CharacterStats {
    constructor(attrs) {
        super(attrs);
        this.team = attrs.team;
        this.weapons = attrs.weapons;
        this.language = attrs.language;
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}.`
    }
}
  // Hero 
  
class Hero extends Humanoid {
    constructor(heroAttrs) {
        super(heroAttrs);
        this.defeatedVillian = heroAttrs.defeatedVillian;
    }
    isHere() {
        return `${this.name}, our hero, is here!`;
    }
    struckBack() {
        return `${this.name} uses ${this.weapons}, ${villian.name} moved, but was struck in the arm.`;
    }
    injured() {
        return `${this.name} used ${this.weapons} against ${villian.name}, health has fallen to ${this.defeatedVillian}, ${this.name} defeated ${villian.name}.`;
    };
}
  // Villian 

class Villian extends Humanoid {
  constructor(villianAttrs) {
    super(villianAttrs);
    this.damageHealth = villianAttrs.damageHealth;
  }
  appeared() {
    return `${this.name} appeared!`;
  }
  attacked() {
    return `${this.name} attacked ${hero.name} with ${this.weapons}, but ${hero.name} blocked the attack.`;
  }
  fallen() {
    return `${this.name} struck ${hero.name} with ${this.weapons}, health has fallen to ${this.damageHealth}.`;
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

  const hero = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 4,
      height: 6,
    },
    healthPoints: 15,
    defeatedVillian: (15 - 15),
    name: 'Dean',
    team: 'The Round Table',
    weapons: [
      'Knife',
      'Bow&Arrow'
    ],
    language: 'Common Tongue',
  });

  const villian = new Villian({
    createdAt: new Date(),
    dimensions: {
      length: 3,
      width: 6,
      height: 9,
    },
    healthPoints: 15,
    damageHealth: (15 - 10),
    name: 'Lucifer',
    team: 'The Evil Ones',
    weapons: [
      'Magic',
      'Sword'
    ],
    language: 'Latin',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  console.log(villian.appeared());
  console.log(hero.isHere());
  console.log(villian.attacked());
  console.log(hero.struckBack());
  console.log(villian.fallen());
  console.log(hero.injured());