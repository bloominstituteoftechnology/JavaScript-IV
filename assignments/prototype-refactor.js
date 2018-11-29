/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
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
class GameObject{
    constructor(attributes){
        this.createdAt = attributes.createdAt;
        this.dimensions = attributes.dimensions;
    }
    destroy(char){ 
            return `${char.name} was removed from the game.`
    }
}
class CharacterStats extends GameObject{
    constructor(charAttributes){
        super(charAttributes);
        this.healthPoints = charAttributes.healthPoints;
        this.name = charAttributes.name;
        this.power = charAttributes.power;
    }
    takeDamage(){
        console.log(`${this.name} took damage.`)
    }
    
}



/*
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function Humanoid(humAttributes){
  CharacterStats.call(this, humAttributes);
  this.team = humAttributes.team;
  this.weapons = humAttributes.weapons;
  this.language = humAttributes.language;
}
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function(){
  return `${this.name} offers a greeting in ${this.language}`
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
  function Hero(heroAttrs){
    Humanoid.call(this, heroAttrs);
    this.power = heroAttrs.power;
  }
  Hero.prototype = Object.create(Humanoid.prototype);
  Hero.prototype.attack = function(char, power){
     let finalBlow = power();
    if(char.healthPoints>0){
     alert(`Attacking ${char.name} for ${finalBlow}`);
     char.healthPoints -= finalBlow;
     document.getElementById("vilhealth").innerHTML = `Health: ${char.healthPoints}`;
     if(char.healthPoints <= 0){
      alert(this.destroy(char));
      document.getElementById("vilhealth").innerHTML = `Health: 0`;
     }
    } 
  }
 
  function Villain(villAttrs){
    Humanoid.call(this, villAttrs);
    this.power = villAttrs.power;
  }

  Villain.prototype = Object.create(Humanoid.prototype);
  Villain.prototype.spell = function(char, power){
      let blow = power();
     alert(`Casting a spell on ${char.name} for ${blow}`);
     char.healthPoints -= blow;
     document.getElementById("herohealth").innerHTML = `Health: ${char.healthPoints}`;
     if(char.healthPoints <= 0){
      alert(this.destroy(char));
      document.getElementById("herohealth").innerHTML = `Health: 0`;
     }
    };

  const matt = new Hero ({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Matt',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
    power: function(){
      return Math.floor(Math.random() * Math.floor(11));
    },
  });
  const witch = new Villain ({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Evil Witch',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
    power: function(){
      return Math.floor(Math.random() * Math.floor(11));
    },
  });
 
  // console.log(matt.attack(witch, matt.power))
  // console.log(witch.healthPoints)
  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
  document.getElementById("herohealth").innerHTML = `Health: ${matt.healthPoints}`;
  document.getElementById("vilhealth").innerHTML = `Health: ${witch.healthPoints}`;
  
 
