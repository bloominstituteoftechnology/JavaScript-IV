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


class GameObject {
    constructor(gameObjAttrs) {
        this.createdAt = gameObjAttrs.createdAt;
        this.dimensions = gameObjAttrs.dimensions;
    }

    destroy() {
        return `${this.name} was removed from the game.`
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
    constructor(characterAttrs) {
        super(characterAttrs);
        this.healthPoints = characterAttrs.healthPoints;
        this.name = characterAttrs.name;
    }

    takeDamage() {
        return `${this.name} took damage!`
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
    constructor(humanoidAttrs) {
        super(humanoidAttrs);
        this.team = humanoidAttrs.team;
        this.weapons = humanoidAttrs.weapons;
        this.language = humanoidAttrs.language;
    }

    greet() {
        return `${this.name} offers a greeting in ${this.language}`;
    }
    
    attack(obj) {
        obj.healthPoints -= this.attackStrength;
        const message = `${obj.name} lost ${this.attackStrength} hp. ${obj.name} has ${obj.healthPoints} hp.`;
    
        console.log(obj.takeDamage());
        console.log(message);

        if (obj.healthPoints <= 0) {
        console.log(obj.destroy());
        }
    }
}


/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  // const mage = new Humanoid({
  //   createdAt: new Date(),
  //   dimensions: {
  //     length: 2,
  //     width: 1,
  //     height: 1,
  //   },
  //   healthPoints: 5,
  //   name: 'Bruce',
  //   team: 'Mage Guild',
  //   weapons: [
  //     'Staff of Shamalama',
  //   ],
  //   language: 'Common Tongue',
  // });

  // console.log(mage.takeDamage());
  // console.log(mage.greet());

  // const swordsman = new Humanoid({
  //   createdAt: new Date(),
  //   dimensions: {
  //     length: 2,
  //     width: 2,
  //     height: 2,
  //   },
  //   healthPoints: 15,
  //   name: 'Sir Mustachio',
  //   team: 'The Round Table',
  //   weapons: [
  //     'Giant Sword',
  //     'Shield',
  //   ],
  //   language: 'Common Tongue',
  // });

  // console.log(swordsman.takeDamage());

  // const archer = new Humanoid({
  //   createdAt: new Date(),
  //   dimensions: {
  //     length: 1,
  //     width: 2,
  //     height: 4,
  //   },
  //   healthPoints: 10,
  //   name: 'Lilith',
  //   team: 'Forest Kingdom',
  //   weapons: [
  //     'Bow',
  //     'Dagger',
  //   ],
  //   language: 'Elvish',
  // });

  
  // console.log(mage.createdAt); // Today's date
  // console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  // console.log(swordsman.healthPoints); // 15
  // console.log(mage.name); // Bruce
  // console.log(swordsman.team); // The Round Table
  // console.log(mage.weapons); // Staff of Shamalama
  // console.log(archer.language); // Elvish
  // console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  // console.log(mage.takeDamage()); // Bruce took damage.
  // console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  
  // Villain Object

  class Villain extends Humanoid {
      constructor(villainAttrs) {
          super(villainAttrs);
          this.attackStrength = villainAttrs.attackStrength;
      }

      bossAttack(obj) {
        obj.healthPoints -= (this.attackStrength * 5);
        const message = `${this.name} attacked ${obj.name} with Boss Attack!!! ${obj.name} lost ${this.attackStrength} hp. ${obj.name} has ${obj.healthPoints} hp.`;
        
        console.log(obj.takeDamage());
        console.log(message);
    
        if (obj.healthPoints <= 0) {
          console.log(obj.destroy());
        }
      }

  }


  // Hero Object
  class Hero extends Humanoid {
      constructor(heroAttrs) {
          super(heroAttrs);
          this.attackStrength = heroAttrs.attackStrength;
      }
  }




  
  const knight = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 3,
      height: 3,
    },
    healthPoints: 25,
    name: 'Sir Aurthur',
    team: 'Templars',
    weapons: [
      `Knight's Sword`,
      `Knight's Armor`,
    ],
    language: 'Common Tongue',
    attackStrength: Math.floor(Math.random() * 10) + 1
  });


  const demonBoss = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 5,
      width: 6,
      height: 6,
    },
    healthPoints: 40,
    name: 'Dante',
    team: `Devil's Angels`,
    weapons: [
      `Demon Breath`,
      `Claws`,
    ],
    language: `Fire`,
    attackStrength: Math.floor(Math.random() * 5) + 1
  });





  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;

  

  console.log(knight.greet());
  console.log(knight.attack(demonBoss));
  console.log(demonBoss.attack(knight));
  console.log(demonBoss.attack(knight));
  console.log(demonBoss.bossAttack(knight));

  // * Create two new objects, one a villain and one a hero and fight it out with methods!