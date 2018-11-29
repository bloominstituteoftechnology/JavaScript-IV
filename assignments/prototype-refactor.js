/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

// function GameObject(attr){
//     this.createdAt = attr.createdAt;
//     this.dimensions = attr.dimensions;
//   }
  
//   GameObject.prototype.destroy = function() {
//     return  `${this.name} was removed from the game.`;
//   }

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
    * healthPoints
    * name
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  
//   function CharacterStats(chrAttr) {
//     GameObject.call(this, chrAttr);
//     this.healthPoints = chrAttr.healthPoints;
//     this.name = chrAttr.name;
//   }
  
//   CharacterStats.prototype = Object.create(GameObject.prototype);
  
//   CharacterStats.prototype.takeDamage = function() {
//     return `${this.name} took damage.`
//   }

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
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
  
//   function Humanoid(humAttr) {
//     CharacterStats.call(this, humAttr);
//     this.team =humAttr.team;
//     this.weapons = humAttr.weapons;
//     this.language = humAttr.language;
//   }
  
//   Humanoid.prototype = Object.create(CharacterStats.prototype);
  
//   Humanoid.prototype.greet = function() {
//     return `${this.name} offers a greeting in ${this.language}.`
//   }

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

//   function Villian(vAttr) {
//     Humanoid.call(this, vAttr);
//     this.minions = vAttr.minions;
//     this.castle = vAttr.castle;
//     this.dmgMitigation = vAttr.dmgMitigation;
//   }
  
//   //Allows the villian object to use the prototype methods created for the Humanoid object
//   Villian.prototype = Object.create(Humanoid.prototype);
  
//   //villians Attack method
//   Villian.prototype.shadowAttack = function(target) {
//     let dmg = 5;
//     let hp = target.healthPoints -= dmg;
  
//       if(hp <= 0) {
//         return target.destroy();
//       } 
//       return `${target.name} takes ${dmg} damage from ${this.name}'s ${this.weapons[0]} Shadow Attack! ${target.name} now has ${hp} left!`;  
//   }
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

//   function Hero(hAttr) {
//     Humanoid.call(this, hAttr);
//     this.power = hAttr.power;
//     this.shieldPoints = hAttr.shieldPoints;
//     this.armorPierce = hAttr.armorPierce;
//   }
  
//   //Allows the Hero object to use the prototype methods created for the Humanoid object
//   Hero.prototype = Object.create(Humanoid.prototype);
  
//   //Hero's attack method
//   Hero.prototype.weaponSlash = function(target) {
//     let dmg = this.power + 5;
//     let hp = target.healthPoints -= dmg;
  
//       if(hp <= 0) {
//         return target.destroy();
//       } 
//       return `${target.name} takes ${dmg} damage from ${this.name}'s ${this.weapons[0]} Slash Attack! ${target.name} now has ${hp} left!`;  
//   }
  
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
