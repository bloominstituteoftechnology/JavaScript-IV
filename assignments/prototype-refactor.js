'use strict';
const helper = require('./helper');

class GameObject {
    constructor(attributes) {
        this.createdAt = attributes.createdAt;
        this.dimensions = attributes.dimensions;
    }

    destroy(opponentName, damage, weapon) {
        return `${
            this.name
        } was killed by ${opponentName}  after taking ${damage} damage from ${weapon}.`;
    }
}

class CharacterStats extends GameObject {
    constructor(attributes) {
        super(attributes);
        this.hp = attributes.hp;
        this.name = attributes.name;
        this.alignment = attributes.alignment;
    }

    takeDamage(opponentName, damage, weapon) {
        this.hp -= damage;
        if (this.hp <= 0) {
            return this.destroy(opponentName, damage, weapon);
        } else {
            return `${
                this.name
            } was attacked by ${opponentName} with ${weapon} for ${damage} damage and now has ${
                this.hp
            } HP`;
        }
    }

    attack(target, weapon, dieNum) {
        let damage = helper.dice(...dieNum);
        return target.takeDamage(this.name, damage, this.weapons[weapon]);
    }
}

class Humanoid extends CharacterStats {
    constructor(attributes) {
        super(attributes);
        this.faction = attributes.faction;
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

// Test you work by uncommenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1
    },
    hp: helper.dice(6, 3),
    name: 'Bruce',
    faction: 'Mage Guild',
    weapons: ['Staff of Shamalama'],
    language: 'Common Toungue'
});

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2
    },
    hp: helper.dice(6, 5),
    name: 'Sir Mustachio',
    faction: 'The Round Table',
    weapons: ['Giant Sword', 'Shield'],
    language: 'Common Toungue'
});

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4
    },
    hp: helper.dice(6, 4),
    name: 'Lilith',
    faction: 'Forest Kingdom',
    weapons: ['Bow', 'Dagger'],
    language: 'Elvish'
});

const paladin = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 3,
        height: 6
    },
    hp: helper.dice(6, 5),
    name: 'Eragon',
    faction: 'Alagaesian Rebels',
    weapons: ['Dragon Heart Crystal'],
    language: 'Common Tongue'
});

const shade = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 1,
        height: 6
    },
    hp: helper.dice(6, 3),
    name: 'Durza',
    faction: 'Alagaesian Loyalists',
    weapons: ['Demon Soul'],
    language: 'Common Tongue'
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.hp); // 15
console.log(mage.name); // Bruce
console.log(swordsman.faction); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

while (paladin.hp > 0 && shade.hp > 0) {
    console.log(paladin.attack(shade, 0, [4, 2]));
    if (shade.hp > 0) {
        console.log(shade.attack(paladin, 0, [4, 2]));
    }
}
// Stretch task:
// * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villian and one a hero and fight it out with methods!
