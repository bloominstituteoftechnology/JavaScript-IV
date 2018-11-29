/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// === GameObject ===

/* 
function GameObject (attributes) {
    this.createdAt = attributes.createdAt;
    this.dimensions = attributes.dimensions;
};

GameObject.prototype.destroy = function () {
    return (`${this.name} was removed from the game.`);
};
*/

class GameObject {
    constructor (attributes) {
        this.createdAt = attributes.createdAt;
        this.dimensions = attributes.dimensions;
    }

    destroy () {
        return (`${this.name} was removed from the game.`);
    }
};
  
// === CharacterStats ===

/*
function CharacterStats (charAttributes) {
    GameObject.call(this, charAttributes);
    this.healthPoints = charAttributes.healthPoints;
    this.name = charAttributes.name;
};

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function () {
    return (`${this.name} took damage.`);
};
*/

class CharacterStats extends GameObject {
    constructor (charAttributes){
        super(charAttributes)
        this.healthPoints = charAttributes.healthPoints;
        this.name = charAttributes.name;
    }

    takeDamage() {
        return (`${this.name} took damage.`);
    }
};

// === Humanoid ===

/*
function Humanoid (humAttributes) {
    GameObject.call(this, humAttributes);
    CharacterStats.call(this, humAttributes);
    this.team = humAttributes.team;
    this.weapons = humAttributes.weapons;
    this.language = humAttributes.language;
};

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function () {
    return (`${this.name} offers a greeting in ${this.language}.`);
};
*/

class Humanoid extends CharacterStats {
    constructor (humAttributes) {
        super(humAttributes);
        this.team = humAttributes.team;
        this.weapons = humAttributes.weapons;
        this.language = humAttributes.language;
    }

    greet() {
        return (`${this.name} offers a greeting in ${this.language}.`);
    }

    attack(enemy) {
        if (this.healthPoints > 0) {
            if (enemy.healthPoints > 0 ) {
                console.log(`${this.name} attacks ${enemy.name} with his ${this.weapons[0]}.`, enemy.takeDamage());
                let newHealth = enemy.healthPoints = enemy.healthPoints - this.damagePoints;
                if (newHealth > 0) {
                    return (`${enemy.name}'s health is now ${newHealth}.`) 
                }
                else {
                    return (`${enemy.name}'s health is depleted. ${enemy.destroy()}`);
                }
            } else {
                return (`${this.name} tries to attack ${enemy.name}. ${enemy.destroy()} ${this.name} cannot attack ${enemy.name}`);
            }
        } else {
            return (`${this.name} tries to attack ${enemy.name}. ${this.destroy()} ${this.name} cannot attack ${enemy.name}`);
        }
    }
};
  
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
/*
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
*/
  
// Stretch task: 

/*
Humanoid.prototype.attack = function (enemy) {
    if (this.healthPoints > 0) {
        if (enemy.healthPoints > 0 ) {
            console.log(`${this.name} attacks ${enemy.name} with his ${this.weapons[0]}.`, enemy.takeDamage());
            let newHealth = enemy.healthPoints = enemy.healthPoints - this.damagePoints;
            if (newHealth > 0) {
                return (`${enemy.name}'s health is now ${newHealth}.`) 
            }
            else {
                return (`${enemy.name}'s health is depleted. ${enemy.destroy()}`);
            }
        } else {
            return (`${this.name} tries to attack ${enemy.name}. ${enemy.destroy()} ${this.name} cannot attack ${enemy.name}`);
        }
    } else {
        return (`${this.name} tries to attack ${enemy.name}. ${this.destroy()} ${this.name} cannot attack ${enemy.name}`);
    }
};
*/


// === Hero ===

/*
function Hero (heroAttributes) {
    GameObject.call(this, heroAttributes);
    CharacterStats.call(this, heroAttributes);
    Humanoid.call(this, heroAttributes);
    this.damagePoints = heroAttributes.damagePoints;
    this.antiWeapons = heroAttributes.antiWeapons;
};

Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.takeMeds = function (enemy) {
    if (this.healthPoints > 0) {
        if (enemy.healthPoints > 0 ) {
            console.log(`After ${enemy.name}'s attack, ${this.name} takes his ${this.antiWeapons[0]}. ${this.name} regains health.`);
            let newHealth = this.healthPoints = this.healthPoints + (enemy.damagePoints+2);
            return (`${this.name}'s health is up to ${newHealth}.`);
        } else {
            return (`${enemy.destroy()} ${this.name} cannot attack ${enemy.name}`);
        }
    } else {
        return (`${this.destroy()} ${this.name} cannot attack ${enemy.name}`);
    }
};
*/

