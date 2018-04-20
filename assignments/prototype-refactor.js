// Here we have a functioning solutoin to your challenge from yesterday.
// Today your goal is to refactor all of this code to use ES6 Classes.
// The console.log() statements should still return what is expected of them.


/*//ES5 Constructor Syntax
function GameObject(options) {
  this.createdAt = options.createdAt;
  this.dimensions = options.dimensions;
}
*/


// ES6 Class Syntax
class GameObject {
  constructor(options) {
    this.createdAt = options.createdAt;
    this.dimensions = options.dimensions;
  }
  destroy() {
    return `Object was removed from the game.`
  }
}


/* //ES5 Constructor Syntax
GameObject.prototype.destroy = function() {
  return `Object was removed from the game.`;
};

*/

// ES6 Class Syntax
class CharacterStats extends GameObject {
  constructor(characterStatsOptions) {
    super(characterStatsOptions);
    this.hp = characterStatsOptions.hp;
    this.name = characterStatsOptions.name;
  }
  takeDamage() {
    return `${this.name} took damage.`;
  }

}

/* //ES5 Constructor Syntax. 'Call' replaced by 'super'.
function CharacterStats(characterStatsOptions) {
  GameObject.call(this, characterStatsOptions); 
  this.hp = characterStatsOptions.hp;
  this.name = characterStatsOptions.name;
}
*/

/* //ES5 Constructor Syntax. Replaced by 'extends'.
CharacterStats.prototype = Object.create(GameObject.prototype);
*/

/* //ES5 Constructor Syntax. With classes this goes inside the class body following class syntax.
CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
};
*/


//ES6 Class Syntax. 'Call' replaced by 'super'.
class Humanoid extends CharacterStats {
  constructor(humanoidOptions) {
    super(humanoidOptions);
    this.faction = humanoidOptions.faction;
    this.weapons = humanoidOptions.weapons;
    this.language = humanoidOptions.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`
  }
}

/* //ES5 Constructor Syntax. 
function Humanoid(humanoidOptions) {
  CharacterStats.call(this, humanoidOptions);
  this.faction = humanoidOptions.faction;
  this.weapons = humanoidOptions.weapons;
  this.language = humanoidOptions.language;
}
*/

/* //ES5 Constructor Syntax. 'Create' is replaced by 'extends'.
Humanoid.prototype = Object.create(CharacterStats.prototype);
*/

/* //ES5 Constructor Syntax. With classes this goes inside the class body and rewritten in class syntax.
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
};
*/ 

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
