// Here we have a functioning solutoin to your challenge from yesterday.
// Today your goal is to refactor all of this code to use ES6 Classes.
// The console.log() statements should still return what is expected of them.

let reset = function(Hero, Villian){
  Hero.hp = 10;
  Villian.hp = 10;
}
class GameObject{
  constructor(options){
    this.createdAt = options.createdAt;
    this.dimensions = options.dimensions;
  }
  destroy(){
    return `${this.name} was removed from the game`;
  }
};

class CharacterStats extends GameObject{
  constructor(characterStatsOptions){
    super(characterStatsOptions);
    this.hp = characterStatsOptions.hp;
    this.name = characterStatsOptions.name;
  }
  takeDamage(damage){
    return `${this.name} took ${damage}.`;
  }

};

class Humanoid extends CharacterStats{
  constructor(humanoidOptions){
    super(humanoidOptions);
    this.faction = humanoidOptions.faction;
    this.weapons = humanoidOptions.weapons;
    this.language = humanoidOptions.language;
  }
  greet(){
    return `${this.name} offers a greeting in ${this.language}`
  }
  
}
/*********Hero********* */
class Hero extends Humanoid{
  constructor(heroOptions){
    super(heroOptions);
    this.special = heroOptions.special;
    this.specialDam = heroOptions.specialDam;
    this.parry = heroOptions.parry;
  }
  parryChance(){
    let chanceArr = [1,2,3,4,5,6,7,8,9,10];
    return this.parry = chanceArr[Math.round(Math.random() * 10 + 1)];
  }
  damageDealt(Villian){       //Villian takes damage
    Villian.hp -= this.specialDam;
    console.log(`${Villian.name} has taken ${this.specialDam} damage!`);
    return Villian.hp;
  }
}
/*********Villian********* */
class Villian extends Humanoid{
  constructor(villOptions){
    super(villOptions);
    this.mysticWep = villOptions.mysticWep;
    this.specialDam = villOptions.specialDam;
    this.metamorph = villOptions.metamorph;
  }
  damageDealt(Hero){
    if(Hero.parry < 5){      //Hero takes damage
    Hero.hp -= this.specialDam;
    console.log(`${Hero.name} has taken ${this.specialDam} damage!`);
    return Hero.hp;
    }
    else{
      return `${Hero.name} parries!`;
    }
  }
}
const gandalf = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 5,
    width: 5,
    height: 5
  },
  hp: 10,
  name: 'Gandalf',
  faction: 'The White',
  weapons: ['Glamdring'],
  language: 'All of them',
  special: 'blinding flash stab',
  specialDam: 2,
  parry: 0
});
const balrog = new Villian({
  createdAt: new Date(),
  dimensions: {
    length: 5,
    width: 5,
    height: 10
  },
  hp: 10,
  name: 'Balrog',
  faction: 'Maiar',
  weapons: ['Flame whip'],
  language: 'Ancient tongue',
  special: 'Flaming whip strike',
  specialDam: 4,
  parry: 0
});

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


gandalf.parryChance();
console.log(gandalf.damageDealt(balrog))
console.log(balrog.damageDealt(gandalf))


while(gandalf.hp > 0 && balrog.hp > 0){
gandalf.damageDealt(balrog);
balrog.damageDealt(gandalf);
}

if(gandalf.hp <= 0){
  console.log(gandalf.destroy());
  reset(gandalf,balrog);
}
if(balrog.hp <= 0){
  console.log(balrog.destroy());
  reset(gandalf,balrog);
}


// console.log(mage.createdAt); // Today's date
// console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
// console.log(swordsman.hp); // 15
// console.log(mage.name); // Bruce
// console.log(swordsman.faction); // The Round Table
// console.log(mage.weapons); // Staff of Shamalama
// console.log(archer.language); // Elvish
// console.log(archer.greet()); // Lilith offers a greeting in Elvish.
// console.log(mage.takeDamage()); // Bruce took damage.
//console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
