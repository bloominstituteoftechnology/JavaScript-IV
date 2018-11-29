/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  === GameObject ===
*/

  class GameObject {
      constructor(attr) {
        this.createdAt = attr.createdAt;
        this.dimensions = attr.dimensions;
      }

      destroy(){
        return  `${this.name} was removed from the game.`;
      }
  }
  
  /*
    === CharacterStats ===
  */

  class CharacterStats extends GameObject {
      constructor(chrAttr) {
        super(chrAttr);
        this.healthPoints = chrAttr.healthPoints;
        this.name = chrAttr.name;
      }

      takeDamage() {
        return `${this.name} took damage.`
      }
  }
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
  */

  class Humanoid extends CharacterStats {
      constructor(humAttr) {
        super(humAttr);
        this.team =humAttr.team;
        this.weapons = humAttr.weapons;
        this.language = humAttr.language;
      }
      greet(){
        return `${this.name} offers a greeting in ${this.language}.`
      }
  }
  
  // ================================================= Villian constructor
  
  class Villian extends Humanoid {
      constructor(vAttr){
        super(vAttr);
        this.minions = vAttr.minions;
        this.castle = vAttr.castle;
        this.dmgMitigation = vAttr.dmgMitigation;
      }
      shadowAttack(target) {
        let dmg = 5;
        let hp = target.healthPoints -= dmg;
      
          if(hp <= 0) {
            return target.destroy();
          } 
          return `${target.name} takes ${dmg} damage from ${this.name}'s ${this.weapons[0]} Shadow Attack! ${target.name} now has ${hp} left!`; 
      }
  }

  // ================================================= Hero constructor
  
  class Hero extends Humanoid {
      constructor(hAttr) {
        super(hAttr);
        this.power = hAttr.power;
        this.shieldPoints = hAttr.shieldPoints;
        this.armorPierce = hAttr.armorPierce;
      }
      weaponSlash(target){
        let dmg = this.power + 5;
        let hp = target.healthPoints -= dmg;
      
          if(hp <= 0) {
            return target.destroy();
          } 
          return `${target.name} takes ${dmg} damage from ${this.name}'s ${this.weapons[0]} Slash Attack! ${target.name} now has ${hp} left!`;  
      }
  }
  
  // Object creation:
  
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
  
    const darkWarrior = new Villian({
      createdAt: new Date(),
      dimensions: {
        length: 5,
        width: 4,
        height: 9,
      },
      healthPoints: 25,
      name: 'Billy',
      team: 'Villians Association',
      weapons: [
        'Sword of Darkness',
      ],
      language: 'Common Tongue',
      minions: 500,
      castle: 2,
      dmgMitigation: 2
    });
  
    const warrior = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 3,
        width: 2,
        height: 5,
      },
      healthPoints: 35,
      name: 'Jimmy',
      team: 'Heros Association',
      weapons: [
        'Sword of Epicness',
      ],
      language: 'Common Tongue',
      power: 15,
      shieldPoints: 30,
      armorPierce: 5
    });
  
    console.log(warrior.weaponSlash(darkWarrior));
    console.log(darkWarrior.shadowAttack(warrior));
    console.log(warrior.weaponSlash(darkWarrior));
