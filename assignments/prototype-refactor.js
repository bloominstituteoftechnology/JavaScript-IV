/*

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
    class GameObject{
        constructor(attr){
            this.createdAt = attr.createdAt;
            this.dimensions = attr.dimensions;
        }

        destroy(){
            return `${this.name} was removed from the game`;
        }
    }
    class CharacterStats extends GameObject{
        constructor(characterAttr){
            super(characterAttr);
            this.hp = characterAttr.hp;
            this.name = characterAttr.name;
        }
        takeDamage(){
            return `${this.name} took damage. ${this.hp} health left`
        }
    }

    class Humanoid extends CharacterStats{
        constructor(humanoidAttr){
            super(humanoidAttr);
            this.faction = humanoidAttr.faction;
            this.weapons = humanoidAttr.weapons;
            this.language = humanoidAttr.language;
        }
        greet(){
            return `${this.name} offers a greeting in ${this.language}.`
        }
    }

    class Hero extends Humanoid{
        constructor(heroAttr){
            super(heroAttr);
        }
        blindFury(object){
            if(object.hp <= 0){
                return object.destroy();
            }
            object.hp--;
            return object.takeDamage();
            console.log("hp removal");
        }
    }

    class Villian extends Humanoid{
        constructor(villianAttr){
            super(villianAttr);
        }
        ninjitsu(object){
            if(object.hp <= 0){
                return object.destroy();
            }
            object.hp--;
            return object.takeDamage();
            console.log("hp removal")
        }
    }

  const scorpion = new Villian({
    hp:20,
    name: 'Scorpion',
    weapons: ['kunai'],
    language: 'common tongue'
  })

  const kenshi = new Hero({
    hp:20,
    name:'Kenshi',
    faction: 'mk10',
    weapons: ['katana'],
    language: 'common tongue'
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

  console.log(scorpion.ninjitsu(kenshi));
  console.log(scorpion.ninjitsu(kenshi));
  console.log(kenshi.blindFury(mage));
  console.log(kenshi.blindFury(mage));
  console.log(kenshi.blindFury(mage));
  console.log(kenshi.blindFury(mage));
  console.log(kenshi.blindFury(mage));
  console.log(kenshi.blindFury(mage));
  console.log(kenshi.blindFury(mage));
  console.log(mage.hp); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.hp); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.faction); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.