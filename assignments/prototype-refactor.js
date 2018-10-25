/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/


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
  constructor(options) {
    super(options);
    this.hp = options.hp;
    this.name = options.name;
  }
  takeDamage() {
    return `${this.name} took damage.`;
  }
}



class Humanoid extends CharacterStats {
  constructor(options) {
    super(options);
    this.faction = options.faction;
    this.weapons = options.weapons;
    this.language = options.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`
  }
}


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    hp: 5,
    name: 'Bruce',
    faction: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Toungue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    hp: 15,
    name: 'Sir Mustachio',
    faction: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Toungue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 10,
    name: 'Lilith',
    faction: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
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
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!


//   function Villain(options) {
//     Humanoid.call(this, options);
//     // this.characterState = options.characterState;
//   }
  
//   Villain.prototype = Object.create(Humanoid.prototype);
//   Villain.prototype.constructor = Villain;

//   Villain.prototype.villainAttack = function(enemy){
//     enemy.hp -= Math.floor((Math.random() * 10) + 1);
//     console.log(`${this.name} attacked ${enemy.name}.`)
//     if (enemy.hp <= 0){
//       console.log(`${enemy.name} has been defeated!!!`)
//     } 
//   }
  
//   function Hero(options){
//     Humanoid.call(this, options);
//     // this.characterState = options.characterState;
//   }
  
//   Hero.prototype = Object.create(Humanoid.prototype);
//   Hero.prototype.constructor = Hero;

//   Hero.prototype.heroAttack = function(enemy){
//     enemy.hp -= Math.floor((Math.random() * 10) + 1);
//     console.log(`${this.name} attacked ${enemy.name} with ${this.weapons}.`)
//     if (enemy.hp <= 0){
//       console.log(`${enemy.name} has been defeated!!!`)
//     } 
//   }

//   const twilight = new Hero({
//     createdAt: new Date(),
//     dimensions: {
//       length: 2,
//       width: 1,
//       height: 1,
//     },
//     hp: 25,
//     name: 'Twilight Sparkle',
//     faction: 'The Land of Equestria',
//     weapons: [
//       'her brain',
//     ],
//     language: 'Common Tongue',
//   });

//   const tempest = new Villain({
//     createdAt: new Date(),
//     dimensions: {
//       length: 2,
//       width: 1,
//       height: 1,
//     },
//     hp: 30,
//     name: 'Tempest',
//     faction: 'Storm King Nation',
//     weapons: [
//       'her magical powers',
//     ],
//     language: 'Common Tongue',
//   });


// function fight(hero, villain) {
//   for (i = 0; i < 50; i++) {
//     if (villain.hp > 0 || hero.hp > 0) {
//       villain.villainAttack(hero);
//       hero.heroAttack(villain)
//     } 
//     if (villain.hp <= 0 || hero.hp <= 0) {
//       break
//     }
//   }
// }

// fight(twilight, tempest);
