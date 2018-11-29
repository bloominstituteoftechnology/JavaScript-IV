/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
// Parent Constructor
/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/
class GameObject {
   constructor (attributes) {
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
   }
   destroy() {
    return `${this.name} was removed from the game.`;
   }
}

// Child Constructor
/*
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

class CharacterStats extends GameObject{
    constructor(charAttributes) {
    super(charAttributes) // Binds 'this' to Parent 
    this.healthPoints = charAttributes.healthPoints;
    this.name = charAttributes.name;
    }
    takeDamage() {
        return `${this.name} took damage.`;
    }

    // attack() {
    //     let newhealth = character.healthPoints - damageLevel;
    //     return `${this.name} attacked ${character.name} and caused ${damageLevel} units of damage! ${character.name}'s health is now at ${newhealth}.`
    // }
} 

// Grandchild Constructor
/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

class Humanoid extends CharacterStats{ // Grandchild Inheritance
    constructor(humanoidAttributes){
    super(humanoidAttributes)  // Binds 'this' to Child (Grandchild Parent) 
    this.team = humanoidAttributes.team;
    this.weapons = humanoidAttributes.weapons;
    this.language = humanoidAttributes.language;
    }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}

 // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects 
  // which could result in destruction if health gets to 0 or drops below 0;
// VILLAIN
  class VillainChar extends Humanoid {
      constructor(evilAttributes) {
          super(evilAttributes) // Binds 'this' to Grandchild = Humanoid
          this.sidekick = evilAttributes.sidekick;
          this.nemesis = evilAttributes.nemesis;
          this.strength = evilAttributes.strength;
      }
      threat() {
        return `${this.name} threatens you with ${this.weapons}.`;
      }
      monologue() {
        return `The point is, ladies and gentleman, that greed, for lack of a better word, is good. Greed is right. Greed works. Greed clarifies, cuts through, and captures the essence of the evolutionary spirit. Greed, in all of its forms, greed for life, for money, for love, knowledge, has marked the upward surge of mankind. And greed... you mark my words... will not only save The Realm of Norja, but that other malfunctioning territory called Skarsgaard.`;
      }

    castSpell(character) {
    let spellEffect = [
        "frozen in carbonite",
        "held upside down by reversed forces of gravity",
        "stuck in a paralyzed state", 
        "converted to the opposing side",
        "kicked in the pants",
        "thrown into a pit of defanged vipers for slow torture",
        "forced to listen to Katy Perry on repeat",
        "forced to relive Thanksgiving dinner with their mother in law times infinity",
        "be related to Umbridge",
    ]
    let spell = spellEffect[Math.floor(Math.random() * spellEffect.length)];
    return `${this.name} cast a spell on ${character.name} and caused them to be ${spell}!`
    }
  }    

  // HERO

  class HeroChar extends Humanoid{
    constructor(heroAttributes){
    super(heroAttributes)  // Binds 'this' to Great-Grandchild = Humanoid
    this.training = heroAttributes.training;
    this.ability = heroAttributes.ability;
    this.quest = heroAttributes.quest;
    this.catchPhrase = heroAttributes.catchPhrase;
    this.animalCompanion = heroAttributes.animalCompanion;
      }

    saysCatchPhrase() {
     return `${this.name} bellows "${this.catchPhrase}"`;
    }
    
  }

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test your work by un-commenting these 3 objects and the list of console logs below:

  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  const villain = new VillainChar({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 1,
      height: 3,
    },
    healthPoints: 10,
    name: 'Lord Business',
    team: 'No one but himself',
    weapons: [
      'his greater wit',
    ],
    language: 'he only speaks in money',
    sidekick: 'Sir Hiss',
    nemesis: 'Solaire the Brave',
    strength: 'Intelligence and a lot of money',
  });

  const hero = new HeroChar({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Solaire the Brave',
    team: 'Warriors of the Sun',
    weapons: [
      'Greatsword',
      "BattleAxe",
      'Greatshield',
    ],
    language: 'Common Tongue',
    training: 'Faith Magic',
    ability: 'Lightning Bolt',
    quest: 'Defeat Evil',
    animalCompanion: 'European Swallow',
    catchPhrase: 'The Greater Good will always prevail!',
  }); 

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  console.log(villain.team); // No one but himself
  console.log(villain.threat()); // Evil McEvilFace threatens you with his greater wit.
  console.log(villain.monologue());
//   console.log(swordsman.attack(villain, 3));
  console.log(hero.saysCatchPhrase());
  console.log(villain.castSpell(archer));

  // Stretch task:
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!