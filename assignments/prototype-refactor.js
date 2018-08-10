// Here we have a functioning solution to your challenge from yesterday.
// Today your goal is to refactor all of this code to use ES6 Classes.
// The console.log() statements should still return what is expected of them.

// Base constructor
class GameObject {
    constructor (gameObjectAttributes) {
    this.createdAt = new Date();
    this.dimensions = gameObjectAttributes.dimensions;
    }

    destroy() {
        return (`${this.name} ran out of health and was removed from the game.`);
    }
}

class CharacterStats extends GameObject {
    constructor(characterStatsAttributes) {
        super(characterStatsAttributes);
        this.hp = characterStatsAttributes.hp;
        this.name = characterStatsAttributes.name;
    }

    takeDamage() {
        if (this.hp <= 0) {
            return this.destroy();
        }
        return (`${this.name} took damage. ${this.name} now has ${this.hp} health.`);
    }
}

class Humanoid extends CharacterStats {
    constructor (humanoidAttributes) {
    super(humanoidAttributes);
    this.faction = humanoidAttributes.faction;
    this.weapons = humanoidAttributes.weapons;
    this.language = humanoidAttributes.language;
    } 

    greet() {
        return (`${this.name} offers a greeting in ${this.language}`);
    }
}

class Hero extends Humanoid {
    constructor (heroAttributes) {
    super(heroAttributes);
    this.alignment = heroAttributes.alignment;
    } 

    heroicSlash() {
        villain.hp = villain.hp - 5;
        console.log(`${this.name} heroically slashed ${villain.name} for 5 damage.`);
        return villain.takeDamage();
    }
}

class Villain extends Humanoid {
    constructor (villainAttributes) {
        super(villainAttributes);
        this.spellType = villainAttributes.spellType;
    } 

    shadowSlash() {
        hero.hp = hero.hp - 2.5;
        console.log(`${this.name} slashed ${hero.name} with the power of shadow for 2.5 damage.`);
        return hero.takeDamage();
    }
}

// Test you work by uncommenting these 3 objects and the list of console logs below:
const mage = new Humanoid({
    'createdAt': new Date(),
    'dimensions': {
        length: 2,
        width: 1,
        height: 1
    },
    'hp': 5,
    'name': 'Bruce',
    'faction': 'Mage Guild',
    'weapons': [
        'Staff of Shamalama'
    ],
    'language': 'Common Toungue'
});

const swordsman = new Humanoid({
    'createdAt': new Date(),
    'dimensions': {
        length: 2,
        width: 2,
        height: 2
    },
    'hp': 15,
    'name': 'Sir Mustachio',
    'faction': 'The Round Table',
    'weapons': [
        'Giant Sword',
        'Shield'
    ],
    'language': 'Common Toungue' 
});

const archer = new Humanoid({
    'createdAt': new Date(),
    'dimensions': {
        length: 1,
        width: 2,
        height: 4
    },
    'hp': 10,
    'name': 'Lilith',
    'faction': 'Forest Kingdom',
    'weapons': [
        'Bow',
        'Dagger'
    ],
    'language': 'Elvish'
});

const hero = new Hero({
    'createdAt': new Date(),
    'dimensions': {
        length: 2,
        width: 3,
        height: 6
    },
    'hp': 15,
    'name': 'Shrek',
    'faction': 'The Swamp',
    'weapons': [
        'Sword',
        'Shield'
    ],
    'language': 'Common',
    'alignment': 'neutral good'
});

const villain = new Villain({
    'createdAt': new Date(),
    'dimensions': {
        length: 1,
        width: 2,
        height: 2
    },
    'hp': 5,
    'name': 'Oogly Boggo',
    'faction': 'Tinker Town',
    'weapons': [
        'Magic'
    ],
    'language': 'Gnomish',
    'powerSource': 'the Shadow'
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
console.log(villain.shadowSlash()); // Villain attacks Hero
console.log(hero.heroicSlash()); // Hero attacks Villain