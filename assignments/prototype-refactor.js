/* 
Prototype Refactor
1. Copy and paste your code or the solution from yesterday
2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.
*/



// Constructor Functions, Classes, Methods


// OLD syntax for GameObject

// GameObject(attributes){
//     this.createdAt = attributes.createdAt;
//     this.dimensions = attributes.dimensions;
// }

// GameObject.prototype.destroy = function (){
//     return `${this.name} was removed from game.`;
//   }


// NEW ES6 Syntax for GameObject

class GameObject {
    constructor(attributes) {
        this.createdAt = attributes.createdAt;
        this.dimensions = attributes.dimensions;
    }
    destroy() {
        return `${this.name} was removed from game.`;
    }
}


// OLD syntax for CharacterStats

// function CharacterStats(stats){
//     GameObject.call(this, stats);
//     this.hp = stats.hp;
//     this.name = stats.name;
//   }
  
//   CharacterStats.prototype = Object.create(GameObject.prototype);
  
//   CharacterStats.prototype.takeDamage = function(){
//     return `${this.name} took damage.`;
//   }


// NEW ES6 Syntax for CharacterStats
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


// OLD syntax for Humanoid

// function Humanoid(humanoidAttributes){
//     CharacterStats.call(this, humanoidAttributes);
//     this.faction = humanoidAttributes.faction;
//     this.weapons = humanoidAttributes.weapons;
//     this.language = humanoidAttributes.language;
// }
  
//   Humanoid.prototype = Object.create(CharacterStats.prototype);
  
//   Humanoid.prototype.greet = function(){
//     return `${this.name} offers a greeting in ${this.language}.`;
//   }


// NEW ES6 syntax for Humanoid

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

// OLD syntax for Hero
// function Hero(heroAttributes){
//     Humanoid.call(this, heroAttributes);
//   }
  
//   Hero.prototype = Object.create(Humanoid.prototype);
  
//   Hero.prototype.heroAttack = function(victim){
//     victim.hp = victim.hp - 2;
    
//     if(victim.hp > 0) {
//       return `${this.name} heroically beat up ${victim.name}. ${victim.takeDamage()} -2 hp.
//     ${victim.name}: ${victim.hp} remaining`;
//     } else return victim.destroy();
//   }


  // NEW ES6 syntax for Hero

class Hero extends Humanoid {
    constructor(heroAttributes) {
        super(heroAttributes);
    }
    heroAttack(victim) {
        victim.hp = victim.hp - 2;
        if(victim.hp > 0) {
            return `${this.name} heroically beat up ${victim.name}. ${victim.takeDamage()} -2 hp.
            ${victim.name}: ${victim.hp} remaining`;
        } else return victim.destroy();
    }
}
  

// OLD syntax for Villain

//   function Villain(villainAttributes){
//     Humanoid.call(this, villainAttributes);
//   }
  
//   Villain.prototype = Object.create(Humanoid.prototype);
  
//   Villain.prototype.villainAttack = function(victim){
//     victim.hp = victim.hp - 14;
    
//     if(victim.hp > 0) {
//       return `${this.name} snuck up behind ${victim.name} and stabbed him in the back! ${victim.takeDamage()} -14 hp
//     ${victim.name}: ${victim.hp} remaining`;
//     } else return victim.destroy();
//   }
  

  // NEW syntax for Villain

  class Villain extends Humanoid {
      constructor(villainAttributes) {
          super(villainAttributes);
      }
      villainAttack (victim) {
        victim.hp = victim.hp - 14;
    
        if(victim.hp > 0) {
          return `${this.name} snuck up behind ${victim.name} and stabbed him in the back! ${victim.takeDamage()} -14 hp
        ${victim.name}: ${victim.hp} remaining`;
        } else return victim.destroy();
      }
  }



  // Objects created via Constructor Functions

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
    
    const hyruleWarrior = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      hp: 15,
      name: 'Link',
      faction: 'Hyrule Field',
      weapons: [
        'Kokiri Sword',
        'Bomb Bag',
      ],
      language: '........',
    });
  
    const ganondorf = new Villain({
      createdAt: new Date(),
      dimensions: {
        length: 10,
        width: 10,
        height: 20,
      },
      hp: 20,
      name: 'Ganon',
      faction: 'Golden Land',
      weapons: [
        'Sword',
        'Dagger',
      ],
      language: '........',
    });
  



    // Console.log Tests

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
    
    console.log(ganondorf.greet());
    console.log(hyruleWarrior.greet());
    console.log(ganondorf.villainAttack(hyruleWarrior));
    console.log(hyruleWarrior.heroAttack(ganondorf));
    console.log(hyruleWarrior.heroAttack(ganondorf));
    console.log(hyruleWarrior.heroAttack(ganondorf));
    console.log(hyruleWarrior.heroAttack(ganondorf));
    console.log(hyruleWarrior.heroAttack(ganondorf));
    console.log(hyruleWarrior.heroAttack(ganondorf));
    console.log(hyruleWarrior.heroAttack(ganondorf));
    console.log(hyruleWarrior.heroAttack(ganondorf));
    console.log(hyruleWarrior.heroAttack(ganondorf));
    console.log(hyruleWarrior.heroAttack(ganondorf));