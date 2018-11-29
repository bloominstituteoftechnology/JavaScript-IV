/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

class GameObject {
    constructor(attributes) {
        this.createdAt = attributes.createdAt;
        this.dimensions = attributes.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game.`;
    }
}
  
  /*
    === CharacterStats ===
    * healthPoints
    * name
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */

  class CharacterStats extends GameObject {
      constructor(attributes) {
        super(attributes);
        this.healthPoints = attributes.healthPoints;
        this.name = attributes.name;
      }
      takeDamage() {
        return `${this.name} took damage.`;
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

  class Humanoid extends CharacterStats{
      constructor(attributes) {
          super(attributes);
          this.team = attributes.team;
          this.weapons = attributes.weapons;
          this.language = attributes.language;
      }
      greet() {
        return `${this.name} offers a greeting in ${this.language}`;
      }
  }
  
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
  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
    class Hero extends Humanoid {
        constructor(attributes) {
            super(attributes);
            this.attackDamage = attributes.attackDamage;
        }
        attack(target) {
            target.healthPoints -= this.attackDamage
            if (target.healthPoints > 0) {
              return `${this.name} bravely attacks ${target.name} with ${this.weapons[0]}! ${target.name} is at ${target.healthPoints} health!`
            } else {
              return `${this.name} defeats ${target.name} with ${this.weapons[0]}!`
            }
        }
    }

    class Villain extends Humanoid {
        constructor(attributes) {
            super(attributes);
            this.attackDamage = attributes.attackDamage;
            this.henchmenStrength = attributes.henchmenStrength;
        }
        attack(target) {
            target.healthPoints -= this.attackDamage
            if (target.healthPoints > 0) {
              return `${this.name} cruelly strikes ${target.name} with ${this.weapons[0]}! ${target.name} is at ${target.healthPoints} health!`
            } else {
              return `${this.name} cruelly cuts down ${target.name} with ${this.weapons[0]}!`
            }
        }
        henchmenAttack(target) {
            target.healthPoints -= this.attackDamage
            if (target.healthPoints > 0) {
              return `${this.name}'s followers charge at ${target.name}! ${target.name} is at ${target.healthPoints} health!`
            } else {
              return `${this.name}'s followers defeat ${target.name}!`
            }
        }
    }
  
    const paloroth = new Villain({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 100,
      name: 'Paloroth',
      team: 'Veiled Falls',
      weapons: [
        'Fellblade',
        'Spiked Mace',
      ],
      language: 'Elvish',
      attackDamage: 10,
      henchmenStrength: 8,
    });
  
    const dunderman = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 90,
      name: 'Dunder Man',
      team: 'Tower of Lords',
      weapons: [
        'Hero\'s Sword',
        'Hero\'s Shield',
      ],
      language: 'Common Tongue',
      attackDamage: 40,
    });
  
    console.log(dunderman.attack(paloroth))
    console.log(paloroth.henchmenAttack(dunderman))
    console.log(paloroth.attack(dunderman))
    console.log(dunderman.attack(paloroth))
    console.log(paloroth.henchmenAttack(dunderman))
    console.log(paloroth.attack(dunderman))
    console.log(dunderman.attack(paloroth))