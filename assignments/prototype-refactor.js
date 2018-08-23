// Here we have a functioning solution to your challenge from yesterday.
// Today your goal is to refactor all of this code to use ES6 Classes.
// The console.log() statements should still return what is expected of them.


class GameObject {
  constructor(obj){
    this.createdAt = obj.createdAt;
    this.dimensions = obj.dimensions;
  }
  destroy() {
  return `${this.name} was removed from the game.`
  }
}
class CharacterStats extends GameObject {
  constructor(stats) {
    super(stats);
    this.hp = stats.hp;
    this.name = stats.name;
  }
  takeDamage() {
  return `${this.name } took damage.`
  };
}
class Humanoid extends CharacterStats {
  constructor(oid){
    super(oid);
    this.faction = oid.faction;
    this.weapons = oid.weapons;
    this.language = oid.language;
  }
  greet() {
  return `${this.name} offers a greeting in ${this.language}.`
  };
}

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  hp: 5,
  name: 'Bruce',
  faction: 'Mage Guild',
  weapons: ['Staff of Shamalama'],
  language: 'Common Toungue'
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  hp: 15,
  name: 'Sir Mustachio',
  faction: 'The Round Table',
  weapons: ['Giant Sword', 'Shield'],
  language: 'Common Toungue'
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  hp: 10,
  name: 'Lilith',
  faction: 'Forest Kingdom',
  weapons: ['Bow', 'Dagger'],
  language: 'Elvish'
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
