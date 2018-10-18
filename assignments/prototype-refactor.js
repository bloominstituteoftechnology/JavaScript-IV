/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

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
// function GameObject(daObject) {
//   this.createdAt = daObject.createdAt;
//   this.dimensions = daObject.dimensions;
// }

// GameObject.prototype.destroy = function() {
//   return `Object was removed from the game.`;
// };

class GameObject {
  constructor(daObject) {
    this.createdAt = daObject.createdAt;
    this.dimensions = daObject.dimensions;
  }
  destroy() {
    return `Object was removed from the game.`;
  }
}

/*
    === CharacterStats ===
    * hp
    * name
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
// function CharacterStats(stats) {
//   GameObject.call(this, stats); // not sure to inherit from GameObject.
//   this.hp = stats.hp;
//   this.name = stats.name;
// }

// CharacterStats.prototype = Object.create(GameObject.prototype);
// CharacterStats.prototype.takeDamage = function() {
//   return `${this.name} took damage.`;
// };

class CharacterStats extends GameObject {
  constructor(stats) {
    super(stats);
    this.hp = stats.hp;
    this.name = stats.name;
  }
  takeDamage() {
    return `${this.name} took damage.`;
  }
}

/*
    === Humanoid ===
    * faction
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
// function Humanoid(stats) {
//   CharacterStats.call(this, stats);
//   this.faction = stats.faction;
//   this.weapons = stats.weapons;
//   this.language = stats.language;
// }

// console.log(Humanoid.prototype, "look here");

// //Humanoid.prototype = Object.create(GameObject.prototype); // will test;
// Humanoid.prototype = Object.create(CharacterStats.prototype);
// Humanoid.prototype.greet = function() {
//   return `${this.name} offers a greeting in ${this.language}.`;
// };

class Humanoid extends CharacterStats {
  constructor(stats) {
    super(stats);
    this.faction = stats.faction;
    this.weapons = stats.weapons;
    this.language = stats.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}

/*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */

// Test you work by uncommenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  hp: 5,
  name: "Bruce",
  faction: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Toungue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  hp: 15,
  name: "Sir Mustachio",
  faction: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Toungue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  hp: 10,
  name: "Lilith",
  faction: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});
console.log(archer);

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

console.log(
  "////////////////////////////////// stretch goals ///////////////////// \n"
);

// function Villian(stats) {
//   Humanoid.call(this, stats);
//   this.searching = stats.searching;
//   this.power = stats.power;
// }

// Villian.prototype.say = function() {
//   return `Where is the ${this.searching}`;
// };

// Villian.prototype.dragonPalm = function(enemy) {
//   return (enemy.hp -= this.power);
// };

class Villian extends Humanoid {
  constructor(stats) {
    super(stats);
    this.searching = stats.searching;
    this.power = stats.power;
  }
  say() {
    return `Where is the ${this.searching}`;
  }
  dragonPalm(enemy) {
    return (enemy.hp -= this.power);
  }
}

// Hero
// function Hero(stats) {
//   Humanoid.call(this, stats);
//   this.searching = stats.searching;
//   this.power = stats.power;
// }

// Hero.prototype = Object.create(Humanoid.prototype);
// Hero.prototype.say = function() {
//   return `Do you know where I can find sailors at?`;
// };

// Hero.prototype.revenge = function() {
//   return `you killed my father ${this.revenge} I seek revenge against you`;
// };

// Hero.prototype.hazukiKick = function(enemy) {
//   return (enemy.hp -= this.power);
// };

class Hero extends Humanoid {
  constructor(stats) {
    super(stats);
    this.searching = stats.searching;
    this.power = stats.power;
  }
  say() {
    return `Do you know where I can find sailors at?`;
  }

  revenge() {
    return `you killed my father ${this.revenge} I seek revenge against you`;
  }

  hazukiKick(enemy) {
    return (enemy.hp -= this.power);
  }
}

const lanDi = new Villian({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  hp: 100,
  name: "Lan Di",
  faction: "Chi Yu Men",
  weapons: ["tiger style Kung Fu"],
  language: "Chinese and Common Toungue",
  searching: "Dragon Mirror",
  power: 20
});

const ryoHazuki = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  hp: 100,
  name: "Ryo Hazuki",
  faction: "Hazuki Clan",
  weapons: ["Hazuki style Jujuitsu"],
  language: "Japanese and Common toungue",
  revenge: "Lan Di",
  power: 20
});

//   document.querySelector(".hero h2").textContent = ryoHazuki.name;
//   document.querySelector(".hero .hp .alive").style.width = `${ryoHazuki.hp}%`;

//   document.querySelector(".villian h2").textContent = lanDi.name;
//   document.querySelector(".villian .hp .alive").style.width = `${lanDi.hp}%`;

//   document.querySelector(".hero button").addEventListener("click", function() {
//     document.querySelector(".villian").style.backgroundColor = "red";

//     setTimeout(function() {
//       ryoHazuki.hazukiKick(lanDi);
//       document.querySelector(".villian .hp .alive").style.width = `${lanDi.hp}%`;

//       if (lanDi.hp <= 0) {
//         document.querySelector(".villian").style.backgroundColor = "white";
//         document.querySelector(".hero").style.backgroundColor = "black";
//         document.querySelector(".hero h3").style.display = "block";

//         document.querySelector("button").style.display = "none";
//         document.querySelector(".villian button").style.display = "none";
//       } else document.querySelector(".villian").style.backgroundColor = "black";
//     }, 500);
//   });

//   document.querySelector(".villian button").addEventListener("click", function() {
//     document.querySelector(".hero").style.backgroundColor = "red";

//     setTimeout(function() {
//       lanDi.dragonPalm(ryoHazuki);
//       document.querySelector(".hero .hp .alive").style.width = `${ryoHazuki.hp}%`;

//       if (ryoHazuki.hp <= 0) {
//         document.querySelector(".hero").style.backgroundColor = "white";
//         document.querySelector(".villian").style.backgroundColor = "black";
//         document.querySelector(".villian h3").style.display = "block";

//         document.querySelector("button").style.display = "none";
//         document.querySelector(".villian button").style.display = "none";
//       } else document.querySelector(".hero").style.backgroundColor = "grey";
//     }, 500);
//   });
