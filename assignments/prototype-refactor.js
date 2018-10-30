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

function GameObject(options) {
    this.name = options.name;
    this.createdAt = options.createdAt; // binding funcs to args
    this.dimensions = options.dimensions;
  }
  
  GameObject.prototype.destroy = function () {
    return `${this.name} was removed from the game`;
  };
  
  
  /*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
  */
  
  function CharacterStats(chrOptions) {
    GameObject.call(this, chrOptions);
    this.hp = chrOptions.hp;
  }
  
  CharacterStats.prototype = Object.create(GameObject.prototype); //creating an obj and inheriting information from GameObject
  
  CharacterStats.prototype.takeDamage = function() {
    return `${this.name} took damage.`;
  };
  
  /*
    === Humanoid ===
    * faction
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
  
  // constructor function for humanoid which contains weapons, faction and language
  function Humanoid(humanoidAttr) { 
    CharacterStats.call(this, humanoidAttr); // this refers to Humanoid
    this.weapons = humanoidAttr.weapons;
    this.faction = humanoidAttr.faction;
    this.language = humanoidAttr.language;
  }
  
  Humanoid.prototype = Object.create(GameObject.proto
    type); // inheriting
  
  Humanoid.prototype.greet = function() {
    return `${this.name} offers a greeting in ${this.language}`;
  };
   
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
  