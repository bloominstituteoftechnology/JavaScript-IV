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

// console.log(mage.createdAt); // Today's date
// console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
// console.log(swordsman.hp); // 15
// console.log(mage.name); // Bruce
// console.log(swordsman.faction); // The Round Table
// console.log(mage.weapons); // Staff of Shamalama
// console.log(archer.language); // Elvish
// console.log(archer.greet()); // Lilith offers a greeting in Elvish.
// console.log(mage.takeDamage()); // Bruce took damage.
// console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


class Villian extends Humanoid {
    constructor(attributes) {
        super(attributes);
        this.isAlive = attributes.isAlive;
    }

    attack(opponent) {
        let coinFlip = Math.floor(Math.random() * (2)) + 1; // 1 or 2
        let randomDamage = Math.floor(Math.random() * 11); // 0 -> 10 Damage       

        if (opponent.hp <= 0) {
            opponent.isAlive = false;
            return `Sorry ${opponent.name}, your health is ${opponent.hp}! You are dead! ${this.name} killed you!`;
        } else if (coinFlip === 2) {
            opponent.hp -= randomDamage;
            return `${opponent.name}, you have been attacked! Your health is now: ${opponent.hp}`;
        }  else {
            return `${this.name} you missed! ${opponent.name}'s health is: ${opponent.hp}`
        }
    }
}


class Hero extends Humanoid {
    constructor(attributes) {
        super(attributes);
        this.isAlive = attributes.isAlive;
    }
    attack(opponent) {
        let coinFlip = Math.floor(Math.random() * (2)) + 1; // 1 or 2
        let randomDamage = Math.floor(Math.random() * 11) + 10; // Damage between 20 and 10      

        if (opponent.hp <= 0) {
            opponent.isAlive = false;
            return `Sorry ${opponent.name}, your health is ${opponent.hp}! You are dead! ${this.name} killed you!`;
        } else if (coinFlip === 2) {
            opponent.hp -= randomDamage;
            return `${opponent.name}, you have been attacked! Your health is now: ${opponent.hp}`;
        }  else {
            return `${this.name} you missed! ${opponent.name}'s health is: ${opponent.hp}`
        }
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


console.log(HeroJon.attack(VillianRamsey));
console.log(VillianRamsey.attack(HeroJon));
console.log(HeroJon.attack(VillianRamsey));
console.log(VillianRamsey.attack(HeroJon));
console.log(HeroJon.attack(VillianRamsey));
console.log(VillianRamsey.attack(HeroJon));
console.log(HeroJon.attack(VillianRamsey));
console.log(VillianRamsey.attack(HeroJon));
console.log(HeroJon.attack(VillianRamsey));
console.log(VillianRamsey.attack(HeroJon));
console.log(HeroJon.attack(VillianRamsey));
console.log(VillianRamsey.attack(HeroJon));
console.log(HeroJon.attack(VillianRamsey));
console.log(HeroJon.attack(VillianRamsey));
console.log(VillianRamsey.attack(HeroJon));
console.log(HeroJon.attack(VillianRamsey));
console.log(VillianRamsey.attack(HeroJon));
console.log(HeroJon.attack(VillianRamsey));
