/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is 
expected of them.

*/

/* Before Refactoring

//Parent
function GameObject(attr){
    this.createdAt = attr.createdAt;
    this.dimensions = attr.dimensions;
    this.name = attr.name;
  }
  GameObject.prototype.destroy=function(){
    return `${this.name} was removed from the game.`
  }
  
  //Child
  function CharacterStats(childAttr){
    GameObject.call(this, childAttr);
    this.healthPoints = childAttr.healthPoints;
    //console.log(childAttr)
  }
  CharacterStats.prototype = Object.create(GameObject.prototype);
  CharacterStats.prototype.takeDamage=function(){
    return `${this.name} took damage.`
  }
  
  
  
  //grandchild
  function Humanoid(grandChildAttr){
    CharacterStats.call(this, grandChildAttr);
    this.team = grandChildAttr.team;
    this.weapons = grandChildAttr.weapons;
    this.language = grandChildAttr.language;
    //console.log(grandChildAttr)
  }
  Humanoid.prototype = Object.create(CharacterStats.prototype);
  Humanoid.prototype.greet=function(){
    return `${this.name} offers a greeting in ${this.language} language`
  }

  */
  
 // After Refactoring
    //Parent
class GameObject{
  
    constructor(attr){
      this.createdAt = attr.createdAt;
      this.dimensions = attr.dimensions;
      this.name = attr.name;
    }
    
    destroy(){
      return `${this.name} was removed from the game.`
    }
    
  }
  
  
  //Child
  class CharacterStats extends GameObject{
    
    constructor(childAttr){
      super(childAttr);
      this.healthPoints = childAttr.healthPoints;
      
    
      }
    
    takeDamage(){
      return `${this.name} took damage.`
      }
  }
  
  class Humanoid extends CharacterStats{
    
    constructor(grandChildAttr){
      super(grandChildAttr);
      this.team = grandChildAttr.team;
      this.weapons = grandChildAttr.weapons;
      this.language = grandChildAttr.language;
      
    }
    
    greet(){
      return `${this.name} offers a greeting in ${this.language} language`
    }
  }
  
  
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
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
