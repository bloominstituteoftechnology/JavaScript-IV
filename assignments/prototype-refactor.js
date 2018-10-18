/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
    constructor(stats){
        this.createdAt = stats.createdAt;
        this.dimensions = stats.dimensions;
    };
    destroy() {
        return `${this.name} was removed from the game.`;
    };
};

  class CharacterStats extends GameObject {
      constructor(stats){
          super(stats);
          this.hp = stats.hp;
          this.name = stats.name;
      };
      takeDamage() {
          return `${this.name} took damage.`;
      };
  };

  class Humanoid extends CharacterStats {
      constructor(stats){
          super(stats);
          this.faction = stats.faction;
          this.weapons = stats.weapons;
          this.language = stats.language;
      };
      greet() {
          return `${this.name} offers a greeting in ${this.language}.`;
      };
  };

  class Villian extends Humanoid {
      constructor(stats){
          super(stats);
      }
      fireball() {
          hero.hp -= 1;
          return `${this.name} casts a fireball at the hero!`;
      };
      death() {
          if (villian.hp <= 0) {
              console.log(`${this.name} has died...`);
          };
      };
  };

  class Hero extends Humanoid {
      constructor(stats){
          super(stats);
      }
      summon() {
          villian.hp -= 100;
          return `${this.name} has summoned Bahumat!`;
      };
  };

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

  const villian = new Villian({
    createdAt: new Date(),
    dimensions: {
      lendth: 2,
      width: 1,
      height: 1,
    },
    hp: 100,
    name: 'Veigar',
    faction: 'Yordle',
    weapon: [
      'magic',
      'staff',
    ],
    language: 'Common Toungue',
  });

  const hero = new Hero({
    createdAt: new Date(),
    dimensions: {
      lendth: 2,
      width: 1,
      height: 1,
    },
    hp: 100,
    name: 'Yuna',
    faction: 'Yevon',
    weapon: [
      'Holy',
      'Staff',
      'Summons',
    ],
    languages: 'Common Toungue',
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
  console.log(villian.fireball(), hero.hp);
  villian.death();
  console.log(hero.summon());
  villian.death();