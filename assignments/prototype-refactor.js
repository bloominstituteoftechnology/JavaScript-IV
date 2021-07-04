/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday
/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/
class GameObject {
    constructor(attributes){
        this.createdAt = attributes.createdAt;
        this.dimensions = attributes.dimensions;       
    }
    destroy() {
        console.log(this.name + ' was removed from the game.');
    }
}

  //----------------------------------------------------------------------------------------
  /*
    === CharacterStats ===
    * hp
    * name
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
 class CharacterStats extends GameObject {
     constructor(attributes) {
         super(attributes);
         this.hp = attributes.hp;
         this.name = attributes.name;
     }
     takeDamage (damageTaken) {
        this.hp -= damageTaken;
        if(this.hp <= 0){
          console.log(`${this.name} takes ${damageTaken} points of damage and has been slain.`)
          this.destroy();
        }
        else{
          console.log(`${this.name} takes ${damageTaken} points of damage and has ${this.hp} hp remaining.`);
        }
     }
 }
//   function CharacterStats(attributes){
//     GameObject.call(this, attributes);//so child knows what 'this' is
//     this.hp = attributes.hp;
//     this.name = attributes.name;
//   }
//   CharacterStats.prototype = Object.create(GameObject.prototype);//inherit parents prototypes
//   CharacterStats.prototype.takeDamage = function(damageTaken){
//     this.hp -= damageTaken;
//     if(this.hp <= 0){
//       console.log(`${this.name} takes ${damageTaken} points of damage and has been slain.`)
//       this.destroy();
//     }
//     else{
//       console.log(`${this.name} takes ${damageTaken} points of damage and has ${this.hp} hp remaining.`);
//     }
//   };
  // const someStats = new CharacterStats({
  //   createdAt: new Date(),
  //   dimensions: {
  //     length: 2,
  //     width: 1,
  //     height: 1,
  //   },
  //   hp: 5,
  //   name: 'Bruce'
  // })
  // console.log(someStats);
  //----------------------------------------------------------------------------------------
  /*
    === Humanoid ===
    * faction
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
 class Humanoid extends CharacterStats {
     constructor(attributes){
        super(attributes);
        this.faction = attributes.faction;
        this.weapons = attributes.weapons;
        this.language = attributes.language;
        this.archtype = attributes.archtype;
        this.damage = attributes.damage;
        this.armor = attributes.armor;
     }
     greet () {
        console.log(`${this.name} offers a greeting in ${this.language}`);
     }
 }
  //----------------------------------------------------------------------------------------
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
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
      hp: 10,
      name: 'Bruce',
      faction: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Toungue',
      archtype: 'Mage',
      damage: 4,
      armor: 1,
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      hp: 20,
      name: 'Sir Mustachio',
      faction: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Toungue',
      archtype: 'Swordsman',
      damage: 3,
      armor: 3
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      hp: 15,
      name: 'Lilith',
      faction: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
      archtype: 'Archer',
      damage: 2,
      armor: 2,
    });
  
    // console.log(mage.createdAt); // Today's date
    // console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    // console.log(swordsman.hp); // 15
    // console.log(mage.name); // Bruce
    // console.log(swordsman.faction); // The Round Table
    // console.log(mage.weapons); // Staff of Shamalama
    // console.log(archer.language); // Elvish
    // archer.greet();
    // mage.takeDamage();
    // swordsman.destroy();
    //console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    //console.log(mage.takeDamage()); // Bruce took damage.
    //console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
    // Stretch task: 
    // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villian and one a hero and fight it out with methods!
    class Hero extends Humanoid {
        constructor(attributes){
            super(attributes);
            this.specialAbility = attributes.specialAbility;
            this.critChance = attributes.critChance;
        }
        attack(target) {
            console.log(`${this.name} attacks ${target.name} the ${target.archtype} with ${this.weapons[0]}.`);
  
            let damageTaken = 0;
        
            if(Math.random() < this.critChance){
                damageTaken = this.damage*1.5 - target.armor;
                console.log(`Critical Strike!`);
            }
            else{
                damageTaken = this.damage - target.armor;
            }
        
            target.takeDamage(damageTaken);
        }
    }
  
    const sheRa = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 1,
        height: 4,
      },
      hp: 30,
      name: 'She-Ra',
      faction: 'Masters of the Universe',
      weapons: [
        'Sword of Protection',
        'Shield',
        'Boomarang'
      ],
      language: 'Eternian',
      specialAbility: 'Transmute Sword',
      archtype: 'Princess of Power',
      damage: 8,
      critChance: 0.5,
      armor: 2,
    });
    
    const evilLyn = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 1,
        height: 4,
      },
      hp: 30,
      name: 'Evil-Lyn',
      faction: 'Agents of Doom',
      weapons: [
        'Crystal Orb Greatstaff',
        'Dark Magic'
      ],
      language: 'Eternian',
      specialAbility: 'Stormcall',
      archtype: 'Dark Wizard',
      damage: 7,
      critChance: 0.3,
      armor: 1, 
    });
  
    console.log(`WELCOME!`);
    console.log(`Characters can be referenced by the following names: sheRa, evilLyn,
     mage, and swordsman.`);
    console.log(`She-Ra and Evil-Lyn have access to the 'attack' method!
     ex) sheRa.attack(mage).  Try it out!`);


/*2. Your goal is to refactor all of this code to use ES6 Classes.
 The console.log() statements should still return what is expected of them.

*/
