/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() 
statements should still return what is expected of them.

*/


/******    Starts below  *******/

///GameObject
class GameObject {
    constructor(gameAttributes) {
        this.createdAt = gameAttributes.createdAt;
        this.dimensions = gameAttributes.dimensions;
    }
    destroy() {
        console.log(`${this.name} was removed from the game.`);
    }
  }
  
  
  ///CharacterStats
  
  class CharacterStats extends GameObject {
    constructor(characterAttributes) {
        super(characterAttributes)
        this.hp = characterAttributes.hp;
        this.name = characterAttributes.name;
    }

    takeDamage() {
        console.log(`${this.name} took damage`);
    }
  }

  
  ///Humanoid

  class Humanoid extends CharacterStats {
    constructor(humanoidAttributes) {
        super(humanoidAttributes);
        this.faction = humanoidAttributes.faction;
        this.weapons = humanoidAttributes.weapons;
        this.language = humanoidAttributes.language;
    }

    greet() {
        console.log(`${this.name} offers a greeting in ${this.language}`);
    }
  }
  

  
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
  
  
  class Villian extends Humanoid {
      constructor(villianAttributes) {
        super(villianAttributes);
        this.attack = villianAttributes.attack;
      }

      villianAttack(hero){
        
            const randomAttack = Math.floor(Math.random() * this.attack);
            if (hero.hp > 0) {
              hero.hp -= randomAttack;
              return `${this.name} attacked ${hero.name} and dealt ${randomAttack} damage. ${hero.name} has ${hero.hp} hp left.`;
            } else if (hero.hp <= 0){
              return hero.destroy();
            }
          }

    }//class end
  

  
    class Hero extends Humanoid{
      constructor(heroAttributes) {
        super(heroAttributes);
        this.attack = heroAttributes.attack;
      }

      heroAttack(villian) {
           
            const randomAttack = Math.floor(Math.random() * this.attack);
            if (villian.hp > 0) {
              villian.hp -= randomAttack;
              return `${this.name} attacked ${villian.name} and dealt ${randomAttack} damage. ${villian.name} has ${villian.hp} hp left.`;
            } else if (villian.hp <= 0){
              return villian.destroy();
            }
          }
    }//end class
  
  
    const goblin = new Villian({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 3,
      },
      hp: 35,
      name: 'Trokt',
      faction: 'Goblin Community of England',
      weapons: [
        'Bow',
        'Pocket knife',
      ],
      language: 'Goblish',
      attack: 35
    });
  
    const wizzard = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      hp: 40,
      name: 'Blaze',
      faction: 'Wizzards of the North Coast',
      weapons: [
        'Magic wand',
        'Freeze spell',
      ],
      language: 'Wizzardish',
      attack: 35
    });
  
  
    console.log(goblin.villianAttack(wizzard)); //
    console.log(wizzard.heroAttack(goblin)); //