class Hero extends Humanoid {
    constructor (heroAttributes) {
        super(heroAttributes);
        this.damagePoints = heroAttributes.damagePoints;
        this.antiWeapons = heroAttributes.antiWeapons;
    }

    takeMeds(enemy) {
        if (this.healthPoints > 0) {
            if (enemy.healthPoints > 0 ) {
                console.log(`After ${enemy.name}'s attack, ${this.name} takes his ${this.antiWeapons[0]}. ${this.name} regains health.`);
                let newHealth = this.healthPoints = this.healthPoints + (enemy.damagePoints+2);
                return (`${this.name}'s health is up to ${newHealth}.`);
            } else {
                return (`${enemy.destroy()} ${this.name} cannot attack ${enemy.name}`);
            }
        } else {
            return (`${this.destroy()} ${this.name} cannot attack ${enemy.name}`);
        }
    }
};

// === Villian ===
/*
function Villain(vilAttributes){
    GameObject.call(this, vilAttributes);
    CharacterStats.call(this, vilAttributes);
    Humanoid.call(this, vilAttributes);
    this.damagePoints = vilAttributes.damagePoints;
    this.antiWeapons = vilAttributes.antiWeapons;
};

Villain.prototype = Object.create(Humanoid.prototype);

Villain.prototype.shield = function (enemy) {
    if (this.healthPoints > 0) {
        if (enemy.healthPoints > 0 ) {
            console.log(`But wait, ${this.name} shielded ${enemy.name}'s attack with his ${this.antiWeapons[0]}. ${this.name} takes no damage.`);
            let newHealth = this.healthPoints = this.healthPoints + enemy.damagePoints;
            return (`${this.name}'s health is actually back to ${newHealth}.`);
        } else {
            return (`${enemy.destroy()} ${this.name} cannot attack ${enemy.name}`);
        }
    } else {
        return (`${this.destroy()} ${this.name} cannot attack ${enemy.name}`);
    }
};
*/

class Villain extends Humanoid {
    constructor (vilAttributes) {
        super(vilAttributes);
        this.damagePoints = vilAttributes.damagePoints;
        this.antiWeapons = vilAttributes.antiWeapons;
    }

    shield(enemy) {
        if (this.healthPoints > 0) {
            if (enemy.healthPoints > 0 ) {
                console.log(`But wait, ${this.name} shielded ${enemy.name}'s attack with his ${this.antiWeapons[0]}. ${this.name} takes no damage.`);
                let newHealth = this.healthPoints = this.healthPoints + enemy.damagePoints;
                return (`${this.name}'s health is actually back to ${newHealth}.`);
            } else {
                return (`${enemy.destroy()} ${this.name} cannot attack ${enemy.name}`);
            }
        } else {
            return (`${this.destroy()} ${this.name} cannot attack ${enemy.name}`);
        }
    }
}

const human = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 3,
        width: 1,
        height: 3,
    },
    healthPoints: 15,
    damagePoints: 5,
    name: 'David',
    team: 'Forest Kingdom',
    weapons: [
        'Rock and Slingshot'
    ],
    antiWeapons: ['Medication'],
    language: 'English',
});

const oger = new Villain({
    createdAt: new Date(),
    dimensions: {
        length: 4,
        width: 3,
        height: 6,
    },
    healthPoints: 20,
    damagePoints: 3,
    name: 'Goliath',
    team: 'Oger Rebellion',
    weapons: [
        'Sword'
    ],
    antiWeapons: ['Shield of Trolls'],
    language: 'Latin',
});

/*
console.log(human.attack(oger)); 
console.log(oger.attack(human));
console.log(human.attack(oger)); 
console.log(oger.shield(human));
console.log(human.attack(oger)); 
console.log(oger.attack(human));
console.log(human.takeMeds(oger)); 
console.log(oger.attack(human));
console.log(human.attack(oger)); 
console.log(oger.attack(human));
console.log(human.attack(oger)); 
console.log(oger.attack(human));
console.log(human.attack(oger)); 
console.log(oger.attack(human));  
*/