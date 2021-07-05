/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

 
/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

class GameObject {
    constructor(objectAttributes) {
        this.createdAt = objectAttributes.createdAt;
        this.dimensions = objectAttributes.dimensions;
    }


    destroy() {
        return `${this.name} took damage and was defeated! ${this.name} was removed from the game.`;
      }

    attack(enemy) {
    if (enemy.hp > 0 && this.hp > 0) {
        enemy.hp = enemy.hp - this.strength;

        if(enemy.hp <= 0) {
        return enemy.destroy();
        }

        return enemy.takeDamage();
    } else if (enemy.hp <= 0 && this.hp > 0){
        return `Cannot Be Attacked: ${enemy.name} has already been removed.`
    } else {
        return `${this.name} Cannot Attack: ${this.name} has already been removed.`
    }
    }
}

  
  /*
    === CharacterStats ===
    * hp
    * name
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */

  class CharacterStats extends GameObject {
      constructor(charAttributes) {
          super(charAttributes);
          this.hp = charAttributes.hp;
          this.name = charAttributes.name;
      }


      takeDamage() {
        return `${this.name} took damage. ${this.name}'s HP is now ${this.hp}.`;
      }

      restoredHP() {
        return `${this.name} has recovered ${this.restoration} HP.`;
      }

      drainedHP(enemy) {
        return `${this.name} has drained ${enemy.name}'s HP! ${this.name} recovered ${this.restoration} HP.`;
      }
  }
  
  /*
    === Humanoid ===
    * faction
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */

  class Humanoid extends CharacterStats {
      constructor(humanAttributes) {
          super(humanAttributes);
          this.faction = humanAttributes.faction;
          this.weapons = humanAttributes.weapons;
          this.language = humanAttributes.language;
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
  
  // Test you work by uncommenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      hp: 5,
      name: 'Bruce',
      faction: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Toungue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      hp: 15,
      name: 'Sir Mustachio',
      faction: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Toungue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      hp: 10,
      name: 'Lilith',
      faction: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
    
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.hp); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.faction); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
    // Stretch task: 
    // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villian and one a hero and fight it out with methods!

    class Hero extends Humanoid {
        constructor(heroAttributes) {
            super(heroAttributes);
            this.strength = heroAttributes.strength;
            this.restoration = heroAttributes.restoration;
        }


        restoreHP(target) {
            if (this.hp > 0 && target.hp > 0) {
                target.hp = target.hp + this.restoration;
        
              return target.restoredHP();
            } else if (this.hp <= 0 && target.hp > 0){
              return `Cannot Be Healed: ${target.name} has already been removed.`
            } else {
              return `${this.name} Cannot Heal: ${this.name} has already been removed.`
            }
        }
    }
  
  
    class Villian extends Humanoid {
        constructor(villianAttributes) {
            super(villianAttributes);
            this.strength = villianAttributes.strength;
            this.restoration = villianAttributes.restoration;
        }


        drainHP(hero) {
            if (this.hp > 0 && hero.hp > 0) {
              hero.hp = hero.hp - this.restoration;
              this.hp = this.hp + this.restoration;
        
              return this.drainedHP(hero);
            } else if (hero.hp <= 0 && this.hp > 0){
              return `Cannot Be Drained: ${hero.name} has already been removed.`
            } else {
              return `${this.name} Cannot Drain: ${this.name} has already been removed.`
            }
        }
    }
  
  
    const hero = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 5,
      },
      hp: 10,
      name: 'Good Sir Turnip',
      faction: 'Whatever',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Vegatable',
      strength: 2,
      restoration: 3
    });
  
    
    const villian = new Villian({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 3,
        height: 5,
      },
      hp: 10,
      name: 'Misunderstood Radish',
      faction: 'Whatever',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Vegetable',
      strength: 3,
      restoration: 2
    });
  
    // console.log(hero.attack(villian));
    // console.log(hero.attack(villian));
    // console.log(hero.attack(villian));
    // console.log(hero.attack(villian));
    // console.log(hero.attack(villian));
    // console.log(hero.attack(villian));
  
    // console.log(villian.attack(hero));
    // console.log(villian.attack(hero));
    // console.log(villian.attack(hero));
    // console.log(villian.attack(hero));
    // console.log(villian.attack(hero));
    // console.log(villian.attack(hero));
  
    console.log(hero.attack(villian));
    console.log(villian.drainHP(hero));
    console.log(hero.attack(villian));
    console.log(villian.attack(hero));
    console.log(hero.attack(villian));
    console.log(villian.attack(hero));
    console.log(hero.attack(villian));
    console.log(villian.attack(hero));
    console.log(hero.restoreHP(hero));
    console.log(villian.attack(hero));
  
    // console.log(villian.attack(hero));
    // console.log(hero.attack(villian));
    // console.log(villian.attack(hero));
    // console.log(hero.attack(villian));
    // console.log(villian.attack(hero));
    // console.log(hero.restoreHP(hero));
    // console.log(villian.attack(hero));
    // console.log(villian.attack(hero));
    // console.log(hero.attack(villian));
    // console.log(villian.attack(hero));