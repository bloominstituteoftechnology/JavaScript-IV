/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class GameObject {
    constructor(prop) {
        this.createdAt = prop.createdAt;
        this.name = prop.name;
        this.dimensions = prop.dimensions;
    }
        destroy = function () {
            return `${this.name} was removed from the game.`;
        }
    
}
class CharacterStats extends GameObject {
    constructor(attr) {
        super(attr);
        this.healthPoints = attr.healthPoints;
    }
        takeDamage = function () {
            return `${this.name} took damage`;
        }
    
}
class Humanoid extends CharacterStats {
    constructor(character) {
        super(character);
        this.team = character.team;
        this.weapons = character.weapons;
        this.language = character.language;
    }
        greet = function () {
            return `${this.name} offers greetings in ${this.language}`
        }

    
}
class Villain extends Humanoid {
    constructor(villanAttr) {
        super(villanAttr);
        this.removeHealthPoints = villanAttr.removeHealthPoints;
    }
        checkIfDestroy = function () {
            console.log(`${this.name} lost ${this.removeHealthPoints}`)
        }
    
}
class Hero extends Humanoid {
    constructor(heroAttr) {
        super(heroAttr);
        this.saveHealthPoints = heroAttr.saveHealthPoints;
    }
        checkIfSaved = function () {
            console.log(`${this.name} gained ${this.saveHealthPoints}`)
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
const odin = new Villain({
    createdAt: new Date(),
    dimensions: {
        length: 4,
        width: 5,
        height: 1,
    },
    healthPoints: 50,
    name: 'Carla',
    team: 'Archers',
    weapons: [
        'Arch',
        'Gun',
    ],
    language: 'valyrian',
    removeHealthPoints: 10
})
const bago = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 3,
        height: 1,
    },
    healthPoints: 14,
    name: 'Diego',
    team: 'Savers',
    weapons: [
        'Love',
        'Kind',
    ],
    language: 'universal',
    saveHealthPoints: 10
})
console.log(archer);
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
console.log(odin.checkIfDestroy());
console.log(bago.checkIfSaved());