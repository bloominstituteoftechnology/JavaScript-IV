/* 
/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

class GameObject {
    constructor(attributes){
        this.createdAt = attributes.createdAt;
        this.dimensions = attributes.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game.`;
    }
};
// function GameObject(attributes) {
//     this.createdAt = attributes.createdAt;
//     this.dimensions = attributes.dimensions;
//   }
//   GameObject.prototype.destroy = function() {
//     return `${this.name} was removed from the game.`;
//   }
  
  /*
    === CharacterStats ===
    * healthPoints
    * name
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
class CharacterStats extends GameObject {
    constructor(characterAttributes) {
        super(characterAttributes);
        this.healthPoints = characterAttributes.healthPoints;
        this.name = characterAttributes.name;
    }
    takeDamage(){
        console.log(`${this.name} took damage.`);
    }
}
//   function CharacterStats(characterAttributes) {
//     GameObject.call(this, characterAttributes)
//     this.healthPoints = characterAttributes.healthPoints;
//     this.name = characterAttributes.name;
//   }
//   CharacterStats.prototype = Object.create(GameObject.prototype)
//   CharacterStats.prototype.takeDamage = function() {
//     console.log(`${this.name} took damage.`);
//   }
  
class Humanoid extends CharacterStats {
    constructor(humanAttributes) {
        super(humanAttributes);
        this.team = humanAttributes.team;
        this.weapons = humanAttributes.weapons;
        this.language = humanAttributes.language;
    }
    greet(){
        return `${this.name} offers a greeting in ${this.language}.`;
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
   
//   function Humanoid(humanAttributes) {
//     CharacterStats.call(this, humanAttributes)
//     this.team = humanAttributes.team;
//     this.weapons = humanAttributes.weapons;
//     this.language = humanAttributes.language;
//   }
//   Humanoid.prototype = Object.create(CharacterStats.prototype)
//   Humanoid.prototype.greet = function() {
//     return `${this.name} offers a greeting in ${this.language}.`;
//   }
  
  // Villain Constructor 

class Villian extends Humanoid {
    constructor(villianAttributes) {
        super(villianAttributes);
        this.lair = villianAttributes.lair;
    }
    laugh() {
        console.log(`Haha Haha! (menacingly)`);
    }
    attack(chr) {
        if (chr.healthPoints <= 0) {
            console.log(chr.destroy());
          } else {
            chr.healthPoints -= 5;
          }
          console.log(chr.healthPoints);
    }
}
//   function Villian(villianAttributes) {
//     Humanoid.call(this, villianAttributes)
//     this.lair = villianAttributes.lair;
//   }
//   Villian.prototype = Object.create(Humanoid.prototype)
//   Villian.prototype.laugh = function() {
//     console.log(`Haha Haha! (menacingly)`);
//   }
//   Villian.prototype.attack = function(chr) {
    
//     if (chr.healthPoints <= 0) {
//       console.log(chr.destroy());
//     } else {
//       chr.healthPoints -= 5;
//     }
//     console.log(chr.healthPoints);
//   };
  
  //Hero Constructor 
  
class Hero extends Humanoid {
    constructor(heroAttributes) {
        super(heroAttributes);
        this.base = heroAttributes.base;
    }
    heroSpeak() {
        return `This is a test!!!`;
    }
    attack(chr) {
        if (chr.healthPoints <= 0) {
            console.log(chr.destroy());
          } else {
            chr.healthPoints -= 5;
          }
          console.log(chr.healthPoints);
    }
}
//   function Hero(heroAttributes) {
//     Humanoid.call(this, heroAttributes);
//     this.base = heroAttributes.base;
//   }
//     Hero.prototype = Object.create(Humanoid.prototype);
//     Hero.prototype.heroSpeak = function() {
//     return `This is a test!!!`;
//   };
//     Hero.prototype.attack = function(chr) {
    
//     if (chr.healthPoints <= 0) {
//       console.log(chr.destroy());
//     } else {
//       chr.healthPoints -= 5;
//     }
//     console.log(chr.healthPoints);
//   };
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
  
    const bigBadVillian = new Villian({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 3,
        height: 5,
      },
      healthPoints: 25,
      name: 'Uruk',
      team: 'Dark Ones',
      weapons: [
        'Staff',
        'Wand',
      ],
      language: 'Dark Tongue',
      lair: 'Haunted Castle',
    });
  
    const bestHeroEver = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2
      },
      healthPoints: 50,
      name: "The Hero",
      team: "Hero Team",
      weapons: ["Hero Sword", "Shield"],
      language: "Hero Speak",
      base: "Test Base"
    });
  
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    // console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(archer.greet());
    mage.takeDamage(); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
    console.log(bigBadVillian);
    console.log(bestHeroEver.base);
    bigBadVillian.attack(bestHeroEver);
    bigBadVillian.attack(bestHeroEver);
    bigBadVillian.attack(bestHeroEver);
    bigBadVillian.attack(bestHeroEver);
    bigBadVillian.attack(bestHeroEver);
    bigBadVillian.attack(bestHeroEver);
    bigBadVillian.attack(bestHeroEver);
    bigBadVillian.attack(bestHeroEver);
    bigBadVillian.attack(bestHeroEver);
    bigBadVillian.attack(bestHeroEver);
    bigBadVillian.attack(bestHeroEver);
    bigBadVillian.attack(bestHeroEver);
    bigBadVillian.attack(bestHeroEver);
    bigBadVillian.attack(bestHeroEver);
    bigBadVillian.attack(bestHeroEver);
    bigBadVillian.attack(bestHeroEver);
    bigBadVillian.attack(bestHeroEver);
  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!