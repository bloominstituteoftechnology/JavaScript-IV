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
  
