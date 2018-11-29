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
    constructor (obj) {
        // constructor assigns whatever is passed in for dimensions and createdAt
        this.createdAt = obj.createdAt;
        this.dimensions = obj.dimensions;
    }
    // create a prototype method called destroy assigned to GameObject
    destroy (){
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
    constructor (stats) {
        // Super allows me to gain access to the this items in the extended class
        super (stats);
        // assign hp and name based on what is passed in
        this.healthPoints = stats.healthPoints;
        this.name = stats.name;
    };
    // create a prototype method called takeDamage and assigns it to the CharacterStats.prototype
    takeDamage (){
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
  
  class Humanoid extends CharacterStats {
    constructor (character) {
        super (character);
        // assign team based on what is passed in
        this.team = character.team;
        // assign weapons based on what is passed in
        this.weapons = character.weapons;
        // assign language based on what is passed in
        this.language = character.language
    };
    // declare a prototype method of greet for the Humanoid prototype
    greet (){
        return `${this.name} offers a greeting in ${this.language}.`;
    };
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
    console.log(archer.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
   
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
    // VILLAIN 
    
    class Villain extends Humanoid {
        constructor (stats) {
            super (stats);
            this.special = stats.special;
            this.power = stats.power;
        };

        attack (obj){
            let damage = (Math.floor(Math.random() * this.power) + 5);
            obj.healthPoints = obj.healthPoints - damage;
            if(obj.healthPoints <= 0){
                return obj.destroy();
            } else if (obj.healthPoints < 25 && obj.healthPoints > 1){
                return `${this.name}'s health is low, heal NOW! Health remains: ${obj.healthPoints} points`;
            } else {
                return `${this.name} attacked ${obj.name} with ${this.special}. ${obj.healthPoints} health left!`;
            }
        };
        heal (){
            let regenerate = (Math.floor(Math.random() * 10) + 5);
            this.healthPoints = this.healthPoints + regenerate;
            if(this.healthPoints > 100){
                this.healthPoints = 100;
                return `${this.name} regenerated. Total health: ${this.healthPoints}`; 
            } else {
                return `${this.name} regenerated. Total health: ${this.healthPoints}`;
            }
        };
    };
        
    
     const thanos = new Villain({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 4,
      },
      healthPoints: 100,
      name: 'Thanos',
      team: 'Titan',
      weapons: [
        'Gauntlet',
        'Cute Smile',
      ],
      language: 'Greek',
      special: 'Infinity Stones',
      power: 20
    });
  
      // HERO 
    
    class Hero extends Humanoid {
        constructor (stats) {
            super (stats);
            this.special = stats.special;
            this.power = stats.power;
        };
        attack (obj){
            let damage = (Math.floor(Math.random() * this.power) + 5);
            obj.healthPoints = obj.healthPoints - damage;
            if(obj.healthPoints <= 0){
              return obj.destroy();
            } else if (obj.healthPoints < 25 && obj.healthPoints > 1){
              return `${this.name}'s health is low, heal NOW! Health remains: ${obj.healthPoints} points.`
            } else {
              return `${this.name} attacked ${obj.name} with ${this.special}. ${obj.healthPoints} health left!`;
            }
        };
        heal (){
            let regenerate = (Math.floor(Math.random() * 10) + 5);
            this.healthPoints = this.healthPoints + regenerate;
            if(this.healthPoints > 100){
              this.healthPoints = 100;
              return `${this.name} regenerated. Total health: ${this.healthPoints}`;
            } else {
              return `${this.name} regenerated. Total health: ${this.healthPoints}`;
            }
        };
    }
       
       const hulk = new Hero({
        createdAt: new Date(),
        dimensions: {
          length: 1,
          width: 3,
          height: 4,
        },
        healthPoints: 100,
        name: 'Hulk',
        team: 'Avengers',
        weapons: [
          'Anger',
        ],
        language: 'English',
        special: 'Smash',
        power: 25
      });
  
    // ============================== GAME RUN ======>  
    let obj = hulk;
    let obj2 = thanos;
  
    console.log(obj2.attack(obj));
    console.log(obj2.attack(obj));
    console.log(obj2.attack(obj));
    console.log(obj2.attack(obj));
    console.log(obj2.attack(obj));
    console.log(thanos.heal());
    console.log(obj2.attack(obj));
    console.log(obj2.attack(obj));
    console.log(obj2.attack(obj));