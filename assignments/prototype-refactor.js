/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/ class GameObject{
  constructor(gameObejectAttributes){
    this.createdAt = gameObejectAttributes.createdAt;
    this.dimensions = gameObejectAttributes.dimensions;
  }
  //methods for this ^ constructor 
  destroy() {
    return `${this.name} was removed from the game`; 
  }
}   
  //Build next constructor 
  class CharacterStats{
    constructor(characterStatsAttribute){
    this.hp = characterStatsAttribute.hp;
    this.name = characterStatsAttribute.name; 
    GameObject.call(this, characterStatsAttribute); 
  }

  // Inheritance
  class CharacterStats extends GameObject{
    constructor(characterStatsAttribute)
    super(characterStatsAttribute);
  } 
  
  //methods for this ^ constructor 
  takeDamage() {
    return `${this.name} took damage`; 
  } 
}
  //Test you work by uncommenting these 3 objects and the list of console logs below:
  class Humanoid{
    constructor(humanoidAttributes){  
    this.faction = humanoidAttributes.faction; 
    this.weapons = humanoidAttributes.weapons; 
    this.language = humanoidAttributes.language; 
    CharacterStats.call(this,humanoidAttributes);
  }
  
  Humanoid.prototype = Object.create(CharacterStats.prototype); 
  //Humanoid methods under here. 
  //greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  //^^ building above. 
  greet() {
    return `${this.name} says 'hI' in ${this.language}`; 
  }
}
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
    language: 'Common Tongue',
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
    faction: 'Misiones, Argentina',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
  // new constructor 
  class Villian{
    constructor(villianAttributes){
    Humanoid.call(this, villianAttributes); 
    this.badBreath = villianAttributes.badBreath;
    this.opponentHealth = villianAttributes.opponentHealth;
  }
  //inherit
  Villian.prototype = Object.create(Humanoid.prototype); 
  
  //methods 
    evilLaugh() {
    this.opponentHealth -= 10;
    return `The villian ${this.name} lets out an evil laugh you will fail because I am ${this.name}`;
  }
}
  // const failure = new Villian({
  //   createdAt: new Date(),
  //   dimensions: {
  //     length: 1,
  //     width: 2,
  //     height: 4,
  //   },
  //   hp: 10,
  //   name: 'Failure',
  //   faction: 'Misiones, Argentina',
  //   weapons: [
  //     'doubt','low confidence'
  //   ],
  //   language: 'Marlarkey',
  //   badBreath: 'Janky'
  // });
  
  class Hero{

    constructor(heroAttributes){
    this.goodLooks = heroAttributes.goodlooks;
    this.opponentHealth = heroAttributes.opponentHealth;
  
    Humanoid.call(this, heroAttributes);
  }
  
  Hero.prototype = Object.create(Humanoid.prototype);  
  
  Hero.prototype.studyHard = function () {
    this.opponentHealth -=20;
    console.log(this.opponent); 
    return `The hero ${this.name} studies hard`; 
  }
  Hero.prototype.workHard = function () {
    this.opponentHealth -=50; 
    return `The hero ${this.name} works hard`
  }
  Hero.prototype.flawlessVictory = function() {
    this.opponentHealth-= 30; 
    return `The hero learns to fight using his weapons ${this.weapons}... and defeats the villian`; 
  }
  
  
  const Hunter = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 10,
    name: 'Hunter',
    faction: 'Misiones, Argentina',
    weapons: [
      'determination', 'work ethic', 'great instructors', 'supporters', 'the list goes on and on...seriously' 
    ],
    language: 'JavaScript',
    goodLooks: 'High',
    opponentHealth: 100
  });
  
  failure = new Villian({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 10,
    name: 'Failure',
    faction: 'Misiones, Argentina',
    weapons: [
      'doubt','low confidence'
    ],
    language: 'Guarani',
    badBreath: 'Janky',
    opponentHealth: 100
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
  
  
  console.log("A new battle is about to begin")
  console.log(`The match ${Hunter.name} vs ${failure.name} has begun.`);
  console.log(`The villian has the following weapons ${failure.weapons}`);
  console.log(`The hero has the following weapons ${Hunter.weapons}`); 
  console.log(`The villian has the following extra attribute ${failure.badBreath} breath`); 
  console.log(`The villian speaks the following language ${failure.language}`);
  console.log(`The hero speaks the following language ${Hunter.language}`);
  console.log(failure.evilLaugh());
  console.log(`${Hunter.name} has been reduced, ${Hunter.name} now has ${failure.opponentHealth}`);
  console.log(Hunter.studyHard());
  console.log(`${failure.name} has been reduced, ${failure.name} now has ${failure.opponentHealth}`);
  console.log(Hunter.workHard());
  console.log(`${failure.name} has been reduced, ${failure.name} now has ${Hunter.opponentHealth}`) ;
  console.log(Hunter.flawlessVictory()); 
  console.log(`${failure.name} has been reduced, ${Hunter.opponentHealth} now has ${Hunter.opponentHealth}`);
  console.log(`${Hunter.name} saves the Guarani from conquest!`); 
