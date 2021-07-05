// CODE here for your Lambda Classes
//jj


class GameObject {
    constructor(attributes) {
        this.createdAt = attributes.createdAt
        this.dimensions = attributes.dimensions
    }
    destroy() {
        return `${this.name} was removed from the game`
    }

    roll() {
        let randomNum = Math.floor(Math.random() * 6) + 1
        return randomNum
    }

    static assault(atacker, defender) {
        let attackerRoll = this.roll
        let defenderRoll = this.roll

        if (attackerRoll > defenderRoll) {
            this.defender.healthPoints = this.defender.healthPoints - this.roll
        }
        return defender.healthPoints

        if (defender.healthPoints <= 0) {
            return destroy()
        }
    }
}
/*
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/


class CharacterStats extends GameObject {
    constructor(attributes) {
        super(attributes)
        this.healthPoints = attributes.healthPoints
        this.name = attributes.name
    }

    takeDamage() {
        return `${this.name} took damage`
    }
}


CharacterStats.prototype.hi = function() {
    return 'hi'
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
    constructor(attributes) {
        super(attributes)
        this.team = attributes.team
        this.weapons = attributes.weapons
        this.language = attributes.language
    }

    greet() {
        return `${this.name} offers a greeting in ${this.language}`
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