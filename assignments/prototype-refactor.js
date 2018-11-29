//#region Class Declarations
class GameObject {
    constructor(props) {
        this.createdAt = props.createdAt;
        this.dimensions = props.dimensions;
    }

    destroy() {
        return `Object was removed from the game.`;
    }
}

class CharacterStats extends GameObject {
    constructor(props) {
        super(props);
        this.healthPoints = props.healthPoints;
        this.name = props.name;
    }

    takeDamage() {
        return `${this.name} took damage.`;
    }
}

class Humanoid extends CharacterStats {
    constructor(props) {
        super(props);
        this.team = props.team;
        this.weapons = props.weapons;
        this.language = props.language;
    }

    greet() {
        return `${this.name} offers a greeting in ${this.language}.`;
    }
}

class Attacker extends Humanoid {
    constructor(props) {
        super(props);
        this.attackDamage = props.attackDamage;
        this.accuracy = props.accuracy;
        this.dodge = props.dodge;
    }

    attack(target) {
        if (this.healthPoints <= 0)
            return;

        let dodge = isFinite(target["dodge"]) ? target["dodge"] : 0;
        let accuracy = isFinite(this.accuracy) ? this.accuracy : 0;
        let hitChance = CalculateHitChance(accuracy, dodge);

        if (CheckHit(hitChance)) {
            target.healthPoints = target.healthPoints - this.attackDamage;
            console.log(`${this.name} hits ${target.name} for ${this.attackDamage} damage! (${hitChance * 100}%)`);
            if (target.healthPoints <= 0) {
                console.log(`${target.name} has been defeated!`);
                console.log(target.destroy());
            }
        } else {
            console.log(`${this.name} misses an attack against ${target.name}! {${hitChance * 100}%)`);
        }
    }
}

class Hero extends Attacker {
  constructor() {
      super({
        'attackDamage': 10,
        'accuracy': 20,
        'dodge': 40,
        'team': 'Lambda School',
        'weapons': [
            'Peer Code Review',
            'I do, We do, You do',
            'なに？'
        ],
        'language': 'JavaScript',
        'healthPoints': 100,
        'name': 'Josh Knell',
        'dimensions': 'Way beyond ours'
      })
  }
}

class Villain extends Attacker {
  constructor() {
      super({
        'attackDamage': 20,
        'accuracy': 10,
        'dodge': 5,
        'team': 'Evil LLC',
        'weapons': [
            'In this house we use arrow syntax',
            'Programming is not stressful at all'
        ],
        'language': 'not specific enough',
        'healthPoints': 300,
        'name': 'Big Boss',
        'dimensions': 'Huge'
      })
  }
}

//#endregion

//#region Math Helper Functions
// Gets a hit chance (100% is 1.0)
function CalculateHitChance(accuracy, dodge) {
    return 0.5 + Math.asinh(accuracy - dodge) / (Math.PI * Math.PI);
}

// Returns a boolean if the hit was successful
function CheckHit(hitChance) {
    return Math.random() < hitChance;
}
//#endregion

//#region Initializers
const mage = new Humanoid ({
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

const ourHeroComesToSaveTheDay = new Hero();
const uhOhHereComesTheVillain = new Villain();
//#endregion

//#region Program
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
// Stretch task
console.log(ourHeroComesToSaveTheDay.greet());
console.log(uhOhHereComesTheVillain.greet());

while (ourHeroComesToSaveTheDay.healthPoints > 0 && uhOhHereComesTheVillain.healthPoints > 0) {
    ourHeroComesToSaveTheDay.attack(uhOhHereComesTheVillain);
    uhOhHereComesTheVillain.attack(ourHeroComesToSaveTheDay);
}

if (ourHeroComesToSaveTheDay.healthPoints <= 0) {
    console.log(`The villain ${uhOhHereComesTheVillain.name} has triumphed!`);
} else {
    console.log(`Our hero ${ourHeroComesToSaveTheDay.name} has saved the day!`);
}
//#endregion
