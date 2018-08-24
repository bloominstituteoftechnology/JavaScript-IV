// Here we have a functioning solutoin to your challenge from yesterday.
// Today your goal is to refactor all of this code to use ES6 Classes.
// The console.log() statements should still return what is expected of them.

class GameObject {
    constructor(gameObjectData) {
        this.createdAt = gameObjectData.createdAt;
        this.dimensions = gameObjectData.dimensions;
    }

    destroy() {
        return `${this.name} was removed from the game.`
    }
}

class CharacterStats extends GameObject {
    constructor(characterStatData) {
        super(characterStatData);
        this.hp = characterStatData.hp;
        this.name = characterStatData.name;
    }

    takeDamage() {
        this.hp--;
        return `${this.name} took damage.`
    }
}

class Humanoid extends CharacterStats {
    constructor(humanoidData) {
        super(humanoidData);
        this.faction = humanoidData.faction;
        this.weapons = humanoidData.weapons;
        this.language = humanoidData.language;
    }

    greet() {
        return `${this.name} offers a greeting in ${this.language}`
    };
}

// villain
class Villain extends Humanoid {
    constructor(villainData) {
        super(villainData);
    }

    punch(hero) {
        let damage = Math.floor(Math.random() * 10);
        hero.hp -= damage;
        return `${this.name} dealt ${damage} damage to ${hero.name}!`;
    }
}

// hero
class Hero extends Humanoid {
    constructor(heroData) {
        super(heroData);
    }

    sonicScrewdriver(villain) {
        let damage = Math.floor(Math.random() * 10);
        villain.hp -= damage;
        return `${this.name} dealt ${damage} damage to ${villain.name}!`;
    }
}

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
})

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
})

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
})

const theDoctor = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 2,
    },
    hp: 300,
    name: 'The Doctor',
    faction: 'Gallifrey',
    weapons: [
        'Brain',
    ],
    language: 'All',
})

const theMaster = new Villain({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 1,
    },
    hp: 250,
    name: 'The Master',
    faction: 'Gallifrey',
    weapons: [
        'Psychosis',
    ],
    language: 'All',
})

let fight = function (hero, villain) {
    let winner = hero.name;
    let attack = 1;

    while (villain.hp > 0 && hero.hp > 0) {
        console.log(`\nAttack: ${attack}\n${hero.sonicScrewdriver(villain)}`);
        console.log(villain.punch(hero));
        console.log(`\n${hero.name}'s hp is now ${hero.hp}`)
        console.log(`${villain.name}'s hp is now ${villain.hp}\n`)

        attack++;

        console.log(`\n${winner} is victorious!`);

        if (villain.hp > 0) {
            winner = villain.name;
            console.log(`\n ${hero.destroy()}\n`);
        }
        else {
            console.log(`\n${villain.destroy()}\n`)
        };
    }
}

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

console.log(fight(theDoctor, theMaster)); // Good and Evil battle it out...
