/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

GameObject = function (properties) {
    this.createdAt = properties.createdAt;
    this.dimensions = properties.dimensions;
};

GameObject.prototype.destroy = function () {
    console.log(`Object was removed from the game`);
};
*/

class GameObject {
    constructor(properties) {
        this.createdAt = properties.createdAt;
        this.dimensions = properties.dimensions;
    }

    destroy() {
        console.log('Object was removed from the game')
    }
}

/*
function CharacterStats(stats) {
    GameObject.call(this, stats);
    this.hp = stats.hp;
    this.name = stats.name
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function () {
    console.log(`${this.name} took damage.`);
};

*/

class CharacterStats extends GameObject {
    constructor(stats) {
        super(stats);
        this.hp = stats.hp;
        this.name = stats.name;
    }

    takeDamage() {
        console.log(`${this.name} took damage.`);
    }
}

/*
function Humanoid(features) {
    CharacterStats.call(this, features);
    this.faction = features.faction;
    this.weapons = features.weapons;
    this.language = features.language
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function () {
    console.log(`${this.name} offers a greeting in ${this.language}.`);// greeting method for humanoid
};
*/

class Humanoid extends CharacterStats {
    constructor(features) {
        super(features)
        this.faction = features.faction;
        this.weapons = features.weapons;
        this.language = features.language;
    }
    greet() {
        console.log(`${this.name} offers a greeting in ${this.language}.`);
    }
}

/*
2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements 
should still return what is expected of them.
*/
