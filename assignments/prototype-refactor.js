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

function GameObject(obj){
    // constructor assigns whatever is passed in for createdAt
    this.createdAt = obj.createdAt;
    // constructor assigns whatever is passed in for dimensions
    this.dimensions = obj.dimensions;
  }
  
  // create a prototype method called destroy assigned to GameObject
  GameObject.prototype.destroy = function(){
    return `${this.name} was removed from the game.`;
  }
  
  /*
    === CharacterStats ===
    * healthPoints
    * name
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  function CharacterStats(stats) {
   // call the methods and properties from GameObject
   GameObject.call(this, stats);
   // assign hp based on what is passed in
   this.healthPoints = stats.healthPoints;
   // assign name based on what is passed in
   this.name = stats.name;
  }
  
  // assign inheritance of the prototype methods from GameObject to CharacterStats
  CharacterStats.prototype = Object.create(GameObject.prototype);
  
  // create a prototype method called takeDamage and assigns it to the CharacterStats.prototype
  CharacterStats.prototype.takeDamage = function(){
    return `${this.name} took damage.`;
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
  
  function Humanoid(character){
    // call the methods and prototypes from CharacterStats
    CharacterStats.call(this, character);
    // assign team based on what is passed in
    this.team = character.team;
    // assign weapons based on what is passed in
    this.weapons = character.weapons;
    // assign language based on what is passed in
    this.language = character.language;
  }
   // assign inheritance of prototype methods and properties from CharacterStats to Humanoid
  Humanoid.prototype = Object.create(CharacterStats.prototype);
   // declare a prototype method of greet for the Humanoid prototype
  Humanoid.prototype.greet = function(){
    return `${this.name} offers a greeting in ${this.language}.`;
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
    
    function Villain(stats){
      Humanoid.call(this, stats);
      this.special = stats.special;
      this.power = stats.power;
    }
     Villain.prototype = Object.create(Humanoid.prototype);
     Villain.prototype.attack = function(obj){
      let damage = (Math.floor(Math.random() * this.power) + 5);
      obj.healthPoints = obj.healthPoints - damage;
      if(obj.healthPoints <= 0){
        return obj.destroy();
      } else if (obj.healthPoints >= 0 && obj.healthPoints < 15){
        return `${this.name}'s health is low, heal NOW! Health remains: ${obj.healthPoints} points`;
      } else {
        return obj.healthPoints;
      }
    }
     Villain.prototype.heal = function(){
      let regenerate = (Math.floor(Math.random() * 50) + 25);
      this.healthPoints = this.healthPoints + regenerate;
      if(this.healthPoints >= 50){
        this.healthPoints = 50;
        return this.healthPoints; 
      } else {
      return this.healthPoints;
      }
    }
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
    
      function Hero(stats){
        Humanoid.call(this, stats);
        this.special = stats.special;
        this.power = stats.power;
      }
       Hero.prototype = Object.create(Humanoid.prototype);
       Hero.prototype.attack = function(obj){
        let damage = (Math.floor(Math.random() * this.power) + 5);
        obj.healthPoints = obj.healthPoints - damage;
        if(obj.healthPoints <= 0){
          return obj.destroy();
        } else if (obj.healthPoints >= 0 && obj.healthPoints < 25){
          return `${this.name}'s health is low, heal NOW! Health remains: ${obj.healthPoints} points`
        } else {
          return obj.healthPoints;
        }
      }
       Hero.prototype.heal = function(){
        let regenerate = (Math.floor(Math.random() * 50) + 15);
        this.healthPoints = this.healthPoints + regenerate;
        if(this.healthPoints >= 50){
          this.healthPoints = 50;
          return this.healthPoints;
        } else {
        return this.healthPoints;
        }
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
        power: 20
      });
  
    let obj = thanos;
  
    console.log(hulk.attack(obj));
    console.log(hulk.attack(obj));
    console.log(hulk.attack(obj));
    console.log(hulk.attack(obj));
    console.log(hulk.attack(obj));
    console.log(thanos.heal());
    console.log(hulk.attack(obj));
    console.log(hulk.attack(obj));
    console.log(hulk.attack(obj));