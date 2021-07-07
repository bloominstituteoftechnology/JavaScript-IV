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
class GameObject{
  constructor(attribute){
    this.createdAt = attribute.createdAt;
    this.dimensions = attribute.dimensions;
  }
  destroy(){
    return `${this.name} was removed from the game`;
  }
}

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
class CharacterStats extends GameObject{
  constructor(characterAttributes){
    super(characterAttributes);
    this.hp = characterAttributes.hp;
    this.name = characterAttributes.name;
  }
  takeDamage(){
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
class Humanoid extends CharacterStats{
  constructor(humanoidAttributes){
    super(humanoidAttributes);
    this.faction = humanoidAttributes.faction;
    this.weapons = humanoidAttributes.weapons;
    this.language = humanoidAttributes.language;
    this.damage = humanoidAttributes.damage;
  }
  greet(){
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}
//Stretch Villians
class Villian extends Humanoid{
  constructor (vAts){
    super(vAts );
    this.villian_move = vAts.villian_move;
  }
  vBattle(){
    for(human.hp; human.hp>0;human.hp-=demon.damage){
      console.log(`${human.name} has been attacked by ${demon.name} of the ${demon.faction} and is currently at ${human.hp} hp`);
      if(`${human.hp}` <= 10){
        return `${human.name} has been slain`;
      }
    }
  }
}

class Hero extends Humanoid{
  constructor(hAts){
    super(hAts);
    this.hero_move = hAts.hero_move;
  }
  hBattle(){
    for(demon.hp; demon.hp>0;demon.hp-=human.damage){
      console.log(`${demon.name} has been attacked and is currently at ${demon.hp} hp`);
      if(`${demon.hp}` <= 20){
        return `${demon.name} has been vanquished`;
      }
    }
  }
}

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
    hp: 50,
    name: 'Bruce',
    faction: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    damage: 45,
    language: 'Common Toungue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    hp: 150,
    name: 'Sir Mustachio',
    faction: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    damage: 40,
    language: 'Common Toungue',
  });
  //
  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 100,
    name: 'Lilith',
    faction: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    damage: 25,
    language: 'Elvish',
  });

  const demon = new Villian({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 100,
    name: 'Balthazar',
    faction: 'Demon Clan',
    weapons: [
      'Pitchfork',
      'sword',
    ],
    villian_move:`demon-edged swork`,
    damage: 15,
    language: 'demonic',
  });

  const human = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 3,
      height: 6,
    },
    hp: 160,
    name: 'King David',
    faction: 'Situ Clan',
    weapons: [
      'left-fist',
      'right-fist',
    ],
    hero_move: `Star of David`,
    damage: 15,
    language: 'english',
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
  console.log(archer.damage);
  console.log(demon.villian_move);
  console.log(demon.vBattle());
  console.log(human.hero_move);
  console.log(human.hBattle());
