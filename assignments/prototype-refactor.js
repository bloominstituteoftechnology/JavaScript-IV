/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday.

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/




class GameObject {
    constructor(GOattributes){
      this.createdAt = GOattributes.createdAt;
      this.dimensions = GOattributes.dimensions;
    }
    destroy(){
      return (`${this.name} was removed from the game.`)
    }
    attack(Humanoid){
      Humanoid.hp -= 4;
        if (Humanoid.hp > 0) {
          return `${this.name} attacked ${Humanoid.name}. ${Humanoid.name} has ${Humanoid.hp} HP left.`;
        } else if (Humanoid.hp <= 0){
            return Humanoid.destroy();
        }
    }
  }
  
      
      class CharacterStats extends GameObject{
        constructor(CSattributes){
          super(CSattributes);
          this.hp = CSattributes.hp;
          this.name = CSattributes.name;
        }
        takeDamage(){
          return (`${this.name} took damage.`);
        }
      }
  
  
      CharacterStats.prototype = Object.create(GameObject.prototype);
  
  
      class Humanoid extends CharacterStats{
        constructor(Hattributes){
          super(Hattributes);
          this.faction = Hattributes.faction;
          this.weapons = Hattributes.weapons;
          this.language = Hattributes.language;
        }
        greet(){
          return (`${this.name} offers a greeting in ${this.language}.`)
        }
      }
  
      Humanoid.prototype = Object.create(CharacterStats.prototype);
      
  
      // STRETCH
    class Villian extends Humanoid{
      constructor(Vattributes){
        super(Vattributes);
        this.mission = Vattributes.mission;
      }
    }
  
    class Hero extends Humanoid{
      constructor(HeroAttributes){
        super(HeroAttributes);
        this.mission = HeroAttributes.mission;
      }
    }
  
      Villian.prototype = Object.create(Humanoid.prototype);
      Hero.prototype = Object.create(Humanoid.prototype);
  
  
    // Test you work by uncommenting these 3 objects and the list of console logs below:
    
      const badGuy = new Villian({
        mission: 'seek destruction',
        createdAt: new Date(),
        dimensions: {
          length: 2,
          width: 1,
          height: 1,
        },
        hp: 5,
        name: 'Dragon',
        faction: 'Whatever',
        weapons: [
          'Gandolf Staff',
        ],
        language: 'Elvish',
        
      });
    
        const goodGuy = new Hero({
        mission: 'keep peace',
        createdAt: new Date(),
        dimensions: {
          length: 2,
          width: 1,
          height: 1,
        },
        hp: 5,
        name: 'Knight',
        faction: 'Kingdom',
        weapons: [
          'Excalibur',
        ],
        language: 'British',
      });
    
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
      console.log(badGuy.mission);
      console.log(goodGuy.mission);
      console.log(goodGuy.language, goodGuy.faction);
    
      console.log(badGuy.attack(goodGuy));
      console.log(goodGuy.attack(badGuy));
      console.log(goodGuy.attack(badGuy));