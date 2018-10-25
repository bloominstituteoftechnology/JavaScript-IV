/*

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance heirarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properites and methods that are defined in their block comments below:
*/
/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/
class GameObject {
    constructor(optionsObj) {
        this.createdAt = optionsObj.createdAt;
        this.dimensions = optionsObj.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game.`;
    }
}

/*
    === CharacterStats ===
    * hp
    * name
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
class CharacterStats extends GameObject {
    constructor(optionsObj) {
        super(optionsObj);
        this.hp = optionsObj.hp;
        this.name = optionsObj.name;
    }
    takeDamage() {
        return `${this.name} took damage`;
    }
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
class Humanoid extends CharacterStats {
    constructor(optionsObj) {
        super(optionsObj);
        this.faction = optionsObj.faction;
        this.weapons = optionsObj.weapons;
        this.language = optionsObj.language;
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


// Stretch task: 
// * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villian and one a hero and fight it out with methods!
class Hero extends Humanoid {
    constructor(optionsObj) {
        super(optionsObj);
    }
    magicMissile(villain) {
        villain.hp = villain.hp - (Math.floor(Math.random() * 1) + 1);
        console.log(`${this.name} fires a Magic Missile at ${villain.name}`);
    }
    checkHP() {
        if (this.hp <= 0) {
            console.log(`${this.destroy()}`);
        } else {
            console.log(`${this.name} has ${this.hp} remaining`);
        }
    }
}

class Villain extends Humanoid {
    constructor(optionsObj) {
        super(optionsObj);
    }
    acidArrow(hero) {
        hero.hp = hero.hp - (Math.floor(Math.random() * 2) + 1);
        console.log(`${this.name} fires an Acid Arrow at ${hero.name}`);
    }
    checkHP() {
        if (this.hp <= 0) {
            console.log(`${this.destroy()}`);
        } else {
            console.log(`${this.name} has ${this.hp} remaining`);
        }
    }
}


const jace = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 3,
    },
    hp: 75,
    name: 'Jace Beleren',
    faction: 'Vryn',
    weapons: [
        'Tome of Vryn'
    ],
    language: 'Words of the Planeswalkers',
});

const tezzeret = new Villain({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 1,
        height: 5,
    },
    hp: 115,
    name: 'Tezzeret',
    faction: 'Alara',
    weapons: [
        'The Artificer'
    ],
    language: 'Words of the Planeswalkers',
});

function turnSimulator(hero, villain) {
    console.log(`Game Start.`)
    let winner = null;
    for (let i = 99; i > -1; i--) {
        if (i === 0 || hero.hp <= 0  || villain.hp <= 0) {
            if (hero.hp < villain.hp) {
                winner = villain.name;
            } else if (villain.hp < hero.hp) {
                winner = hero.name;
            }
            break;
        } else {
            if ((Math.floor(Math.random() * 100) + 1) % 2 === 0) {
                console.log(`It's ${hero.name}'s turn.`)
                hero.checkHP();
                hero.magicMissile(villain);
                villain.checkHP();
                console.log(`----end of turn----`)

            } else {
                console.log(`It's ${villain.name}'s turn.`)
                villain.checkHP();
                villain.acidArrow(hero);
                hero.checkHP();
                console.log(`----end of turn----`)
            }
        }
    }
    return `Game Over, winner is: ${winner}`
}

console.log(turnSimulator(jace, tezzeret));