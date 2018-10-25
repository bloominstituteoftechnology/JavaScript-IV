/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/


// function GameObject(att) {
//   this.createdAt = att.createdAt;
//   this.dimensions = att.dimensions;
// }

// GameObject.prototype.destroy = function() {
//   return `${this.name} was removed from the game`;
// }

class GameObject {
    constructor(att) {
      this.createdAt = att.createdAt;
      this.dimensions = att.dimensions;
    }
    destroy() {
      return `${this.name} was removed from the game.`;
    }
  }
  
    // function CharacterStats(att) {
    //   GameObject.call(this, att);
    //   this.hp = att.hp;
    //   this.name = att.name;
    // }
    
    // CharacterStats.prototype = Object.create(GameObject.prototype);
    
    // CharacterStats.prototype.takeDamage = function() {
    //   return `${this.name} took damage.`;
    // };
    
    class CharacterStats extends GameObject {
      constructor(characterOptions) {
        super(characterOptions);
        this.hp = characterOptions.hp;
        this.name = characterOptions.name;
      }
      takeDamage() {
        return `${this.name} took damage.`;
      }
    }

