/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday


2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.




*/

/*  1  */ 

const GameObject = function(obj) {

    this.createdAt = obj.createdAt;
    this.dimensions = obj.dimensions;
  
  }
  
  GameObject.prototype.destroy = function() {
  
    return `${this.name} was removed from the game.`;
  
  }

/*  2  */ 

class GameObject {
    constructor(obj){
        this.createdAt = obj.createdAt;
        this.dimensions = obj.dimensions
    }
    destroy(){
        return `${this.name} was removed from the game.`;
    }
}