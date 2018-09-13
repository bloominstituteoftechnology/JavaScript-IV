/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance heirarchy.
  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all inherit from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properites and methods that are defined in their block comments below:
*/
  

/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string 'Object was removed from the game.'
*/

function GameObject (attributes) {
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
}
GameObject.prototype.destroy = function () {return `${this.name} was removed from the game.`;};


/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats (statsAttributes) {
  GameObject.call(this, statsAttributes);
  this.hp = statsAttributes.hp;
  this.name = statsAttributes.name;
}
CharacterStats.prototype =
Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
};


/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid (humanoidAttributes) {
  CharacterStats.call(this, humanoidAttributes);
  this.faction = humanoidAttributes.faction;
  this.weapons = humanoidAttributes.weapons;
  this.language = humanoidAttributes.language;
}
Humanoid.prototype = 
Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}.`;};


/*
  * Inheritance chain: Humanoid -> CharacterStats -> GameObject
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

function Hero (heroAttributes) {
  Humanoid.call(this, heroAttributes);
  
}

Hero.prototype = 
Object.create(Humanoid.prototype);

Hero.prototype.swordSlash = function(){
  demonHp -= Math.floor(Math.random() * 100);
  if (heroHp > 0 && demonHp > 0){
      return (`${demon.name}'s hp has been sword slashed to ${demonHp}!`)
  }else if(demonHp < 1) {
      return `Hey man, the demon is already dead!`;
  }else{
    return `${highKnight.name} is already slain.`;
  }
}

function Villain (villainAttributes) {
  CharacterStats.call(this, villainAttributes);
  
}

Villain.prototype = 
Object.create(Humanoid.prototype);

Villain.prototype.curse = function(){
  heroHp -= Math.floor(Math.random() * 50);
  if (heroHp > 0 && demonHp > 0){
      return (`${highKnight.name} has been cursed to ${heroHp}!`);
  }else if(heroHp < 1){
      return `You've slain the High Knight already VILE DEMON!`;
    }else{
        return `The demon is DEAD!`;
  }
}




let demonHp = 66;
let heroHp = 25;




//Test you work by uncommenting these 3 objects and the list of console logs below:


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

const highKnight = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 8,
    width: 55,
    height: 4,
  },
  hp: 30,
  name: 'Dale the Most High Knight',
  faction: 'The Round Table',
  weapons: [
    'lance',
    'sword and shield',
    'mace'
  ],
  language: 'Kings English',
});
const demon = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: null,
    width: null,
    height: null
  },
  hp: 66,
  name: 'Ördög',
  faction: 'underworld',
  weapons: [
    'Curse',
    'Pestilence',
  ],
  language: 'none',
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
console.log(demon.curse());
console.log(highKnight.swordSlash());




// Stretch task: 
// * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villian and one a hero and fight it out with methods!