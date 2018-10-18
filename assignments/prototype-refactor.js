/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

function GameObject(attr){
    this.createdAt = attr.createdAt;
    this.dimensions = attr.dimensions;
   }
   
   GameObject.prototype.destroy = function(){
     return `${this.name} was removed from the game.`
   }
   
   /*
     === CharacterStats ===
     * hp
     * name
     * takeDamage() // prototype method -> returns the string '<object name> took damage.'
     * should inherit destroy() from GameObject's prototype
   */
   function CharacterStats(CharAttr){
     GameObject.call(this,CharAttr);
     this.hp = CharAttr.hp;
     this.name = CharAttr.name;
   }
   
   CharacterStats.prototype = Object.create(GameObject.prototype);
   CharacterStats.prototype.takeDamage = function(){
     return `${this.name} took damage.`;
   }
   /*
     === Humanoid ===
     * faction
     * weapons
     * language
     * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
     * should inherit destroy() from GameObject through CharacterStats
     * should inherit takeDamage() from CharacterStats
   */
   function Humanoid(HumanoidAttr){
     CharacterStats.call(this,HumanoidAttr);
     this.faction = HumanoidAttr.faction;
     this.weapons = HumanoidAttr.weapons;
     this.language = HumanoidAttr.language;
   }
   
   Humanoid.prototype = Object.create(CharacterStats.prototype);
   Humanoid.prototype.greet = function(){
     return `${this.name} offers a greeting in ${this.language}.`;
   }

   /////////////////////////
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

  /////////////////////////
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