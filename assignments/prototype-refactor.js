/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

  //----------------GAME OBJECT---------------------
class GameObject{
    constructor(attributes){
        this.createdAt = attributes.createdAt;
        this.name = attributes.name;
        this.dimensions = attributes.dimensions;
    }  
    destroy() {
        return `${this.name} was removed from the game.`;
    } 
}

// function GameObject (attributes){
//     this.createdAt = attributes.createdAt;
//     this.name = attributes.name;
//     this.dimensions = attributes.dimensions;
// }

// GameObject.prototype.destroy = function(){
//     return `${this.name} was removed from the game.`;
// }




  //----------------CHARACTER STATS---------------------

class CharacterStats extends GameObject {
    constructor(statsAttributes){
        super(statsAttributes);
        this.healthPoints = statsAttributes.healthPoints;
    }
    takeDamage() {
        return `${this.name} took damage.`
    }
}//ends CharacterStats


//   function CharacterStats (statsAttributes){
//     GameObject.call(this, statsAttributes);//explicitly binding CharacterStats to GameObject
//     this.healthPoints = statsAttributes.healthPoints;
//   }

//   CharacterStats.prototype = Object.create(GameObject.prototype);

//   CharacterStats.prototype.takeDamage = function (){
//     return `${this.name} took damage.`
//   }




  //----------------HUMANOID---------------------

class Humanoid extends CharacterStats{
    constructor(humanoidAttributes){
        super(humanoidAttributes);
        this.team = humanoidAttributes.team;//this property and everything below are special attributes to Humanoid
        this.weapons = humanoidAttributes.weapons;
        this.language = humanoidAttributes.language;
    }
    greet(){
        return `${this.name} offers a greeting in ${this.language}`;
    }
}//Humanoid

  //   function Humanoid (humanoidAttributes){
//     CharacterStats.call(this, humanoidAttributes)//Explicitly binding Humanoid to CharacterStats
//     this.team = humanoidAttributes.team;//this property and everything below are special attributes to Humanoid
//     this.weapons = humanoidAttributes.weapons;
//     this.language = humanoidAttributes.language;
//   }

//   Humanoid.prototype = Object.create(CharacterStats.prototype);

//   Humanoid.prototype.greet = function(){
//     return `${this.name} offers a greeting in ${this.language}`
//   }




  //----------------HERO---------------------

class Hero extends Humanoid{
    constructor(heroAttributes){
        super(heroAttributes);
    }
    swordOfDawn(enemy){
        enemy.healthPoints = enemy.healthPoints -5;
        if (enemy.healthPoints <= 0) {
        return `Yor enemy was destroyed`;
        } else {
        return `A direct hit! ${enemy.takeDamage(enemy)} and only has ${enemy.healthPoints} hp remaining.`
        }
    }
}//hero


//   function Hero (heroAttributes){
//     Humanoid.call(this, heroAttributes);//explicitly bind Hero to Humanoid
//   }
//   Hero.prototype = Object.create(Humanoid.prototype);//tells Hero about humanoid prototypes
  
//   Hero.prototype.swordOfDawn = function (enemy){
//     enemy.healthPoints = enemy.healthPoints -5;
//     if (enemy.healthPoints <= 0) {
//       return `Yor enemy was destroyed`;
//       } else
//       return `A direct hit! ${enemy.takeDamage(enemy)} and only has ${enemy.healthPoints} hp remaining.`
//   };
  
  
  
  //----------------VILLAIN---------------------

class Villain extends Humanoid{
    constructor(villainAttributes){
        super(villainAttributes);
    }
    undeadWarrior(enemy){
        enemy.healthPoints = enemy.healthPoints -5;
        if (enemy.healthPoints <= 0) {
        return `Yor enemy was destroyed`;
        } else {
        return `A direct hit! ${enemy.takeDamage(enemy)} and only has ${enemy.healthPoints} hp remaining.`
        }
    }
    darkRitual(){
        this.healthPoints = this.healthPoints +3;
        return `${this.name} sacrificed one of his ghoul's and now has ${this.healthPoints}.`
    }

}

//   function Villain (villainAttributes){
//     Humanoid.call(this, villainAttributes);//explicitly bind Hero to Humanoid
//   }
//   Villain.prototype = Object.create(Humanoid.prototype);//tells Hero about humanoid prototypes
  
//   Villain.prototype.undeadWarrior = function (enemy){
//     enemy.healthPoints = enemy.healthPoints -5;
//     if (enemy.healthPoints <= 0) {
//       return `Your enemy was destroyed`;
//       } else
//       return `A direct hit! ${enemy.takeDamage(enemy)} and only has ${enemy.healthPoints} hp remaining.`
//   };
  
//   Villain.prototype.darkRitual = function (){
//     this.healthPoints = this.healthPoints +3;
//     return `${this.name} sacrificed one of his ghoul's and now has ${this.healthPoints}.`
//   };






  //----------------CHARACTERS---------------------
const Paladin = new Hero ({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 3,
        height: 3,
    },
    healthPoints: 21,
    name: 'Sir Paladin',
    team: 'Human',
    weapons: [
        'Long Sword',
    ],
    language: 'Common Tongue',
})

const theLich = new Villain ({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 4,
    },
    healthPoints: 20,
    name: 'The Lich',
    team: 'Undead',
    weapons: [
        'Frost Magic',
    ],
    language: 'Undead',
  })
  
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
    console.log(Paladin.swordOfDawn(theLich));
    console.log(theLich.darkRitual());
    console.log(theLich.undeadWarrior(Paladin));
    console.log(theLich.undeadWarrior(Paladin));
    console.log(theLich.undeadWarrior(Paladin));
    console.log(theLich.undeadWarrior(Paladin));
    console.log(theLich.undeadWarrior(Paladin));
    
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects 
        //which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
  
    
