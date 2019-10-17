/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday
function GameObject(video) {
  this.createdAt = video.createdAt;
  this.name = video.name;
  this.dimensions = video.dimensions;
 }
 GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
 };

 function CharacterStats(attribute) {
  GameObject.call(this,attribute);
  this.healthPoints = attribute.healthPoints;
}
//This is the inheritance
CharacterStats.prototype = Object.create(GameObject.prototype);
//Prototype Method is Created Here
CharacterStats.prototype.takeDamage = function() {
  return `returns the string ${this.name} took damage.`
}

console.log(firstNamesAllCaps);
let firstNamesAllCaps = runners.map(function(currentValue){
  return currentValue.first_name.toUpperCase();});
console.log(firstNamesAllCaps);


let runnersLargeSizeShirt = [];

runnersLargeSizeShirt = runners.filter(function(currentValue){
  return currentValue.shirt_size === "L";
     
  
})
console.log(runnersLargeSizeShirt);


let ticketPriceTotal = 0;
ticketPriceTotal = runners.reduce(function(accumulator, currentValue){
  return accumulator + currentValue.donation;
},0)
console.log(ticketPriceTotal);

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
 class GameObject {
     contructor(obj) {
    this.createdAt = video.createdAt;
    this.name = video.name;
    this.dimensions = video.dimensions;
 }
 destroy() {
     return `${this.name} was removed from the game.`;
 }
 }
  class CharacterStats {
      contructor(obj){
          super(obj)
          this.healthPiont = obj.healthPionts;
      }
      takeDamage() {
          this.healthPiont = 1;
          return `${this.name} took damage`;
      }
  }

class humaniod extends CharacterStats {
    contructor(obj){
        super();
        this.team = obj.team;
        this.weapon = obj.weapon;
        this.language = obj.language;
    }
 greet() {
     return `${name} offer greeting in ${language} @channel standy`;
 }

 debug(student,subject){
     console.log(`${this.name} debugs `)
 }
}