/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
// function GameObject (createdAt, dimensions) {
//     this.createdAt = createdAt;
//     this.dimensions = dimensions;  
//   }
//   GameObject.prototype.destroy = function() {console.log('Object was removed from the game.');};

  class GameObject {
      constructor(value) {
          this.createdAt = value.createdAt;
          this.dimensions = value.dimensions
      }
      destroy() {
          console.log('Object was removed from the game.')
      }
  }
  
//   function CharacterStats (hp,name) {
//     this.hp = hp;
//     this.name = name;
//     GameObject.call(this,createdAt,dimensions);
//   }
//   CharacterStats.prototype.takeDamage = function() {console.log('<Object name> took damage.');};
//   CharacterStats.prototype = Object.create(GameObject.prototype);

//   function Humanoid(faction,weapons,language) {
//     this.faction = faction;
//     this.weapons = weapons;
//     this.language = language;
//     CharacterStats.call(this,hp,name);
//   }
//   Humanoid.prototype.greet = function() {console.log('<Object name> offers a greeting in <object language>.');}
  
//   Humanoid.prototype = Object.create(CharacterStats.prototype);
  