/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/
function GameObject(properties) {
    this.createdAt = properties.createdAt;
    this.dimensions = properties.dimensions;
}

GameObject.prototype.destroy = function () {
    return `${this.name} was removed from the game.`;
}

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(stats) {
    GameObject.call(this, stats);
    this.hp = stats.hp;
    this.name = stats.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function () {
    return `${this.name} took damage.`;
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
function Humanoid(character) {
    CharacterStats.call(this, character);
    this.faction = character.faction;
    this.weapons = character.weapons;
    this.language = character.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function () {
    return `${this.name} offers a greeting in ${this.language}.`
}

function Hero(tank) {
    Humanoid.call(this, tank);
    this.shield = tank.shield;
}

Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.taunt = function () {
    return `${this.name} wearing shining armor begins to taunt opponent with your momma jokes, like any good tank should`
}

function Villain(sleazyRollPlayer) {
    Humanoid.call(this, sleazyRollPlayer);
    this.invocation = sleazyRollPlayer.invocation;
}

Villain.prototype = Object.create(Humanoid.prototype);

Villain.prototype.cyborz = function () {
    return `${this.name} dons wizard hat and robe!`
}

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Stretch goals


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

const coder = new Villain({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 4,
        height: 2,
    },
    hp: 1,
    name: 'Ian',
    faction: 'Wanda B Hakorz',
    weapons: [
        'Hot Pocket',
        'DR Pepper',
    ],
    language: 'PHP',
});

const niceGuy = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 4,
        height: 2,
    },
    hp: 50,
    name: 'Asa',
    faction: 'Tanks R us',
    weapons: [
        'Confident Smile',
        'Great Hair',
    ],
    language: 'JavaScript',
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
console.log(coder.weapons);
console.log(coder.cyborz());
console.log(niceGuy.taunt());


  // Stretch task: 
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!