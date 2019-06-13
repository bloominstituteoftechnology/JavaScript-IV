/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class GameObject {
    constructor(stats) {
        this.createdAt = stats.createdAt;
        this.name = stats.name;
        this.dimensions = stats.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game.`;
    };
}
/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
class CharacterStats extends GameObject {
    constructor(stats) {
        super(stats);
        this.healthPoints = stats.healthPoints;
    }
    takeDamage() {
        return `${this.name} took damage.`
    }
}
/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
class Humanoid extends CharacterStats {
    constructor(stats) {
        super(stats);
        this.team = stats.team;
        this.weapons = stats.weapons;
        this.language = stats.language;
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

// Test you work by un-commenting these 3 objects and the list of console logs below:


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
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

//creating villian and hero constructors

//villian
class Villian extends Humanoid {
    constructor(stats) {
    super(stats);
    this.alignment = 'chaotic-evil';
};
//create villian ability
annihilate(target) {
    target.healthPoints = target.healthPoints - 10;
    if (target.healthPoints <= 0) {
        return target.destroy();
    } else {
        return target.takeDamage();
    }
}
}

//hero
function Hero(stats) {
    Humanoid.call(this, stats);
    this.alignment = 'lawful-good';
};
Hero.prototype = Object.create(Humanoid.prototype);
//create hero ability
Hero.prototype.heroBomb = function (target) {
    target.healthPoints = target.healthPoints - 8;
    if (target.healthPoints <= 0) {
        return target.destroy();
    } else {
        return target.takeDamage();
    };
};


//create new hero and villian
const MorgulTheDestroyer = new Villian({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 3,
    },
    healthPoints: 10,
    name: 'Morgul: THE DESTROYER',
    weapons: ['hate', 'more hate'],
    language: 'Demonic Orcish'
})

const lilBill = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 1,
        height: 2,
    },
    healthPoints: 12,
    name: 'Bill',
    weapons: ['cautious optimism', 'an old slingshot'],
    language: 'common'
})
// logged results
console.log('Lil Bill attacks!' + lilBill.heroBomb(MorgulTheDestroyer));
console.log('Morgul returns fire! ' + MorgulTheDestroyer.annihilate(lilBill));
console.log('Lil Bill attacks again! ' + lilBill.heroBomb(MorgulTheDestroyer));
console.log('Lil Bill stands victorious over the corpse of his defeated foe!')