/* 
Prototype Refactor
1. Copy and paste your code or the solution from yesterday
2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.
*/
// === GameObject ===
//   * createdAt
//   * name
//   * dimensions (These represent the character's size in the video game)
//   * destroy() // prototype method that returns: `${this.name} was removed from the game.`
//  

class GameObject { // parent object
    constructor(obj) {
        this.createdAt = obj.createdAt; // parent class properties
        this.name = obj.name;
        this.dimensions = obj.dimensions;
    }


    destroy() { //method to execute
        return `${this.name} was removed from the game`;
    }
}
/*
=== CharacterStats ===
* healthPoints
* takeDamage() // prototype method -> returns the string '<object name> took damage.'
* should inherit destroy() from GameObject's prototype
*/


class CharacterStats extends GameObject { //subclass, inherits parent class
    constructor(obj) {
        super(obj); // inherits parent class properties
        this.healthPoints = obj.healthPoints;


    }


    takeDamage() { // class method
        return `${this.name} took damage`
    };
}

// CharacterStats.prototype = Object.create(GameObject.prototype);
// CharacterStats.prototype.
/*
=== Humanoid (Having an appearance or character resembling that of a human.) ===
* team
* weapons
* language
* greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
* should inherit destroy() from GameObject through CharacterStats
* should inherit takeDamage() from CharacterStats
*/

class Humanoid extends CharacterStats { //subclass, inherits parent class and previous sublcass
    constructor(obj) {

        super(obj); // inherits parent class and previous sublcass properties
        this.team = obj.team;
        this.weapons = obj.weapons;
        this.language = obj.language;

    }


    greet() { //class method
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