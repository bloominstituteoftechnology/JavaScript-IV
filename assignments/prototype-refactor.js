
// ------------------------------------- Classes ------------------------------------- 

class GameObject {
    constructor(gameObjAttributes) {
        this.createdAt = gameObjAttributes.createdAt;
        this.dimensions = gameObjAttributes.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game.`;
    }
}

class CharacterStats extends GameObject {
    constructor(charStatAttributes) {
        super(charStatAttributes);
        this.healthPoints = charStatAttributes.healthPoints;
        this.name = charStatAttributes.name;
    }
    takeDamage() {
        return `${this.name} took damage.`;
    }
}

class Humanoid extends CharacterStats {
    constructor(huAttributes) {
        super(huAttributes);
        this.team = huAttributes.team;
        this.weapons = huAttributes.weapons;
        this.language = huAttributes.language;
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}.`;
    }
}

class Villain extends Humanoid {
    constructor(vilAttributes) {
        super(vilAttributes);
    }
    attack(char, points) {
        let updateHealth = char.healthPoints -= points;
        let randomWeapon = this.weapons[(Math.floor(Math.random() * this.weapons.length))];

        if (char.healthPoints <= 0) {
        return `${char.name} is out of health! ${char.destroy()}`;
        } else 
        return `${this.name} attacked ${char.name} with their ${randomWeapon}! ${char.takeDamage()} ${char.name}'s health is now ${updateHealth}.`;
    }
}

class Hero extends Villain {
    constructor(heroAttributes) {
        super(heroAttributes);
    }
}

class Reviver extends Humanoid {
    constructor(reviverAttributes) {
        super(reviverAttributes);
    }
    revive(char, points) {
        if (char.healthPoints > 0) {
            return `${char.name}'s health is ${char.healthPoints} and does not need to be revived.`;
        } 
        else {
            let reviveHealth = char.healthPoints += points;
            return `${this.name} revived ${char.name}! ${char.name}'s health is now ${reviveHealth}.`;
        }
    }
    medicine(char, points) {
        if (char.healthPoints > 0) {
            let updateHealth = char.healthPoints += points;
            return `${char.name} received medicine from ${this.name} and now has a health of ${updateHealth}.`;
        } 
        else {
            return `${char.name} needs to be revived before ${this.name} can give them medicine.`;
        }
    }
}


// ------------------------------------- Objects ------------------------------------- 

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

const dragon = new Villain({
    createdAt: new Date(),
    dimensions: {
        length: 4,
        width: 1,
        height: 2,
    },
    healthPoints: 20,
    name: 'Draco',
    team: 'Evil Folk',
    weapons: [
        'Fire',
        'Melting Scales',
        'Smoke Breath',
        'Claws',
        'Bite'
    ],
    language: 'Roarish',
});

const knight = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 3,
    },
    healthPoints: 18,
    name: 'Knight E. Night',
    team: 'The Round Table',
    weapons: [
        'Slingshot',
        'Grenade Launcher',
        'Double-Edged Sword',
        'Metal Helmet',
        'Attack Parrot',
    ],
    language: 'Dutch',
});


const medicineMan = new Reviver({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 1,
    },
    healthPoints: 100,
    name: 'Wingapo',
    team: 'Airbenders',
    weapons: [
        'Glowing Staff'
    ],
    language: 'Chinese',
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



console.log(dragon.attack(knight, 2));
console.log(knight.attack(dragon, 5));
console.log(knight.attack(dragon, 5));
console.log(dragon.healthPoints);
console.log(dragon.attack(knight, 4));
console.log(knight.attack(dragon, 5));
console.log(knight.attack(dragon, 5));
console.log(dragon.healthPoints);
console.log(medicineMan.revive(dragon, 3));
console.log(dragon.healthPoints);
console.log(medicineMan.revive(dragon, 3));
console.log(medicineMan.medicine(knight, 2));
console.log(knight.attack(dragon, 3));
console.log(medicineMan.medicine(dragon, 2));
