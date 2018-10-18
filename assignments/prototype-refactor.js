/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/
// function GameObject(gameObject) {
//     this.createdAt = gameObject.createdAt;
//     this.dimensions = gameObject.dimensions;
//   }
  
//   GameObject.prototype.destroy = function() {
//     return   `${this.name} was removed from the game.`;
//   }

  class GameObject {
      constructor(gameObject) {
        this.createdAt = gameObject.createdAt;
        this.dimensions = gameObject.dimensions;
      }
      destroy() {
        return  `${this.name} was removed from the game.`;
      }
  }
  
  /*
    === CharacterStats ===
    * hp
    * name
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
//   function CharacterStats(stats) {
//     GameObject.call(this, stats);
//     this.hp = stats.hp;
//     this.name = stats.name;
//   }
  
//   CharacterStats.prototype = Object.create(GameObject.prototype);
  
//   CharacterStats.prototype.takeDamage = function() {
//     return `${this.name} took damage.`;
//   }

  class CharacterStats extends GameObject {
      constructor(stats) {
        super(stats);
        this.hp = stats.hp;
        this.name = stats.name;
      }
      takeDamage() {
          return `${this.name} took damage.`;
      }
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
  
//   function Humanoid(human) {
//     CharacterStats.call(this, human);
//     this.faction = human.faction;
//     this.weapons = human.weapons;
//     this.language = human.language;
//     this.attack = human.attack;
//   }
  
//   Humanoid.prototype = Object.create(CharacterStats.prototype);
  
//   Humanoid.prototype.greet = function() {
//     return `${this.name} offers a greeting in ${this.language}.`
//   }

  class Humanoid extends CharacterStats {
      constructor(human) {
        super(human);
        this.faction = human.faction;
        this.weapons = human.weapons;
        this.language = human.language;
        this.attack = human.attack;
      }

      greet() {
          return `${this.name} offers a greeting in ${this.language}.`;
      }
  }
  
  
//   function Hero(hero) {
//     Humanoid.call(this, hero);
//   }
  
//   Hero.prototype = Object.create(Humanoid.prototype);
  
//   Hero.prototype.phrase = function() {
//     return `I ${this.name} from the ${this.faction} hate villains!`;
//   }

  class Hero extends Humanoid {
      constructor(hero) {
          super(hero);
      }
      phrase() {
        return `I ${this.name} from the ${this.faction} hate villains!`;
      }
  }
  
//   function Villain(villain) {
//     Humanoid.call(this, villain);
//   }
  
//   Villain.prototype = Object.create(Humanoid.prototype);
  
//   Villain.prototype.phrase = function() {
//     return `I ${this.name} from the ${this.faction} hate heroes!`;
//   }

  class Villain extends Humanoid {
      constructor(villain) {
          super(villain);
      }
      phrase() {
        return `I ${this.name} from the ${this.faction} hate heroes!`;
      }
  }
  
  
  
   
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test your work by uncommenting these 3 objects and the list of console logs below:
  
  
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
  
    const paladin = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 3,
        height: 4,
      },
      hp: 45,
      attack: 5,
      name: 'McHammer',
      faction: 'Heroes Guild',
      weapons: [
        'Mace',
        'Miracles',
      ],
      language: 'High Elf',
    })
  
    const darkKnight = new Villain({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 3,
        height: 3,
      },
      hp: 45,
      attack: 5,
      name: 'Chaos',
      faction: 'Villains Guild',
      weapons: [
        'Katana',
        'Dark Magic',
      ],
      language: 'Blood Elf',
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
  
    console.log(paladin.phrase());
    console.log(darkKnight.phrase());
