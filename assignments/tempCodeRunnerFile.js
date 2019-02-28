/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class GameObject {
    constructor(att) {
        this.createdAt = att.createdAt;
        this.name = att.name;
        this.dimensions = att.dimensions;   
    }
    destroy() {
        return `${this.name} was removed from game.`;
    }
}// GameObject

/*function GameObject(att) {
    this.createdAt = att.createdAt;
    this.name = att.name;
    this.dimensions = att.dimensions;
  }
  
  GameObject.prototype.destroy = function() {
    return `${this.name} was removed from game.`;
  }*/
  
//--------------------------------------------------------------------------------------- 

class CharacterStats extends GameObject {
    constructor(statAtt) {
        super(statAtt)
        this.healthPoints = statAtt.healthPoints;
    }
    takeDamage() {
        return `${this.name} took damage.`;
    }
}// CharacterStats
  
/*  function CharacterStats(statAtt) {
    GameObject.call(this,statAtt);
    this.healthPoints = statAtt.healthPoints;
  }
  
  CharacterStats.prototype = Object.create(GameObject.prototype);
  
  CharacterStats.prototype.takeDamage = function() {
    return `${this.name} took damage.`;
  }*/
  
//------------------------------------------------------------------------------------------

class Humanoid extends CharacterStats {
    constructor(humAtt) {
        super(humAtt)
        this.team = humAtt.team;
        this.weapons = humAtt.weapons;
        this.language = humAtt.language;
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}`;
    }
}// Grand Child

/*  function Humanoid(humAtt) {
    CharacterStats.call(this,humAtt);
    this.team = humAtt.team;
    this.weapons = humAtt.weapons;
    this.language = humAtt.language;
  }
  
  Humanoid.prototype = Object.create(CharacterStats.prototype);
  
  Humanoid.prototype.greet = function() {
    return `${this.name} offers a greeting in ${this.language}`;
  }*/

  

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
  

  
  //Hero---------------------------------------------------------------------------------------------------------------------------
class Hero extends Humanoid {
    constructor(humAtt) {
        super(humAtt)
    }
    heroDeath() {
        if (this.healthPoints === 0) {
            return `${this.name} has died! The Villain will reign unopposed!`
        }
    }
    spiritGuardians(target) {
        target.healthPoints = target.healthPoints - 20;
        return `${this.name} summons the protectors of ${this.team}! They peck away at the eyes of ${target.name}!${target.name} takes 20 points of damage from the assault! Current health is now: ${target.healthPoints}`;
    }
    holyFire(target) {
        target.healthPoints = target.healthPoints - 10;
        return `${this.name} buffets ${target.name} with holy flames! ${target.name} takes 10 points of damage! Current health is now: ${target.healthPoints}`;
    }
    forTheWin(target) {
        target.healthPoints = target.healthPoints - 10;
        return `${this.name} calls upon: ${this.weapons}! ${this.team} calls down her power to smite ${target.name}! Current health is now: ${target.healthPoints}`;
    }
}// Great Grand Child
  
/*  function Hero(heroAtt) {
    Humanoid.call(this,heroAtt);
  }
  Hero.prototype = Object.create(Humanoid.prototype);
  
  Hero.prototype.heroDeath = function() {
    if (this.healthPoints === 0) {
      return `${this.name} has died! The Villain will reign unopposed!`
    }
  }
  
  Hero.prototype.spiritGuardians = function damage1(target) {
    target.healthPoints = target.healthPoints - 20;
    return `${this.name} summons the protectors of ${this.team}! They peck away at the eyes of ${target.name}!${target.name} takes 20 points of damage from the assault! Current health is now: ${target.healthPoints}`;
  }
  
  Hero.prototype.holyFire = function damage2(target) {
    target.healthPoints = target.healthPoints - 10;
    return `${this.name} buffets ${target.name} with holy flames! ${target.name} takes 10 points of damage! Current health is now: ${target.healthPoints}`;
  }
  
  Hero.prototype.forTheWin = function damage3(target) {
    target.healthPoints = target.healthPoints - 10;
    return `${this.name} calls upon: ${this.weapons}! ${this.team} calls down her power to smite ${target.name}! Current health is now: ${target.healthPoints}`;
  }*/
  
  
  
  //Villain-------------------------------------------------------------------------------------------------------------------------
  class Villain extends Humanoid {
    constructor(humAtt) {
        super(humAtt)
    }
    villDeath() {
        if (this.healthPoints === 0) {
            return `${this.name} has died! The world has been saved!`
        }
    }
    weaponAttack(target) {
        target.healthPoints = target.healthPoints - 10;
        return `${this.name} rakes ${target.name} with ${this.weapons}! ${target.name} takes 5 points of damage from each! Current health is now: ${target.healthPoints}`;
    }
    monologue(target) {
        return `${this.name} is confident in his victory and reveals his master plan to ${target.name}!`;
    }
}// Great Grand Child
  
/*  function Villain(villAtt) {
    Humanoid.call(this,villAtt);
  }
  Villain.prototype = Object.create(Humanoid.prototype);
  
  Villain.prototype.villDeath = function() {
    if (this.healthPoints === 0) {
      return `${this.name} has died! The world has been saved!`
    }
  }
  
  Villain.prototype.weaponAttack = function damage4(target) {
    target.healthPoints = target.healthPoints - 10;
    return `${this.name} rakes ${target.name} with ${this.weapons}! ${target.name} takes 5 points of damage from each! Current health is now: ${target.healthPoints}`;
  }
  
  Villain.prototype.monologue = function(target) {
    return `${this.name} is confident in his victory and reveals his master plan to ${target.name}!`;
  }*/
  
  //Characters-----------------------------------------------------------------------------------------------------------------------
  const Cleric = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 25,
    name: 'Tamlin the Black',
    team: 'The Raven Queen',
    weapons: [
      'Favor of the Queen',
    ],
    language: 'Common Tongue',
  });
  
  const Orc = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 3,
    },
    healthPoints: 40,
    name: 'Nightbringer',
    team: 'Warchief',
    weapons: [
      'Vicious Sickle',
      'Vicious Sickle',
    ],
    language: 'Common Tongue',
  });
  
  
  //The Fight-----------------------------------------------------------------------------------------------
  console.log(Cleric.holyFire(Orc));
  console.log(Orc.weaponAttack(Cleric));
  console.log(Cleric.spiritGuardians(Orc));
  console.log(Orc.weaponAttack(Cleric));
  console.log(Orc.monologue(Cleric));
  console.log(Cleric.forTheWin(Orc));
  console.log(Orc.villDeath());