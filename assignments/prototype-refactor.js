/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

* You're going to work with your prototypes assignment you built out yesterday.
* `Challenge:` **Convert** all of your constructors into ES6 Classes using the `class` and `extends` keywords. You should be able to run your same logs and they should build out the proper expected behaviors.

*/

//Code from yesterday//

class GameObject{
    constructor(attrs){
        this.createdAt = attrs.createdAt;
        this.name = attrs.name;
        this.dimensions = attrs.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game.`;
    };
}

class CharacterStats extends GameObject{        //extends == Class.call
    constructor(attrs){
        super(attrs);                           //super == Object.create(this. Class)
        this.healthPoints = attrs.healthPoints;
    }
    takeDamage(){
        return `${this.name} took damage. Derp`;
    }
    checkIfDead(){
        if (this.healthPoints <= 0){
            return true;
        }else{return false;}
    }
}


class Humanoid extends CharacterStats{
    constructor(attrs){
        super(attrs);
        this.team = attrs.team;
        this.weapons = attrs.weapons;
        this.language = attrs.language;
    }
    greet(){
        return `${this.name} offers a greeting in ${this.language}`;
    }
}


//----NEW OBJECTS!!!----//
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


// Stretch task: 
console.log(`----Begin Stretch Task-----`);

class UniqueChar extends Humanoid{
  constructor(attrs){
    super(attrs);
    this.damage = attrs.damage;
  }
  attack(obj){
    console.log(`${this.name} attacks ${obj.name} for ${this.damage} damage.`);
    return obj.healthPoints = obj.healthPoints - this.damage;
  }
}

const Villain = new UniqueChar({
    createdAt: new Date(),
    dimensions: {
      length: 2.5,
      width: 1.5,
      height: 5,
    },
    healthPoints: 60,
    name: 'Captain Thunder Sniper',
    team: 'The Upside Down',
    weapons: [
      'Insults',
      'Guilt',
    ],
    language: 'Meanie Speak',
    damage: 5,
});

const Hero = new UniqueChar({
    createdAt: new Date(),
    dimensions: {
      length: 3,
      width: 2,
      height: 6,
    },
    healthPoints: 50,
    name: 'Nifty Tiger',
    team: 'Jungle Book!',
    weapons: [
      'Claws',
      'Teeth',
      'Heroism'
    ],
    language: 'Tiger-People Something-or-Other',
    damage: 10,
});


//-----Hero vs. Villain fight-----//

//--Prints out Starting HealthPoints of both characters--//
console.log(`${Hero.name}'s health: ${Hero.healthPoints}; ${Villain.name}'s health : ${Villain.healthPoints}.`);


while(Hero.healthPoints > 0 && Villain.healthPoints > 0){
  var chance = Math.random()*10;  // random number between 0 and 10
  if(chance>=4){
    Hero.attack(Villain);
  }else{
    Villain.attack(Hero);
  }
  console.log(`${Hero.name}'s health: ${Hero.healthPoints}; ${Villain.name}'s health : ${Villain.healthPoints}.`);

}
if(Hero.healthPoints<0){
  console.log(Hero.destroy());  //Hero dies
}else{
  console.log(Villain.destroy()); //Villain dies
}