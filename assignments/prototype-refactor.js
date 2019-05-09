/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

class GameObject {
    constructor(object) {
      this.createdAt = object.createdAt;
      this.name = object.name;
      this.dimensions = object.dimensions;
    }

    destroy() {
        return `${this.name} was removed from the game.`;
    }
}

  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  
  class CharacterStats extends GameObject {
      constructor(object) {
          super(object);
          this.healthPoints = object.healthPoints;
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

  class Humanoid extends CharacterStats {
      constructor(object) {
          super(object);
          this.team = object.team;
          this.language = object.language;
          this.weapons = object.weapons;
      }

      greet() {
        return `${this.name} offers a greeting in ${this.language}.`;
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

  class Hero extends Humanoid {
      constructor(object) {
          super(object);
      }

      righteousAttack(villain) {
        let damage = 3;
        villain.loseHealthPoints(damage);
      }

      loseHealthPoints(pointsDamage) {
        this.healthPoints = this.healthPoints - pointsDamage;
        console.log(`${this.name} took ${pointsDamage} damage`);
        this.isDestroyed();
      }

      isDestroyed() {
        if(this.healthPoints <= 0){
          console.log(`${this.name} has been destroyed`);
        }
        console.log(`${this.name} has ${this.healthPoints} health remaining`);
      }
  }
  

  class Villain extends Humanoid {
      constructor(object) {
          super(object);
      }

      barbaricAttack(hero) {
        let damage = 5;
        hero.loseHealthPoints(damage);
      }

      loseHealthPoints(pointsDamage) {
        this.healthPoints = this.healthPoints - pointsDamage;
        console.log(`${this.name} took ${pointsDamage} damage`);
        this.isDestroyed();
      }

      isDestroyed() {
        if(this.healthPoints <= 0){
          console.log(`${this.name} has been destroyed`);
        }
        console.log(`${this.name} has ${this.healthPoints} health remaining`);
      }
  }
  
    // Create hero object
    const hero = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Good Hero',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    // create villain object
    const villain = new Villain({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 15,
      name: 'Evil Villain',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    console.log("\n*** FIGHT! ***")
    console.log("Hero starting health points: ", hero.healthPoints); // 10 starting points
    console.log("Villain starting health points: ", villain.healthPoints); // 15 starting points
  
    hero.righteousAttack(villain); // villain takes 3 damage, has 12 health left
    hero.righteousAttack(villain); // villain takes 3 damage, has 9 health left
    villain.barbaricAttack(hero); // hero takes 5 damage, has 5 health left
    hero.righteousAttack(villain); // villain takes 3 damage, has 6 health left
    hero.righteousAttack(villain); // villain takes  3 damage, has 3 health left
    villain.barbaricAttack(hero); // hero takes 5 damage, has 5 health left, and is thus destroyed