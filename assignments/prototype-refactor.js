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
function GameObject(createdAt, name, dimensions) {
    this.createdAt = createdAt,
      this.name = name,
      this.dimensions = dimensions
  }
  
  GameObject.prototype.destroy = function () {
    return `${this.name} was removed from the game.`
  }
  
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  function CharacterStats(createdAt, name, dimensions, healthPoints) {
    GameObject.call(this, createdAt, name, dimensions),
      this.healthPoints = healthPoints
  }
  CharacterStats.prototype = Object.create(GameObject.prototype)
  CharacterStats.prototype.takeDamage = function () {
    return `${this.name} took damage.`
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
  function Humanoid(createdAt, name, dimensions, healthPoints, team, weapons, language) {
    CharacterStats.call(this, createdAt, name, dimensions, healthPoints),
      this.team = team,
      this.weapons = weapons,
      this.language = language
  }
  Humanoid.prototype = Object.create(CharacterStats.prototype)
  Humanoid.prototype.greet = function () {
    return `${this.name} offers a greeting in ${this.language}.`
  }
  
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
  const mage = new Humanoid(new Date(), 'Bruce', { length: 2, width: 1, height: 1 }, 5, 'Mage Guild', ['Staff of Shamalama'], 'Common Tongue');
  const swordsman = new Humanoid(new Date(), 'Sir Mustachio', { length: 2, width: 2, height: 2 }, 15, 'The Round Table', ['Giant Sword', 'Shield'], 'Common Tongue');
  const archer = new Humanoid(new Date(), 'Lilith', { length: 2, width: 1, height: 1 }, 10, 'Forest Kingdom', ['Bow', 'Dagger'], 'Elvish');
  

  
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