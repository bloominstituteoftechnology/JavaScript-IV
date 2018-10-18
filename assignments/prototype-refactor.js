/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
    constructor(attributes) {
        this.createdAt = attributes.createdAt;
        this.dimensions = attributes.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game`;
    }
}

class CharacterStats extends GameObject{
    constructor(childAttributes) {
        super(childAttributes);
        this.hp = childAttributes.hp;
        this.name = childAttributes.name;
    }
    takeDamage() {
        return `${this.name} took damage`;
    }
}

class Humanoid extends CharacterStats{
    constructor(grandchildAttributes) {
        super(grandchildAttributes);
        this.faction = grandchildAttributes.faction;
        this.weapons = grandchildAttributes.weapons;
        this.language = grandchildAttributes.language;
    }
    greet() {
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

// Villian

class Villian extends Humanoid{
    constructor(greatGrandchildAttributes) {
        super(greatGrandchildAttributes);
    }
    maulsAttack(attacked) {
        attacked.hp -= 5;
        if (attacked.hp <= 0) {
            return attacked.destroy();
        }
        return `Remove 5 HP from attacked. The life of ${attacked.name} is ${attacked.hp}`;
    }
}


const witchKing = new Villian ({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 8,
    },
    hp: 22,
    name: 'Witch King of Angmar',
    faction: 'Wrath',
    weapons: [
        'Maul',
    ],
});


// Hero

class Hero extends Humanoid{
    constructor(greatGrandchildAttributes) {
        super(greatGrandchildAttributes);
    }
    danishAxeAttack(attacked) {
        attacked.hp -= 10;
        if (attacked.hp <= 0) {
            return attacked.destroy();
        }
        return `Remove 10 HP from attacked. The life of ${attacked.name} is ${attacked.hp}`;
    }
}


const aragorn = new Hero ({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 5,
    },
    hp: 15,
    name: 'Aragorn',
    faction: 'Ranger',
    weapons: [
        'Danish Axe',
    ],
});
//
console.log(witchKing.createdAt);
console.log(witchKing.dimensions);
console.log(aragorn.createdAt);
console.log(witchKing.maulsAttack(aragorn));
console.log(aragorn.danishAxeAttack(witchKing));
console.log(aragorn.danishAxeAttack(witchKing));
console.log(witchKing.maulsAttack(aragorn));
console.log(aragorn.danishAxeAttack(witchKing));