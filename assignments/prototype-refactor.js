"use strict"
/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject{
    constructor(attributes) {
        this.createdAt = attributes.createdAt,
        this.name = attributes.name,
        this.dimensions = attributes.dimensions
    };
    destroy() {
        return `${this.name} was removed from the game`;
    }
}


class CharacterStats extends GameObject {
    constructor(stats) {
        super(stats);
        this.healthPoints = stats.healthPoints;
        this.attackPoints = stats.attackPoints;
    }
    takeDamage() {
        return `${this.name} took ${this.attackPoints} damage`;
    }
}


class Humanoid extends CharacterStats {
    constructor(args) {
        super(args);
        this.team = args.team;
        this.weapons = args.weapons;
        this.language = args.language;
    };

    greet() {
        return `${this.name} offers a greeting in ${this.language}`;
    }

    getHit(attacker) {
        this.healthPoints = this.healthPoints - attacker.attackPoints;
        if (this.healthPoints > 0) {
            return `${this.name} took ${attacker.attackPoints} points of damage he now has ${this.healthPoints} health left`
        }
        else {
            return `${this.name} took  ${attacker.attackPoints} points of damage he now has ${this.healthPoints} and is dead`
        }
    }

    attack(opponent) {
        return `${this.name} uses his ${this.weapons} to attack ${opponent.name} for ${this.attackPoints}`
    }
}


class EvilCharacter extends Humanoid {
    constructor(args) {
        super(args);
    }
    attack() {
        return `${this.name} uses his ${this.weapons[0]} to attack ${mage.name} for ${this.attackPoints}`
    }

    threaten() {
        return `I ${this.name} will destroy you!!!`
    }
}


/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1,
    },
    healthPoints: 5,
    attackPoints: 7,
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


const badGuy = new EvilCharacter({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 3
    },
    healthPoints: 15,
    attackPoints: 4,
    name: "Sir EVILTON",
    team: "THE GROUP OF EV1L",
    weapons: [
        "Dagger",
        "Feet",
    ],
    language: "Common Tongue",
})




// console.log(mage.createdAt); // Today's date
// console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
// console.log(swordsman.healthPoints); // 15
// console.log(mage.name); // Bruce
// console.log(swordsman.team); // The Round Table
// console.log(mage.weapons); // Staff of Shamalama
// console.log(archer.language); // Elvish
// console.log(archer.greet()); // Lilith offers a greeting in Elvish.
// console.log(mage.takeDamage()); // Bruce took damage.
// console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


console.log(badGuy.greet());
console.log(badGuy.threaten());
console.log(badGuy.attack());
console.log(mage.getHit(badGuy));
console.log(mage.attack(badGuy));
console.log(badGuy.getHit(mage));
console.log(mage.getHit(badGuy));
console.log(mage.destroy());
