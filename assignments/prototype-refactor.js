/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance heirarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properites and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

class GameObject {
  constructor(gameObjectBits) {
    this.createdAt = gameObjectBits.createdAt;
    this.dimensions = gameObjectBits.dimensions;
  }

  destroy(){return `${this.name} was removed from the game.`};
};


class CharacterStats extends GameObject {
  constructor(characterStatBits) {
  super(characterStatBits);
  this.hp = characterStatBits.hp;
  this.name = characterStatBits.name;
  }

  takeDamage() {this.hp--; return `${this.name} took damage.`};
};

class Humanoid extends CharacterStats {
  constructor(humanoidBits){
    super(humanoidBits);
    this.faction = humanoidBits.faction;
    this.weapons = humanoidBits.weapons;
    this.language = humanoidBits.language;
  }

  greet() {return `${this.name} offers a greeting in ${this.language}`};
};

//Hero
class Hero extends Humanoid{
  constructor(heroBits){
    super(heroBits);
  }

  heroicCleave(villain){
    let damage = Math.floor(Math.random() * 10); 
    villain.hp -= damage; 
    return `${this.name} dealt ${damage} damage to ${villain.name}!`;
  };
};


//Villain
class Villain extends Humanoid {
  constructor(villainBits){
    super(villainBits);
  }

  villainousJab(hero){
    let damage = Math.floor(Math.random() * 10); 
    hero.hp -= damage; 
    return `${this.name} dealt ${damage} damage to ${hero.name}!`;
  };
}



// Test you work by uncommenting these 3 objects and the list of console logs below:


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


const chosenOne = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  hp: 500,
  name: 'The Chosen One',
  faction: 'Mage Guild',
  weapons: [
    'One True Staff of Shamalama', 'Shield'
  ],
  language: 'Common Toungue',
});

const randoMob = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  hp: 15,
  name: 'Humanoid Slime',
  faction: 'The Round Table',
  weapons: [
    'Gumball',
  ],
  language: 'Common Toungue',
});

let battle = function(hero, villain){

  let winner = hero.name;
  let round = 1;
  while(villain.hp > 0 && hero.hp > 0){
    console.log(`\nRound: ${round}\n---------\n ${hero.heroicCleave(villain)}`);
    console.log(villain.villainousJab(hero));
    console.log(`\n${hero.name}'s HP: ${hero.hp}`)
    console.log(`${villain.name}'s HP: ${villain.hp}\n---------`)
    round++;
  }
   console.log(`\n${winner} is victorious!`);
   if(villain.hp > 0) {winner=villain.name; console.log(`\n ${hero.destroy()}\n`);} else {console.log(`\n${villain.destroy()}\n`)};
}



battle(chosenOne, randoMob);

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

