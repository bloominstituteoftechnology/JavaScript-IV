/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
    constructor(features) {
        this.createdAt = features.createdAt;
        this.dimensions = features.dimensions;
        this.name = features.name;
    }
    destroy() {
        return `${this.name} was removed from the game.`;
    }

}

class CharacterStats extends GameObject {
    constructor(attributes) {
        super(attributes);
        this.hp = attributes.hp;
    }
    takeDamage() {
        return `${this.name} took damage.`;
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
        return `${this.name} offers a greeting in ${this.language}.`;
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


class Villian extends Humanoid {
    constructor(attributes) {
        super(attributes);
        this.isAlive = attributes.isAlive;
    }
    attacked() {
        this.hp -= 10;
        if (this.hp <= 0) {
            this.isAlive = false;
            return `Sorry ${this.name}, your health is ${this.hp}! You are dead!`;
        }
        return `${this.name} you have been attacked! Health: ${this.hp}`;
    }
}


class Hero extends Humanoid {
    constructor(attributes) {
        super(attributes);
        this.isAlive = attributes.isAlive;
    }
    attacked() {
        this.hp -= 10;
        if (this.hp <= 0) {
            this.isAlive = false;
            return `Sorry ${this.name}, your health is ${this.hp}! You are dead!`;
        }
        return `${this.name} you have been attacked! Health: ${this.hp}`;
    }
}

const HeroJon = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    hp: 100,
    name: 'Jon',
    faction: 'Winterfell',
    weapons: [
        'Valyrian Steel Sword',
        'Wolf',
    ],
    language: 'English',
    isAlive: true,
});

const VillianRamsey = new Villian({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    hp: 100,
    name: 'Ramsey',
    faction: 'The Dreadfort',
    weapons: [
        'Bow',
        'Sword',
    ],
    language: 'English',
    isAlive: true,
});

console.log(HeroJon.hp)
console.log(VillianRamsey.hp);
console.log(HeroJon.isAlive)
console.log(VillianRamsey.isAlive);
console.log(HeroJon.weapons)
console.log(VillianRamsey.isAlive);
console.log(HeroJon.weapons)
console.log(VillianRamsey.attacked());
console.log(VillianRamsey.attacked());
console.log(HeroJon.attacked());
console.log(HeroJon.attacked());
console.log(VillianRamsey.attacked());
console.log(VillianRamsey.attacked());
console.log(HeroJon.attacked());
console.log(VillianRamsey.attacked());
console.log(HeroJon.attacked());
console.log(VillianRamsey.attacked());
console.log(VillianRamsey.attacked());
console.log(VillianRamsey.attacked());
console.log(HeroJon.attacked());
console.log(HeroJon.attacked());
console.log(VillianRamsey.attacked());
console.log(VillianRamsey.attacked());