// Here we have a functioning solutoin to your challenge from yesterday.
// Today your goal is to refactor all of this code to use ES6 Classes.
// The console.log() statements should still return what is expected of them.

class GameObject {
  constructor(options){
    this.createdAt = options.createdAt;
    this.dimensions = options.dimensions;
  }
  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

/*GameObject.prototype.destroy = function() {
  return `Object was removed from the game.`;
};*/

class CharacterStats extends GameObject {
  constructor(characterStatsOptions){
    super(characterStatsOptions);
    // GameObject.call(this, characterStatsOptions);
    this.hp = characterStatsOptions.hp;
    this.name = characterStatsOptions.name;
  }
  takeDamage() {
    return `${this.name} took damage.`;
  }
}

/*
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
};*/

class Humanoid extends CharacterStats {
  constructor(humanoidOptions){
    super(humanoidOptions);
    // CharacterStats.call(this, humanoidOptions);
    this.faction = humanoidOptions.faction;
    this.weapons = humanoidOptions.weapons;
    this.language = humanoidOptions.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}

/*
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
};*/


/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/


class Hero extends Humanoid{
  constructor(object){
    super(object)
  }
  royal_attack(damage, enemy) {
    enemy.hp -= damage
    console.log(enemy.takeDamage() + ": " + damage + ' hitpoints');
    return enemy.hp <= 0 ? enemy.destroy() : enemy.name + " still lives"
  }
}

/*
Hero.prototype = Object.create(Humanoid.prototype)
Hero.prototype.royal_attack = function(damage, enemy) {
  enemy.hp -= damage
  console.log(enemy.takeDamage() + ": " + damage + ' hitpoints');
  return enemy.hp <= 0 ? enemy.destroy() : enemy.name + " still lives"
}*/

class Villain extends Humanoid{
  constructor(object){
    super(object)
  }
  hell_attack(damage, enemy){
    enemy.hp -= damage
    console.log(enemy.takeDamage() + ": " + damage + ' hitpoints');
    return enemy.hp <= 0 ? enemy.destroy() : enemy.name + " still lives"
  }
}

/*
Villain.prototype = Object.create(Humanoid.prototype)
Villain.prototype.hell_attack = function(damage, enemy) {
  enemy.hp -= damage
  console.log(enemy.takeDamage() + ": " + damage + ' hitpoints');
  return enemy.hp <= 0 ? enemy.destroy() : enemy.name + " still lives"
}*/

// Test you work by uncommenting these 3 objects and the list of console logs below:


  const mage = new Villain(
    {
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
  }
);

  const swordsman = new Hero({
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

  const archer = new Hero({
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

  const undead = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 4,
      height: 3,
    },
    hp: 25,
    name: 'Josh Knell',
    faction: 'Chief Harper Fans',
    weapons: [
      'this.keyword',
      'constructor',
      'prototype',
      'inheritance'
    ],
    language: 'JavaScript',
  });

  const elf = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 5,
    },
    hp: 10,
    name: 'Patrick Kennedy',
    faction: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger'
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


console.log(swordsman.royal_attack(6, mage));

function fight(fighter_hero, fighter_villain){

  let winner = fighter_villain
  let loser = fighter_hero

  console.log(`The Fight commences between ${fighter_hero.faction} led by ${fighter_hero.name} and ${fighter_villain.faction} led by ${fighter_villain.name}. May the gods be with you`);

  while (fighter_hero.hp > 0 && fighter_villain.hp > 0){

    console.log(fighter_hero.royal_attack(Math.floor(Math.random()*6)+3, fighter_villain))
    console.log(fighter_villain.hp > 0 ? `${fighter_villain.name} has ${fighter_villain.hp} hitpoints left` : "")

    if (fighter_villain.hp>0){
    console.log(fighter_villain.hell_attack(Math.floor(Math.random()*6), fighter_hero))
    console.log(fighter_hero.hp > 0 ? `${fighter_hero.name} has ${fighter_hero.hp} hitpoints left`: "");
  }
    else {
      winner = fighter_hero
      loser = fighter_villain
    }
  }
  return `${winner.faction}  has won the battle thanks to the brave effots of ${winner.name}. ${loser.name} and his ${loser.weapons[0]} have failed to protect ${loser.faction} '`
}

console.log(fight(elf, undead));

/*
Stretch task:
 * Create Villian and Hero constructor functions that inherit from the Humanoid
   constructor function.
* Give the Hero and Villians different methods that could be used to remove
health points from objects which could result in destruction if health gets to
0 or drops below 0;
* Create two new objects, one a villian and one a hero and fight it out
   with methods!
*/
