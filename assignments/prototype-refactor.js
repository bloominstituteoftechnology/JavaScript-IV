/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
=== GameObject ===
* createdAt
* name
* dimensions (These represent the character's size in the video game)
* destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

/*
function GameObject(attributes) {
this.createdAt = attributes.createdAt; 
this.name = attributes.name;
this.dimensions = attributes.dimensions; 
}

GameObject.prototype.destroy = function() {
return this.name + " " + "was removed from the game."; 
}
*/

class GameObject {
    constructor(attributes) {
        this.createAt = attributes.createdAt; 
        this.name = attributes.name; 
        this.dimensions = attributes.dimensions 
    }
    
}




/*
=== CharacterStats ===
* healthPoints
* takeDamage() // prototype method -> returns the string '<object name> took damage.'
* should inherit destroy() from GameObject's prototype
*/
function CharacterStats(info) {
GameObject.call(this,info); 
this.healthPoints = info.healthPoints; 
} 
CharacterStats.prototype = Object.create(GameObject.prototype); 
CharacterStats.prototype.takedamage = function() {
return this.healthPoints + " " + this.name + " " + "took damage"
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

function Humanoid(human) {
CharacterStats.call(this,human); 
this.team = human.team; 
this.weapons = human.weapons; 
this.language = human.language; 
}
Humanoid.prototype = Object.create(CharacterStats.prototype); 
Humanoid.prototype.greet = function() {
return this.name + " " + this.language;  
}
