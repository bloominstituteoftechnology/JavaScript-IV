/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class GameObject {
    constructor(attributes) {
        this.createdAt = attributes.createdAt;
        this.dimensions = attributes.dimensions;
    }

    destroy() {
        return `${this.name} was removed from the game.`;
    }
}

class CharacterStats extends GameObject {
    constructor(attributes) {
        super(attributes);
        constructor
        this.hp = attributes.hp;
        this.name = attributes.name;
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
    * greet() // returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */

class Humanoid extends CharacterStats {
    constructor(attributes) {
        super(attributes);
        this.faction = attributes.faction;
        this.weapons = attributes.weapons;
        this.language = attributes.language;
    }

    greet() {
        return `${this.name} offers a greeting in ${this.language}.`;
    }
}
  
class Villian extends Humanoid {
    constructor(attributes) {
        super(attributes);
    }

    mindSpell() {
        return `${this.name} just cast a spell on your mind causing you to lose 5 health points.`
    }
}

  // New Villian Object Inherits from Humanoid
//   function Villian(villianAttributes) {
//       Humanoid.call(this, villianAttributes);
//   }
  
//   Villian.prototype = Object.create(Humanoid.prototype);
  
//   Villian.prototype.mindSpell = function() {
//       return `${this.name} just cast a spell on your mind causing you to lose 5 health points.`
//   }

class Hero extends Humanoid {
    constructor(attributes) {
        super(attributes);
    }

    counterSpell() {
        return `${this.name} just cast a counter spell on your mind causing you to lose 7 health points.`
    }
}
  
//   // New Hero Object Inherits from Humanoid
//   function Hero(heroAttributes) {
//     Humanoid.call(this, heroAttributes);
//   }
  
//   Hero.prototype = Object.create(Humanoid.prototype);
  
//   Hero.prototype.counterSpell = function() {
//     return `${this.name} just cast a counter spell on your mind causing you to lose 7 health points.`
//   }
   
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid -> Villian and Hero
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by uncommenting these 3 objects and the list of console logs below:
  
  
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
  
  console.log(mage);
  
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
  
    const badman = new Villian({
        createdAt: new Date(),
        dimensions: {
            length: 1,
            width: 2,
            height: 4,
        },
        hp: 15,
        name: 'Shoeface',
        faction: 'House of Evil',
        weapons: [
            'Spells',
            'Wand',
        ],
        language: 'Orcish',
    });
  
    const goodguy = new Hero({
        createdAt: new Date(),
        dimensions: {
            length: 2,
            width: 1,
            height: 2,
        },
        hp: 15,
        name: 'Aelforn',
        faction: 'People of the West',
        weapons: [
            'Spells',
            'Magic Sword',
        ],
        language: 'Elvish',
    });
  
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
  
  
    // Stretch task: 
    // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villian and one a hero and fight it out with methods!
  
    //New Villian Object inherited from Humanoid Object
    console.log(badman)
    console.log(badman.mindSpell());
    goodguy.hp -= 5;
    console.log(goodguy.hp);
    // New Hero Object inherited from Humanoid Object
    console.log(goodguy);
    console.log(goodguy.counterSpell());
    badman.hp -= 7;
    console.log(badman.hp);
    console.log(badman.mindSpell());
    goodguy.hp -= 5;
    console.log(goodguy.hp);
    console.log(goodguy.counterSpell());
    badman.hp -= 7;
    console.log(badman.hp);
    console.log(badman.mindSpell());
    goodguy.hp -= 5;
    console.log(goodguy.hp);
    console.log(goodguy.destroy());
