/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance heirarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properites and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/
// function GameObject(obj) {
//     this.createdAt = obj.createdAt;
//     this.dimensions = obj.dimensions;
//   }
//   GameObject.prototype.destroy = function () {
//     return `${this.name} was removed from the game`;
//   }

class  GameObject {
    constructor(obj){
        this.createdAt = obj.createdAt
        this.dimensions = obj.dimensions
    }
    
    destroy(){
        return`${this.name} was removed from the game`
    }
}


  /*
    === CharacterStats ===
    * hp
    * name
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
//   function CharacterStats(obj) {
//     GameObject.call(this,obj)
//     this.hp = obj.hp;
//     this.mp = obj.mp;
//     this.strength= obj.strength;
//     this.name = obj.name;
    
//   }
  
//   CharacterStats.prototype = Object.create(GameObject.prototype);
  
//   CharacterStats.prototype.takeDamage = function(){
//     return`${this.name}  took damage.`;
//   } 

class  CharacterStats extends  GameObject {
    constructor(obj){
        super(obj)

        this.hp = obj.hp;
        this.mp = obj.mp;
        this.strength= obj.strength;
        this.name = obj.name;
    }

    takeDamage(){ 
        return`${this.name}  took damage.`;
    }
}

  
  // CharacterStats.prototype.constructor = CharacterStats
  console.dir(CharacterStats)
  
  /*
    === Humanoid ===
    * faction
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
//   function Humanoid(obj){
//     CharacterStats.call(this,obj)
//     this.faction = obj.faction 
//     this.weapons = obj.weapons 
//     this.language =  obj.language
//   }
  
//   Humanoid.prototype= Object.create(CharacterStats.prototype)
  
//   Humanoid.prototype.greet = function(){
//     return`${this.name} offers a greeting in ${this.language}.`
//   } 
  
// Humanoid.prototype.constructor = Humanoid 
class Humanoid extends CharacterStats {
    constructor(obj){
        super(obj)

        this.faction = obj.faction 
        this.weapons = obj.weapons 
        this.language =  obj.language
    }
    greet(){ 
        return`${this.name} offers a greeting in ${this.language}.`
    }
}



  console.log(Humanoid)
  
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
  
  console.log(mage);
  
  console.log(mage.createdAt); // Today's date
  console.log(mage.name); // Bruce
  console.log(mage.weapons); // Staff of Shamalama
  console.log(mage.destroy())
  console.log(mage.greet())
  console.log(mage.takeDamage()); // Bruce took damage.
  
  
  
  /*
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
  */
  
    // Stretch task: 
    // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villian and one a hero and fight it out with methods!
  
//    function  Hero(obj){
//      Humanoid.call(this,obj) 
//    }
  
//    Hero.prototype= Object.create(Humanoid.prototype)
  
//    Hero.prototype.attack = function (otherObject){
//     let damage= Math.floor(Math.random() * 3); 
  
//     if(damage === 0)
//       return `${this.name} Missed the attack`;
  
//     if(otherObject.hp>0){
//       otherObject.hp -= damage;
  
//       if(otherObject.hp - damage <=0){
//         return otherObject.destroy();
//       }
      
//       return`${this.name} takes ${damage} damage`;
//     }else{
//       //I don't know why you have to return this, but if you only invoke it it returns undefined
//       return otherObject.destroy();
//     } 
//    }
  
//   const hero = new Hero({
//     createdAt: new Date(),
//     dimensions: {
//       length: 2,
//       width: 1,
//       height: 2,
//     },
//     hp: 5,
//     name: 'Brockstar',
//     faction: 'Mage Guild',
//     weapons: [
//       'Staff of Mountains',
//     ],
//     language: 'Javascript',
//   });
  
  
  
  
//    function  Villain(obj){
//     Humanoid.call(this,obj) 
//   }
  
//   Villain.prototype= Object.create(Humanoid.prototype)
  
//   Villain.prototype.attack = function (otherObject){
//     let damage= Math.floor(Math.random() * 3); 
  
//     if(damage === 0)
//       return `${this.name} Missed the attack`;
  
//     if(otherObject.hp>0){
//       otherObject.hp -= damage;
  
//       if(otherObject.hp - damage <=0){
//         return otherObject.destroy();
//       }
  
//       return`${this.name} takes ${damage} damage`;
//     }else{
//       //I don't know why you have to return this, but if you only invoke it it returns undefined
//       return otherObject.destroy();
//     } 
//   }
  
//   const villain = new Villain({
//     createdAt: new Date(),
//     dimensions: {
//       length: 2,
//       width: 2,
//       height: 2,
//     },
//     hp: 5,
//     name: 'Anon',
//     faction: 'Hacker\'s Guild',
//     weapons: [
//       'Keyboard of Hacking',
//     ],
//     language: 'Binary',
//   });
  
//   console.log(hero)
  
//   console.log(villain)
  
//   // console.log(villain.attack(hero))
//   // console.log(villain.attack(hero))
//   // console.log(villain.attack(hero))
//   // console.log(villain.attack(hero))
//   // console.log(villain.attack(hero))
//   // console.log(villain.attack(hero))
  
//   function  encounter(){
//     let dice =Math.floor(Math.random() * 3)
  
//     if(dice  < 2 ){
//       console.log(hero.attack(villain))
//     }else if (dice < 1){
//       //villian
//       console.log(villain.attack(hero));
//     }else{
//       console.log(`Attack was blocked`)
//     }
//   }
  
//   while( hero.hp > 1 && villain.hp > 1 ){
//     encounter();
//   }