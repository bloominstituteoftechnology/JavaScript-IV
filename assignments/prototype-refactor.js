// Here we have a functioning solutoin to your challenge from yesterday.
// Today your goal is to refactor all of this code to use ES6 Classes.
// The console.log() statements should still return what is expected of them.
/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance heirarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properites and methods that are defined in their block comments below:
*/

/** 
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/
class GameObject {
  constructor (gameObj) {
   this.createdAt = gameObj.createdAt;
   this.dimensions = gameObj.dimensions;
 }
 destroy() {
   return `${this.name} was removed from the game`;
 };
}



class CharacterStats extends GameObject{
 constructor(stats) {
   super(stats)
   this.hp = stats.hp;
   this.name = stats.name;
 }
 
 takeDamage(attack) {
   this.hp -= attack;
   if (this.hp <= 0){
   console.log(`${this.name} dead Jim! No returning. And now has ${this.hp} remaining.`);
   } 
   return `${this.name} took damage and now has ${this.hp} remaining.`;
 };
 
}

class Humanoid extends CharacterStats {

  constructor(human){
   // this {};
   super(human);
   this.faction = human.faction;
   this.weapons = human.weapons;
   this.language = human.language;
   // Hitpoints.call(this, human);
  //return this {};
 }
 greet() {
   return `${this.name} offers a greeting in ${this.language}`;
}
}

// Test you work by uncommenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
 createdAt: new Date(),
 dimensions: {
   length: 2,
   width: 1,
   height: 1
 },
 hp: 5,
 name: "Bruce",
 faction: "Mage Guild",
 weapons: ["Staff of Shamalama"],
 language: "Common Toungue"
});

const swordsman = new Humanoid({
 createdAt: new Date(),
 dimensions: {
   length: 2,
   width: 2,
   height: 2
 },
 hp: 15,
 name: "Sir Mustachio",
 faction: "The Round Table",
 weapons: ["Giant Sword", "Shield"],
 language: "Common Toungue"
});

const archer = new Humanoid({
 createdAt: new Date(),
 dimensions: {
   length: 1,
   width: 2,
   height: 4
 },
 hp: 10,
 name: "Lilith",
 faction: "Forest Kingdom",
 weapons: ["Bow", "Dagger"],
 language: "Elvish"
});


console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.hp); // 15
console.log(mage.name); // Bruce
console.log(swordsman.faction); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
mage.takeDamage(5);
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
