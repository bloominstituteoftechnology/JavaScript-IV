/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
    constructor(objectAttributes){
        this.createdAt = objectAttributes.createdAt;
        this.dimensions = objectAttributes.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game.`;
    }
};

class CharacterStats extends GameObject {
    constructor(charAttributes){
        super(charAttributes);
        this.healthPoints = charAttributes.healthPoints;
        this.name = charAttributes.name;
    }
    takeDamage(){
        return `${this.name} took damage.`;
    }
    checkHP(){
        if (this.healthPoints <= 0){
            this.destroy();
          }
    }
};
  
class Humanoid extends CharacterStats {
    constructor(humAttributes) {
        super(humAttributes);
        this.team = humAttributes.team;
        this.weapons = humAttributes.weapons;
        this.language = humAttributes.language;
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}.`;
    }
}


  
class Hero extends Humanoid {
    constructor(heroAttributes){
        super(heroAttributes);
        this.powers = heroAttributes.powers;
    }
    determination(){
        if (this.powers == 'Willpower'){
            this.healthPoints += 5;
          }
        else {
            console.log(`${this.name} lacks the will`);
        }
    }
    dispenseJustice(nemTarget){
        if (this.weapons.includes('Guillotine Sword') === true && this.powers == 'Willpower') { //conditions necessary to attack
            if (nemTarget.powers === 'Schemes') { //start of randomized attack
              let hitOrMiss = Math.random();
              if (hitOrMiss > .9) {
                console.log(nemTarget.destroy()); //crit
              }
              else if(hitOrMiss > .3 && hitOrMiss <= .9) {
                nemTarget.healthPoints -= 5; //normal hit
                console.log(nemTarget.takeDamage());
                nemTarget.checkHP();
              }
              else {
                console.log(`${this.name} missed`) //miss
              }
            } //end of randomized attack
            else {
              console.log(nemTarget.destroy()); //instant kill
            } 
          }
          else {
              console.log(`Not today, ${this.name}`); //opponent taunt
            }  
    }
}

class Villain extends Humanoid{
    constructor(villainAttributes){
        super(villainAttributes);
        this.powers = villainAttributes.powers;
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
  
    const soldier = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 12,
      name: 'Zargon',
      team: 'Red Army',
      weapons: [
        'Guillotine Sword'
      ],
      language: 'Dialectic',
      powers: 'Willpower',
      // nemesis: 'baron'
    });
  
    var baron = new Villain({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 24,
      name: 'Gooblgar',
      team: 'Blue Empire',
      weapons: [
        'Staff of Domination'
      ],
      language: 'Evilese',
      powers: 'Schemes',
      // nemesis: 'soldier'
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
    // console.log(soldier.weapons);
    // console.log(soldier.nemesis.name);
    // console.log(soldier.weapons.includes('Guillotine Sword'));
  
    soldier.dispenseJustice(baron);
    soldier.dispenseJustice(baron);
    soldier.dispenseJustice(baron);
    soldier.dispenseJustice(baron);
    soldier.dispenseJustice(baron);
    soldier.dispenseJustice(baron);
    soldier.dispenseJustice(baron);
  
    //he better be dead after this