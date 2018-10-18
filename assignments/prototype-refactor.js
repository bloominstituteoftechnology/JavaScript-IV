/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*****************************************************************
 *************************** Class(es) ***************************
 *****************************************************************/
//================================================================
//========================== GameObject ==========================
class GameObject{
  // *********************** Constructor *************************
  constructor(obj){
    this.createdAt = obj.createdAt;
    this.dimensions = obj.dimensions;
  }
  // ************************ Method(s) **************************
  destroy(){
    return `${this.name} was removed from the game.`;
  }
}

//================================================================
//======================== CharacterStats ========================
class CharacterStats extends GameObject{
  // *********************** Constructor *************************
  constructor(obj){
  super(obj);
  this.hp = obj.hp;
  this.name = obj.name;
  }
  // ************************ Method(s) **************************
  takeDamage (){
    return `${this.name} took damage`;
  }
}

//================================================================
//=========================== Humanoid ===========================
class Humanoid extends CharacterStats{
  // *********************** Constructor *************************
  constructor(obj){
  super(obj);
  this.faction = obj.faction;
  this.weapons = obj.weapons;
  this.language = obj.language;
  }
  // ************************ Method(s) **************************
  greet(){
    return `${this.name} offers a greeting in ${this.language}`;
  }
}

//================================================================
//============================= Hero =============================
class Hero extends Humanoid{
  // *********************** Constructor *************************
  constructor(obj){
    super(obj);
    this.attack = obj.attack;
    this.throw = obj.throw;
  }
}

//================================================================
//=========================== Villain ============================
class Villain extends Humanoid{
  // *********************** Constructor *************************
  constructor(obj){
    super(obj);
    this.cast = obj.cast;
  }
}

/*****************************************************************
 **************************** Objects ****************************
 *****************************************************************/
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

  const hero = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    hp: 9999,
    name: 'Champion',
    faction: 'Knight',
    weapons: [
      '2H Sword',
      'Dart'
    ],
    language: 'Human',
    attack: function(monster, dmg){
      monster.hp -= dmg;
      if (monster.hp <= 0){
        return monster.destroy();
      }
      return `${this.name} attacks ${monster.name} with a ${this.weapons[0]} and does ${dmg} dmg.`;
    },
    throw: function(monster, dmg){
      monster.hp -= dmg;
      if (monster.hp <= 0){
        return monster.destroy();
      }
      return `${this.name} throws a ${this.weapons[1]} at ${monster.name} and does ${dmg} dmg.`;
    }
  });

  const villain = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 3,
      width: 3,
      height: 3,
    },
    hp: 200000,
    name: 'Dark Lord',
    faction: 'Boss',
    weapons: [
      'Wand'
    ],
    language: 'All',
    cast: function(character, spellName, dmg){
      character.hp -= dmg;
      if (character.hp <= 0){
        return character.destroy();
      }
      return `${this.name} casts ${spellName} with the ${this.weapons[0]} on ${character.name} and does ${dmg} dmg.`;
    }
  });

/*****************************************************************
 ****************************** Main *****************************
 *****************************************************************/
console.log('************************* prototype-refactor.js *************************');
console.log(mage.createdAt); // Today's date
console.log(JSON.stringify(archer.dimensions)); // { length: 1, width: 2, height: 4 }
console.log(swordsman.hp); // 15
console.log(mage.name); // Bruce
console.log(swordsman.faction); // The Round Table
console.log(mage.weapons.toString()); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a Villain and one a hero and fight it out with methods!
console.log(hero.attack(villain, 5000));
console.log(hero.throw(villain, 9999));
console.log(villain.cast(hero, 'Flare', 100));
console.log(hero.attack(villain, 5000));
console.log(hero.throw(villain, 9999));
console.log(villain.cast(hero, 'Ultima', 150));
console.log(hero.attack(villain, 5000));
console.log(hero.throw(villain, 9999));
console.log(villain.cast(hero, 'Super Nova', 200));
console.log(hero.attack(villain, 5000));
console.log(hero.throw(villain, 9999));
console.log(villain.cast(hero, 'Flare', 100));
console.log(hero.attack(villain, 5000));
console.log(hero.throw(villain, 9999));
console.log(villain.cast(hero, 'Ultima', 150));
console.log(hero.attack(villain, 5000));
console.log(hero.throw(villain, 9999));
console.log(villain.cast(hero, 'Super Nova', 200));
console.log(hero.attack(villain, 5000));
console.log(hero.throw(villain, 9999));
console.log(villain.cast(hero, 'Flare', 100));
console.log(hero.attack(villain, 5000));
console.log(hero.throw(villain, 9999));
console.log(villain.cast(hero, 'Ultima', 150));
console.log(hero.attack(villain, 5000));
console.log(hero.throw(villain, 9999));
console.log(villain.cast(hero, 'Super Nova', 200));
console.log(hero.attack(villain, 5000));
console.log(hero.throw(villain, 9999));
console.log(villain.cast(hero, 'Flare', 100));
console.log(hero.attack(villain, 5000));
console.log(hero.throw(villain, 9999));
console.log(villain.cast(hero, 'Ultima', 150));
console.log(hero.attack(villain, 5000));
console.log(hero.throw(villain, 9999));
console.log(villain.cast(hero, 'Super Nova', 200));
console.log(hero.attack(villain, 5000));
console.log(hero.throw(villain, 9999));
console.log(villain.cast(hero, 'Flare', 100));
console.log(hero.attack(villain, 5000));
console.log(hero.throw(villain, 9999));
console.log(`${hero.name} HP Left: ${hero.hp}`);