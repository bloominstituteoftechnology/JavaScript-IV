/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. 
The console.log() statements should still return what is expected of them.

*/


/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

// make a parent constructor that builds out all the objects we will be using

class gameObject {
    constructor(gameObj) {
        this.createdAt = gameObj.createdAt;
        this.dimensions = gameObj.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game ... yo.`
    }
} //parent, base constructor


  class characterStats extends gameObject {
      constructor(charStats) {
        super(charStats);
        this.hp = charStats.hp;
        this.name = charStats.name;
      }
      takeDamage() {
        return `${this.name} took some damage, yo!`

      }
  }
  class Humanoid extends characterStats {
      constructor(humanStats) {
          super(humanStats);
          this.faction = humanStats.faction;
          this.weapons = humanStats.weapons;
          this.language = humanStats.language;
      }
      greet() {
        return `${this.name} offers a cool greeting in ${this.language}`;

      }
  }

   // Hero - Ash
   class Hero extends Humanoid {
       constructor(heroObj){
           super(heroObj);
           this.juice = heroObj.juice;
           this.josh = heroObj.josh;
           this.good = heroObj.good;
           this.evil = heroObj.evil;
       }
   }

   // Villian - Trevor
   class Villian extends Humanoid {
    constructor(villianObj){
        super(villianObj);
        this.juice = villianObj.juice;
        this.josh = villianObj.josh;
        this.good = villianObj.good;
        this.evil = villianObj.evil;
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
  
    const hero = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      hp: 200,
      juice: 400,
      name: 'Ash',
      faction: 'Really good programmers',
      weapons: [
        'Shame',
        'Josh',
      ],
      language: 'All Known Languages',
    });
  
    const villian = new Villian({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      hp: 100,
      juice: 1000,
      name: 'Trevor',
      faction: 'Really good programmers',
      weapons: [
        'Evil Smile',
        'Rant',
        'Being super nice but actually is planning something evil'
      ],
      language: 'html',
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
  
    //check hero stuff
    console.log(hero.createdAt); //when did he git created?
    console.log(hero.name); //did ash pop out?
    console.log(hero.juice); // how much juice, gamerfuel does ash have?
  
