/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// function GameObject(gameAttr){
//   this.createdAt = gameAttr.createdAt;
//   this.dimensions = gameAttr.dimensions;
// }

// GameObject.prototype.destroy = function(){
//   return `${this.name} was removed from the game`;
// }

// function CharacterStats(charAttr){
//   GameObject.call(this, charAttr); 
//   this.hp = charAttr.hp;
//   this.name = charAttr.name;
// }

// CharacterStats.prototype = Object.create(GameObject.prototype) /

// CharacterStats.prototype.takeDamage = function(){
//   return `${this.name} took damage`;
// }

// function Humanoid(HumAttr){ 
//   CharacterStats.call(this, HumAttr);
//   this.weapons = HumAttr.weapons;
//   this.language = HumAttr.language;
// }

// Humanoid.prototype = Object.create(CharacterStats.prototype); 


// Humanoid.prototype.greet = function(){
//   return `${this.name} offers a greeting in ${this.language}`;
// }

class GameObject {
	constructor(attr) {
	  this.createdAt = attr.createdAt;
	  this.dimensions = attr.dimensions;
	}

	destroy() {
	  return `${this.name} was removed from the game`;
	}
}

// const asdf = new GameObject({createdAt: "may", dimensions: 3
// })
// console.log(asdf)

class CharacterStats extends GameObject {
	constructor(attr) {
		super(attr);
		this.hp = attr.hp;
		this.name = attr.name;
	}

	takeDamage() {
		return `${this.name} took damage`;
	}
}




class Humanoid extends CharacterStats {
	constructor(attr){
		super(attr);
		this.faction = attr.faction;
		this.weapons = attr.weapons;
	  this.language = attr.language;
	}

	greet(){
		return `${this.name} offers a greeting in ${this.language}`;
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

  console.log(swordsman)