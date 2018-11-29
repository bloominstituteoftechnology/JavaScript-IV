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
        return `${this.name} was removed from the game`; //Instead of a console.log() I used a return to get rid of that rogue undefined on line 138 in the console.
    }
}

class CharacterStats extends GameObject {
    constructor(characterAttributes) {
        super(characterAttributes);
        this.healthPoints = characterAttributes.healthPoints;
        this.name = characterAttributes.name;
    }
    takeDamage() {
        return `${this.name} took damage`;
    }
}

class Humanoid extends CharacterStats {
    constructor(humanAttributes) {
        super(humanAttributes);
        this.team = humanAttributes.team;
        this.weapons = humanAttributes.weapons;
        this.damage = humanAttributes.damage;
        this.language = humanAttributes.language;
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}`;
    }
    attack(objectToAttack) {
        if (objectToAttack.healthPoints <= 0) {
            objectToAttack.destroy();
            console.log(`${objectToAttack.name} has been destroyed`);
        } else {
            objectToAttack.healthPoints -= this.damage;
            console.log(`
            ${this.name} attacked ${objectToAttack.name} for ${this.damage}\n
            ${objectToAttack.name} is now at ${objectToAttack.healthPoints} Health Points`);
        }
    }
    printStatistics(){
        console.log(`
        ===${this.name}=== \n
        Current Health: ${this.healthPoints} \n
        Weapons Available: ${this.weapons}
        ==================
        `)
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
    damage: 1,
    name: 'Bruce',
    team: 'Mage Guild',
    alive: true,
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
    alive: true,
    healthPoints: 15,
    damage: 1,
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
    alive: true,
    healthPoints: 10,
    damage: 1,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish',
});

const villian = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    alive: true,
    healthPoints: 25,
    damage: 1,
    name: 'Hannibal',
    team: 'Serial Killers',
    weapons: [
        'Knife'
    ],
    language: 'Common Tongue',
});
const hero = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    alive: true,
    healthPoints: 10,
    damage: 1,
    name: 'Brandon',
    team: 'Tampa',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Common Tongue',
});
const allPlayers = [mage, swordsman, archer, villian, hero];


function getStats() {
    allPlayers.forEach((player) => {
        player.printStatistics();
    });
}

function startFight() {
    for (let i = 0; i < 11; i++) {
        setTimeout(() => {
            hero.attack(villian);
            villian.attack(hero);
        }, 1000 * i);
    }
}


function gameBoard() {
    getStats();
    startFight();
}
//gameBoard(); //Uncomment this line to activate the game

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