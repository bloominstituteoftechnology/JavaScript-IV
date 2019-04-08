/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/


class GameObject {
	constructor(goAttributes) {
		this.createdAt = goAttributes.createdAt;
		this.name = goAttributes.name;
		this.dimensions = goAttributes.dimensions;
	}

 destroy() {
 	return `${this.name} was removed from the game.`}
	}


class CharacterStats extends GameObject {
	constructor(csAttributes) {
		super(csAttributes);
		this.healthPoints = csAttributes.healthPoints;
	}

takeDamage() {
  return `${this.name} took damage.`
	}
}

 class Humanoid extends CharacterStats {
 	constructor(hAttributes) {
		super(hAttributes);
		this.team = hAttributes.team;
		this.weapons = hAttributes.weapons;
		this.language = hAttributes.language;
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