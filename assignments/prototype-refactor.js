//Prototype Refactor

//1. Copy and paste your code or the solution from yesterday

// GameObject

class GameObject {
    constructor(attributes) {
        this.createdAt = attributes.createdAt;
        this.dimensions = attributes.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game`;
    }
}

// //CharacterStats

class CharacterStats extends GameObject {
    constructor(charAttributes) {
        super(charAttributes);
        this.healthPoints = charAttributes.healthPoints;
        this.name = charAttributes.name;
    }
    takeDamage() {
        return `${this.name} took damage.`
    }
}

// // Humanoid

class Humanoid extends CharacterStats {
    constructor(humanAttributes) {
        super(humanAttributes);
        this.team = humanAttributes.team;
        this.weapons = humanAttributes.weapons;
        this.language = humanAttributes.language;
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}`
    }
}


// // Hero constructor

class Hero extends Humanoid {
    constructor(heroAttributes) {
        super(heroAttributes);
        this.damageAmount = heroAttributes.damageAmount;
    }
    doDamage(otherCharacter) {
        otherCharacter.healthPoints -= this.damageAmount;
        if (otherCharacter.healthPoints <= 0) {
            return otherCharacter.destroy();
        }
        console.log(`${this.name} attacks ${otherCharacter.name} for ${this.damageAmount} damage and leaves them with ${otherCharacter.healthPoints} health points!`)
    }
}

class Villain extends Hero {
    constructor(villainAttributes) {
        super(villainAttributes);
        this.specialDamage = villainAttributes.specialDamage;
    }
    specialAttack(otherCharacter) {
        otherCharacter.healthPoints -= this.specialDamage;
        console.log(`${this.name} attacks ${otherCharacter.name} with a special attack for ${this.specialDamage} damage and leaves ${otherCharacter.name} with ${otherCharacter.healthPoints} health points!`)
        if (otherCharacter.healthPoints <= 0) {
            otherCharacter.destroy();
        }
    }
}

// // Characters 

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

// Stretch task: 

const theHero = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 3,
        width: 2,
        height: 4,
    },
    healthPoints: 15,
    name: 'Kieran',
    team: 'The Hero',
    weapons: [
        'Bow and Arrow',
        'Dagger',
    ],
    language: 'Common Tongue',
    damageAmount: 5
});

const theVillain = new Villain({
    createdAt: new Date(),
    dimensions: {
        length: 4,
        width: 4,
        height: 7,
    },
    healthPoints: 15,
    name: 'The Masked Villain, Madvillain',
    team: 'Czarface',
    weapons: [
        'Verses',
        'Bombs',
    ],
    language: 'Common Tongue',
    damageAmount: 3,
    specialDamage: 5
});

//Start fight!
theHero.doDamage(theVillain);
theVillain.doDamage(theHero);
theVillain.specialAttack(theHero);
theHero.doDamage(theVillain);
theVillain.doDamage(theHero);
theHero.doDamage(theVillain);