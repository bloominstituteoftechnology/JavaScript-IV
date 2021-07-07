/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

const spellEffect = [
    "frozen in carbonite",
    "held upside down by reversed forces of gravity",
    "stuck in a paralyzed state", 
    "converted to the opposing side",
    "kicked in the pants",
    "thrown into a pit of defanged vipers for slow torture",
    "forced to listen to Katy Perry on repeat",
    "forced to relive Thanksgiving dinner with their mother in law times infinity",
    "is now related to Dolores Umbridge"
  ]
//====================  Parent Class Here  ====================//
//   function GameObject(objAttributes){
//     this.createdAt = objAttributes.createdAt;
//     this.dimensions = objAttributes.dimensions;  
//   }

  class GameObject{
      constructor(objAttributes){
          this.createdAt = objAttributes.createdAt;
          this.dimensions = objAttributes.dimensions;
      }
        destroy(){
            return`${this.name} was removed from the game.`;
        }//this is a method on the Parent constructor function
  }//this is the Parent 
  
//   GameObject.prototype.destroy = function(){
//     return`${this.name} was removed from the game.`;
//   }
  


//====================  Child Class Here ====================//
  /*
    === CharacterStats ===
    * healthPoints
    * name
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  

class CharacterStats extends GameObject {
    constructor(charAttributes){
        super(charAttributes);
        this.healthPoints = charAttributes.healthPoints;
        this.name = charAttributes.name;
    } //this is the Child Function
    takeDamage(){
        return `${this.name} took damage`;
      }//this is a prototype method on the Child object
      
    attack(character, damageLevel){
        let newhealth = character.healthPoints - damageLevel;
        return `${this.name} attacked ${character.name} and caused ${damageLevel} units of damage! ${character.name}'s health is now at ${newhealth}`
      }//this is a prototype method on the Child object
}
  

//=====================  GrandChild Class Here  ===================//
 /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */  

/*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */

  class Humanoid extends CharacterStats{
      constructor(humanoidAttributes){
          super(humanoidAttributes);
          this.team = humanoidAttributes.team;
          this.weapons = humanoidAttributes.weapons; 
          this.language = humanoidAttributes.language; 
      }
      greet(){
        return `${this.name} offers a greeting in ${this.language}`;
      }
  } 

 
 //=====================  GrandChild Class Here  ===================//

 /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid -> Hero || Villain
    * Instances of Hero || Villain should have all of the same properties as Humanoid, CharacterStats, and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */  
 //=====================  Villain Here  ===================//
  
  class VillainChar extends Humanoid {
    constructor(evilAttributes){
        super(evilAttributes);
        this.sidekick = evilAttributes.sidekick;
        this.nemesis = evilAttributes.nemesis;
        this.strength = evilAttributes.strength;
        this.evilSpeech = evilAttributes.evilSpeech;
    } // Binds 'this' to Grandchild class Humanoid
    threat(){
        return `${this.name} threatens you with ${this.weapons}.`;
      }
    monologue(){
        return `"${this.evilSpeech}"`;
      }
    castSpell(character){
        let spell = spellEffect[Math.floor(Math.random() * spellEffect.length)];
        return `${this.name} cast a spell on ${character.name} and caused them to be ${spell}!`;
      } 
  }
  
 //=====================  Hero Here  ===================//
  
  class HeroChar extends Humanoid {
    constructor(heroAttributes){
        super(heroAttributes);
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

  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!



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
        language: 'Sarcasm',
        sidekick: 'Sir Hiss',
        nemesis: 'Solaire the Brave',
        strength: 'Intelligence and a lot of money',
        evilSpeech: `The point is, ladies and gentleman, that greed, for lack of a better word, is good. Greed is right. Greed works. Greed clarifies, cuts through, and captures the essence of the evolutionary spirit. Greed, in all of its forms, greed for life, for money, for love, knowledge, has marked the upward surge of mankind. And greed, you mark my words, will not only save Rohan, but that other malfunctioning realm called Skarsgaard!`
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


      console.log(villain.threat()); // Lord Business threatens you with his greater wit
      console.log(hero.saysCatchPhrase()); // Solaire the Brave bellows The Greater Good will always prevail!
      console.log(mage.attack(villain, 4));
      console.log(villain.castSpell(hero));