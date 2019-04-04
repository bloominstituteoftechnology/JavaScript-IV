/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/




/********************************************pasted code**********************************************/



/*
  Object oriented design is commonly used in video games. 
  For this part of the assignment you will be implementing 
  several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  
  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject(obj){
    this.createdAt = obj.createdAt,
    this.name = obj.name,
    this.dimensions = obj.dimensions
  }
  
  GameObject.prototype.destroy = function(){
    return `${this.name} was removed from the game.`
  }
  
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  function CharacterStats(obj){
    GameObject.call(this, obj),
    this.healthPoints = obj.healthPoints
  }
  CharacterStats.prototype = new GameObject(this)
  CharacterStats.prototype.takeDamage = function(){
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
  function Humanoid(obj){
    CharacterStats.call(this, obj),
    this.team = obj.team,
    this.weapons = obj.weapons,
    this.language = obj.language
  }
  Humanoid.prototype = new CharacterStats(this)
  Humanoid.prototype.greet = function(){
    return `${this.name} offers a greeting in ${this.language}`
  }
  
  //villain constructor
  function Villain(obj){
    Humanoid.call(this, obj)
  }
  Villain.prototype = new Humanoid(this)
  Villain.prototype.villainAttack = function(){
    console.log(`${this.name} is attacking!`);
    let attack =  Math.floor(Math.random() * 11);      // returns a random integer from 0 to 10 
    hero.healthPoints = hero.healthPoints - attack;
    if(attack > 0){
      console.log(`${this.name} hit for ` + attack + ' damage points.')
    }else{
      console.log(`${this.name} missed.`)
    };
    console.log(`${hero.name} has ${hero.healthPoints} health points left.`)
    if(hero.healthPoints <= 0){
      fight = false;
      console.log(hero.destroy())
    }
  }
  
  
  //hero constructor
  function Hero(obj){
    Humanoid.call(this, obj)
  }
  Hero.prototype = new Humanoid(this)
  Hero.prototype.heroAttack = function(){
    console.log(`${this.name} is attacking!`);
    let attack =  Math.floor(Math.random() * 11);      // returns a random integer from 0 to 10 
    villain.healthPoints = villain.healthPoints - attack;
    if(attack > 0){
      console.log(`${this.name} hit for ` + attack + ' damage points.')
    }else{
      console.log(`${this.name} missed.`)
    };
    console.log(`${villain.name} has ${villain.healthPoints} health points left.`)
    if(villain.healthPoints <= 0){
      fight = false;
      console.log(villain.destroy())
    }
  }
  
  
  //villain and hero objects
  const hero = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 500,
    name: 'Goku',
    team: 'DragonBallZ',
    weapons: [
      'Kamehameha',
    ],
    language: 'english',
  });
  
  const villain = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 500,
    name: 'Vegeta',
    team: 'Frieza',
    weapons: [
      'Bitch Slap',
    ],
    language: 'english',
  });
   
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
    let fight = true;
    while(fight){
      if(villain.healthPoints > 0){
        console.log(villain.villainAttack())
      }
      if(hero.healthPoints > 0){
        console.log(hero.heroAttack())
      }
      
    }
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects 
    //   which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!