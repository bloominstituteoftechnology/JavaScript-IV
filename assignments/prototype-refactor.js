// Here we have a functioning solutoin to your challenge from yesterday.
// Today your goal is to refactor all of this code to use ES6 Classes.
// The console.log() statements should still return what is expected of them.
// start

class GameObject {
  constructor(gameAttribute) {
    // this = {}
    this.createdAt = gameAttribute.createdAt;
    this.dimensions = gameAttribute.dimensions;
    // return this
  }
  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

// const newGameObject = new GameObject(Date.now(), {length: '12', height: '12', width: '34'})

class CharacterStats extends GameObject {
  // extends -> CharacterStats.prototype = Object.create(GameObject.prototype);
  constructor(charAttribute) {
    // super calls the GameObject constructor passing in the context automatically
    // super -> GameObject.call(this, characterStatsOptions)
    super(charAttribute)  // ? or characterStatsOptions
    this.hp = charAttribute.hp;
    this.name = charAttribute.name;
  }

  takeDamage() {
    return `${this.name} took damage.`;
  }
}



// function GameObject(options) {
//   this.createdAt = options.createdAt;
//   this.dimensions = options.dimensions;
// }

// GameObject.prototype.destroy = function() {
//   return `Object was removed from the game.`;
// };

// function CharacterStats(characterStatsOptions) {
//   GameObject.call(this, characterStatsOptions);
//   this.hp = characterStatsOptions.hp;
//   this.name = characterStatsOptions.name;
// }

// CharacterStats.prototype = Object.create(GameObject.prototype);

// CharacterStats.prototype.takeDamage = function() {
//   return `${this.name} took damage.`;
// };

class Humanoid extends CharacterStats {
  // extends -> Humanoid.prototype = Object.create(CharacterStats.prototype);
  constructor(humanAttribute) {
    // calls the parent constructor - CharacterStats - passing in the context automatically
    // super -> CharacterStats.call(this, humanoidOptions)
    super(humanAttribute)
    this.faction = humanAttribute.faction;
    this.weapons = humanAttribute.weapons;
    this.language = humanAttribute.language;
  }

  greet(){
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}

// function Humanoid(humanoidOptions) {
//   CharacterStats.call(this, humanoidOptions);
//   this.faction = humanoidOptions.faction;
//   this.weapons = humanoidOptions.weapons;
//   this.language = humanoidOptions.language;
// }

// Humanoid.prototype = Object.create(CharacterStats.prototype);

// Humanoid.prototype.greet = function() {
//   return `${this.name} offers a greeting in ${this.language}.`;
// };



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

const archer = new Humanoid({createdAt: new Date(), dimensions: {length: 1,width: 2,height: 4},hp: 10,name: 'Lilith',faction: 'Forest Kingdom',weapons: ['Bow', 'Dagger'],language: 'Elvish'},'hello'); 

const human = new Humanoid({createdAt: new Date(), dimensions: {length:3, width:4, height:5}, name:'Jordan', faction:'NBA', weapons:['Hands', 'Feet'], language:'English'});
// const human = new Humanoid();
// human.createdAt = Date.now();
// human.dimensions = {length:3, width:4, height:5};

console.log(human);
console.log(human.createdAt); 
console.log(human.dimensions);
console.log(human.hp);
console.log(human.name);
console.log(human.faction);
console.log(human.weapons);
console.log(human.language);
console.log(human.destroy());
console.log(human.greet());


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




  // Writing Yesterday's Stretch task in CLASSES
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!

// class Villain {
//   constructor(hp){
//     // super calls the Humanoid constructor passing in the context automatically
//     // super -> Humanoid.call(this, villainAttributes)
//     super(hp);
//     this.hp = hp;
//     // return this
//   }

//   attack(obj, hp) {
//     // check your health points
//     console.log(obj.name);   //testing
//     console.log(obj.hp);     //testing
//     let count = obj.hp;
//     // decrement one health points
//     const decrement = (count) => {
//       console.log(count - 1);
//       console.log(`${this.name} took damage.`)
//       return count;
//     }
//     // return new lowered health points
//     console.log(decrement());
//     // if hp === 0,
//     if (obj.hp === 0) {
//       destroy(obj.name);
//     } else {
//       console.log (`${obj} has ${obj.hp} health points left.`)
//     }
//     // invoke destroy()
//     // console.log(`${obj.name} was removed from the game.`);
//   }
// }