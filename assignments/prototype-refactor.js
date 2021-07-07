/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// function GameObject(gameAttr) {
//     this.createdAt = gameAttr.createdAt;
//     this.dimensions = gameAttr.dimensions;
// }

// GameObject.prototype.destroy = function () {
//     return `${this.name} was removed from game.`
// }

// REFACTOR BASE CLASS
class GameObject {
    constructor(gameAttr) {
        this.createdAt = gameAttr.createdAt;
        this.dimensions = gameAttr.dimensions;
    }
    destroy() {
        return `${this.name} was removed from game.`
    }
}

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

// function CharacterStats(characterStatsAttr) {
//     this.hp = characterStatsAttr.hp;
//     this.name = characterStatsAttr.name;
//     GameObject.call(this, characterStatsAttr);
// }

// CharacterStats.prototype = Object.create(GameObject.prototype);

// CharacterStats.prototype.takeDamage = function () {
//     return `${this.name} took damage.`
// }

//REFACTOR CHILD CLASS
class CharacterStats extends GameObject {
    constructor(characterStatsAttr) {
        super(characterStatsAttr);
        this.hp = characterStatsAttr.hp;
        this.name = characterStatsAttr.name;
    }
    takeDamage() {
        return `${this.name} took damage.`
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

// function Humanoid(humanoidAttr) {
//     this.faction = humanoidAttr.faction;
//     this.weapons = humanoidAttr.weapons;
//     this.language = humanoidAttr.language;
//     CharacterStats.call(this, humanoidAttr);
// }

// Humanoid.prototype = Object.create(CharacterStats.prototype);

// Humanoid.prototype.greet = function () {
//     return `${this.name} offers a greeting in ${this.language}.`
// }

//REFACTOR GRANDCHILD
class Humanoid extends CharacterStats {
    constructor(humanoidAttr) {
        super(humanoidAttr);
        this.faction = humanoidAttr.faction;
        this.weapons = humanoidAttr.weapons;
        this.language = humanoidAttr.language;
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}.`
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