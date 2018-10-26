/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
    constructor(gameObjectAttributes) {
    this.createdAt = gameObjectAttributes.createdAt;
    this.dimensions = gameObjectAttributes.dimensions;
  }
  destroy() {
      return `${this.name} was removed from the game.`;
  }
}
  

  class CharacterStats extends GameObject{
      constructor(characterStatsAttribute) {
        super(characterStatsAttribute)
        this.hp = characterStatsAttribute.hp;
        this.name = characterStatsAttribute.name;  
  }
  takeDamage() {
      return `${this.name} took damage.`;
  }
}

  class Humanoid extends CharacterStats {  
      constructor(humanoidAttributes) {
    super(humanoidAttributes);
    this.faction = humanoidAttributes.faction; 
    this.weapons = humanoidAttributes.weapons; 
    this.language = humanoidAttributes.language; 
  }
  greet() {
      return `${this.name} offers a greeting in ${this.language}.`;
  }
  }
 
  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    hp: 5,
    name: 'Joseph',
    faction: 'Mage Guild',
    weapons: [
      'Staff of Magic',
    ],
    language: 'Common',
  });
  
  
  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    hp: 15,
    name: 'Sir David',
    faction: 'Knights Templar',
    weapons: [
      'large Sword',
      'Shield',
    ],
    language: 'Common',
  });
  
  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 10,
    name: 'Samantha',
    faction: 'Kingdom of the Forest',
    weapons: [
      'Bow and Arrow',
      'Small Dagger',
    ],
    language: 'Elvish',
  });


  
  console.log(mage.createdAt);
  console.log(archer.dimensions); 
  console.log(swordsman.hp); 
  console.log(mage.name); 
  console.log(swordsman.faction); 
  console.log(mage.weapons);
  console.log(archer.language); 
  console.log(archer.greet()); 
  console.log(mage.takeDamage()); 
  console.log(swordsman.destroy()); 
  
  

  