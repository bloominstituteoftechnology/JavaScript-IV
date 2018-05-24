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

class CharacterStats extends GameObject{
  constructor(characterStatsOptions) {
  super(characterStatsOptions);
  this.hp = characterStatsOptions.hp;
  this.name = characterStatsOptions.name;
}
takeDamage() {
  return `${this.name} took damage.`;  
}
}

class Humanoid extends CharacterStats{
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

// Stretch task:
  
 class Villain extends Humanoid {
  constructor(villainOptions) {
    super(villainOptions);
    this.punch = () => {
        this.hp -= 3;
        if (this.hp < 0) {
            return this.name + ' has lost 3 hit points. ' + this.name + ' was removed from the game';
            //code
        }
        else {
        return this.name + ' has lost 3 hit points.';
    }
    };
      this.stab = () => {
        this.hp -= 7;
        if (this.hp < 0) {
            return this.name + ' has lost 7 hit points. ' + this.name + ' was removed from the game';
            //code
        }
        else {
        return this.name + ' has lost 7 hit points';
    }
    };
    this.strike = () => {
        this.hp -= 5;
        if (this.hp < 0) {
            return this.name + ' has lost 5 hit points. ' + this.name + ' was removed from the game';
            //code
        }
        else {
        return this.name + ' has lost 5 hit points';
    }
    };
    this.defend = () => {
        this.hp -= 1;
        if (this.hp < 0) {
            return this.name + ' has lost 1 hit points. ' + this.name + ' was removed from the game';
            //code
        }
        else {
            return this.name + ' has lost 1 hit point.';
    }
    };
  }
 }
  
class Hero extends Humanoid {
    constructor(heroOptions) {
    super(heroOptions);
    this.zap = () => {
        this.hp -= 2;
        if (this.hp < 0) {
            return this.name + ' has lost 2 hit points. ' + this.name + ' was removed from the game';
            //code
        }
        else {
        return this.name + ' has lost 2 hit points.';
    }
    };
    this.stun = () => {
        this.hp -= 5;
        if (this.hp < 0) {
            return this.name + ' has lost 5 hit points. ' + this.name + ' was removed from the game';
            //code
        }
        else {
            return this.name + ' has lost 5 hit points';
    }
    };

        this.magicBlast = () => {
        this.hp -= 8;
        if (this.hp < 0) {
            return this.name + ' has lost 8 hit points. ' + this.name + ' was removed from the game';
            //code
        }
        else {
            return this.name + ' has lost 8 hit points';
    }
    };
    this.dodge = () => {
        this.hp -= 1;
        if (this.hp < 0) {
            return this.name + ' has lost 1 hit points. ' + this.name + ' was removed from the game';
            //code
        }
        else {
            return this.name + ' has lost 1 hit point.';
    }
    //code
  
    //code
  };
    }
}
  
  const sorceror = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    hp: 12,
    name: 'Tim',
    faction: 'None',
    weapons: [
      'Holy Hand Grenade of Antioch',
    ],
    language: 'Common Tongue',
  });

  const knight = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    hp: 15,
    name: 'Sir Not Appearing in this Film',
    faction: "The Knights Who Say 'Ni'",
    weapons: [
      'Claymore',
      'Shield',
    ],
    language: 'Ni',
  });
  
  console.log(sorceror.strike()); 
  console.log(sorceror.hp); 
  console.log(sorceror.name); 
  console.log(knight.faction); 
  console.log(sorceror.weapons); 
  console.log(knight.language); 
  console.log(knight.zap()); 
  console.log(knight.dodge()); 
  console.log(sorceror.punch()); 
console.log(sorceror.defend());
console.log(knight.stun());
console.log(sorceror.strike());
    