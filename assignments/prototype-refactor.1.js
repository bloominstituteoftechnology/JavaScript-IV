/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday
function GameObject (attrs){
  this.createdAt = attrs.createdAt;
  this.dimensions = attrs.dimensions;
}
GameObject.prototype.speak = function(){
  return ('Object was removed from the game.')
};

function CharacterStats (attrs){
  GameObject.call(this,attrs);
  this.CharacterStats = attrs.CharacterStats;
  this.healthPoints = attrs.healthPoints;
  this.name = attrs.name;
}  
  CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function(){
  return (`${this.name} took damage.`)
}

 function Humanoid (attrs){
   CharacterStats.call(this,attrs);
   this.team = attrs.Humanoid;
   this.weapons = attrs.Humanoid;
   this.language = attrs.Humanoid;
 }
 Humanoid.prototype = Object.create(CharacterStats.prototype);

 Humanoid.prototype.greet = function(){
  return (`${this.name} offers a greeting in ${this.language}.`)
}
2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject{
    constructor(attrs){
        this.createdAt = attrs.createdAt;
        this.dimensions = attrs.dimensions;
    }
    speak(){
        return (`${this.name} was removed from the game.`);
    }
}
class CharacterStats extends GameObject{
    constructor(attrs) {
        super(attrs);
        this.CharacterStats = attrs.CharacterStats;
        this.healthPoints = attrs.healthPoints;
        this.name = name;
    }
    takeDamage(){
        return (`${this.name} took damage.`);
    }
}

class Humanoid extends CharacterStats{
    constructor(attrs) {
        super(attrs);
        this.team = attrs.team;
        this.weapons = attrs.weapons;
        this.language = attrs.language;
    }
    greet(){
        return (`${this.name} offers a greeting in ${this.language}.`);
    }
}