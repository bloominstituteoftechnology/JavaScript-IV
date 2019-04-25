/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
// function GameObject(attributes) {
//     this.createdAt = attributes.createdAt;
//     this.name = attributes.name;
//     this.dimensions = attributes.dimensions;
// }
// GameObject.prototype.destroy = function () {
//     return `${this.name} was removed from the game.`;
// }
class GameObject {
    constructor(gameStats) {
        this.createdAt = gameStats.createdAt;
        this.name = gameStats.name;
        this.dimensions = gameStats.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game.`;
    }
}
/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
// function CharacterStats(stats) {
//     GameObject.call(this, stats); // inheriting GameObject properties.
//     this.healthPoints = stats.healthPoints;
// }
// // inherit destroy() from GameObject prototype
// CharacterStats.prototype = Object.create(GameObject.prototype);

// CharacterStats.prototype.takeDamage = function () {
//     return `${this.name} took damage.`;
// }
class CharacterStats extends GameObject {
    constructor(stats) {
        super(stats);
        this.healthPoints = stats.healthPoints;
    }
    takeDamage() {
        return `${this.name} took damage.`;
    }
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
// function Humanoid(attributes) {
//     CharacterStats.call(this, attributes); // gameobject => characterstats inherited into Humanoid.
//     this.team = attributes.team;
//     this.weapons = attributes.weapons;
//     this.language = attributes.language;
// }
// Humanoid.prototype = Object.create(CharacterStats.prototype); // inherit characterstats prototypes.
// Humanoid.prototype.greet = function () {
//     return `${this.name} offers a greeting in ${this.language}`;
// }
class Humanoid extends CharacterStats {
    constructor(attributes) {
        super(attributes);
        this.team = attributes.team;
        this.weapons = attributes.weapons;
        this.language = attributes.language;
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}`;
    }
}


/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

/** 
 * Stretch problems 
 */
// function Hero(attributes) {
//     Humanoid.call(this, attributes); // inherit Humanoid attributes.
//     this.heroVillian = attributes.heroVillian;
// }
// Hero.prototype = Object.create(Humanoid.prototype); // Hero inherits Humanoid proto's.

// Hero.prototype.attack = function (character) {
//     if (character.healthPoints > 0) {
//         character.healthPoints -= 2;
//         return `${this.name} attacked ${character.name} of the ${character.team} and reduced their health to ${character.healthPoints}`;
//     } else {
//         return `${this.name} killed ${character.name} of ${character.team}. \n${character.destroy()}`;
//     }
// }
class Hero extends Humanoid {
    constructor(props) {
        super(props);
        this.heroVillian = props.heroVillian;
    }
    attack(character) {
        if (character.healthPoints > 0) {
            character.healthPoints -= 2;
            return `${this.name} attacked ${character.name} of the ${character.team} and reduced their health to ${character.healthPoints}`;
        } else {
            return `${this.name} killed ${character.name} of ${character.team}. \n${character.destroy()}`;
        }
    }
}

// function Villain(attributes) {
//     Humanoid.call(this, attributes);
//     this.heroVillian = attributes.heroVillian;
// }
// Villain.prototype = Object.create(Humanoid.prototype);

// Villain.prototype.attack = function (character) {
//     if (character.healthPoints > 0) {
//         character.healthPoints -= 2;
//         return `${this.name} attacked ${character.name} of the ${character.team} and reduced their health to ${character.healthPoints}`;
//     } else {
//         return `${this.name} killed ${character.name} of ${character.team}. \n${character.destroy()}`;
//     }
// }

class Villain extends Humanoid {
    constructor(props) {
        super(props);
        this.heroVillian = props.heroVillian;
    }
    attack(character) {
        if (character.healthPoints > 0) {
            character.healthPoints -= 2;
            return `${this.name} attacked ${character.name} of the ${character.team} and reduced their health to ${character.healthPoints}`;
        } else {
            return `${this.name} killed ${character.name} of ${character.team}. \n${character.destroy()}`;
        }
    }
}
// Test you work by un-commenting these 3 objects and the list of console logs below:


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
const mario = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 10,
    name: 'Mario',
    team: 'Mushroom Kingdom',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish',
    heroVillian: 'hero'
});
const bowser = new Villain({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 10,
    name: 'Bowser',
    team: 'Forest Kingdom',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish',
    heroVillian: 'villain'
});
console.log(bowser.attack(mario));
console.log(bowser.attack(mario));
console.log(bowser.attack(mario));
console.log(bowser.attack(mario));
console.log(bowser.attack(mario));
console.log(bowser.attack(mario));
//console.log(mario.attack(bowser));
// console.log(healer);
// console.log(mage);
/*
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
*/