/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
 //=== GameObject ===
 
 class GameObject {
     constructor(attributes) {
        this.createdAt = attributes.createdAt;
        this.dimensions = attributes.dimensions; 
     }
     destroy() {
        return `${this.name} was removed from game.`
     }
 }
  
  //=== CharacterStats ===

  class CharacterStats extends GameObject {
      constructor(charAttributes) {
        super(charAttributes);
        this.hp = charAttributes.hp;
        this.name = charAttributes.name;
      }
      takeDamage() {
        return `${this.name} took damage`
      }
  }
  
  //=== Humanoid ===

  class Humanoid extends CharacterStats {
      constructor(humanoidAtts) {
          super(humanoidAtts);
          this.faction = humanoidAtts.faction;
          this.weapons = humanoidAtts.weapons;
          this.language = humanoidAtts.language;
      }
      greet() {
        return `${this.name} offers a greeting in ${this.language}`
      }
  }

  class Hero extends Humanoid {
      constructor(heroAtts) {
          super(heroAtts);
      }
      catchPhrase() {
          return `${this.name} says, look you got blood on my dress.`
      }
  }

  class Villan extends Humanoid {
      constructor(villanAtts) {
          super(villanAtts);
      }
      finishingPhrase() {
          return `${this.name}, says: Did I do that?`
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
  
  const hero =  new Humanoid ({
    createdAt: new Date(),
    dimensions: {
      length: 3,
      width: 2,
      height: 5,
    },
    hp: 20,
    name: 'Bouncing Betty',
    faction: 'Tot Land',
    weapons: [
      'Parasol',
      'Tessen',
    ],
    language: 'Tabaxi',
  });
  
  const villan =  new Humanoid ({
    createdAt: new Date(),
    dimensions: {
      length: 3,
      width: 2,
      height: 5,
    },
    hp: 20,
    name: 'Senior Pink',
    faction: 'Celestial Dragons',
    weapons: [
      'Brass Knuckles',
      'Piano Wire',
    ],
    language: 'Common Tounge',
  })
  
  
  
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
  console.log(hero.greet());
  console.log(villan.takeDamage());