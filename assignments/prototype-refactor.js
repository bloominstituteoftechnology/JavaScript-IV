/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class GameObject {
    constructor(objectParams) {
        this.createdAt = new Date();
        this.dimensions = objectParams.dimensions;
    }

    destroy() {
        return `${this.name} was removed from the game.`;
    }
}
class CharacterStats extends GameObject {
    constructor(objectParams) {
        super(objectParams);
        this.hp = objectParams.hp;
        this.name = objectParams.name;
    }
    takeDamage() {
        return `${this.name} took damage`;
    }
}
class Humanoid extends CharacterStats {
    constructor(objectParams) {
        super(objectParams);
        this.faction = humanoidParams.faction;
        this.weapons = humanoidParams.weapons;
        this.language = humanoidParams.language;
    }
}