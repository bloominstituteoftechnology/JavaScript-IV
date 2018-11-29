/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

function GameObject(GOAttrs){
  this.createdAt = GOAttrs.createdAt;
  this.dimensions = GOAttrs.dimensions;
}

GameObject.prototype.destroy = function(){
  return `${this.name} was removed from the game.`;
}

/*
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(characAttrs){
  GameObject.call(this, characAttrs);
  this.healthPoints = characAttrs.healthPoints;
  this.name = characAttrs.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function(){
  return `${this.name} took damage.`
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(humanAttrs){
  CharacterStats.call(this, humanAttrs);
  this.team = humanAttrs.team;
  this.weapons = humanAttrs.weapons;
  this.language = humanAttrs.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function(){
  return `${this.name} offers a greeting in ${this.language}`;
}
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
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
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

  function Villain(villAttrs){
    Humanoid.call(this, villAttrs);
    this.evilLaugh = villAttrs.evilLaugh;
  }

  Villain.prototype = Object.create(Humanoid.prototype);
  Villain.prototype.hit = function(target){
    const theHit = Math.floor(Math.random()*4);
    target.healthPoints -= theHit;
    if(target.healthPoints <= 0){
      target.destroy();
      return `The great hero ${target.name} has been defeated by ${this.name}, the evil villain ${this.name} says: ${this.evilLaugh}`;
    }else if(this.healthPoints > 0){
      return `${this.name} hits ${target.name} for ${theHit}`;
    }
  }

  function Hero(heroAttrs){
    Humanoid.call(this, heroAttrs);
    this.catchPhrase = heroAttrs.catchPhrase;
  }

  Hero.prototype = Object.create(Humanoid.prototype);
  Hero.prototype.hit = function(target){
    const theHit = Math.floor(Math.random()*4);
    target.healthPoints -= theHit;
    if(target.healthPoints <= 0){
      target.destroy();
      return `The evil villain ${target.name} has been vanquished by ${this.name}, the great hero ${this.name} says: ${this.catchPhrase}`;
    }else if(this.healthPoints > 0){
      return `${this.name} hits ${target.name} for ${theHit}`;
    }else {
      return '';
    }
  }

  const dogman = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Dog Man',
    team: 'Owner',
    weapons: [
      'Bite',
      'Bork',
    ],
    language: 'Borkish',
    catchPhrase: 'Bark, Bark, Bark',
  });

  const catman = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Cat Man',
    team: 'His Own',
    weapons: [
      'Scratch',
      'Hiss',
    ],
    language: 'Meowith',
    evilLaugh: '*Hisses uncontrolablly*',
  });


  const theBtn = document.querySelector('.fight-btn');
  const fighter1Health = document.querySelector('.health1');
  const fighter2Health = document.querySelector('.health2');
  const chat = document.querySelector('.chat');
  const fighter1hn = document.querySelector('.healthnum1');
  const fighter2hn = document.querySelector('.healthnum2');

  theBtn.addEventListener('click', function(){
    if(dogman.healthPoints > 0 && catman.healthPoints > 0){
      if(dogman.healthPoints > 0){
        chatIt(dogman.hit(catman));
      }

      if(catman.healthPoints > 0){
        chatIt(catman.hit(dogman));
      }

      if(dogman.healthPoints < 0){
        dogman.healthPoints = 0;
      }
      if(catman.healthPoints < 0){
        catman.healthPoints = 0;
      }
      //chatIt(`Dog Man HP: ${dogman.healthPoints}  Cat Man HP: ${catman.healthPoints}`);
    }
    fighter1Health.style.width = `${(dogman.healthPoints/10)*100}%`;
    fighter1hn.innerHTML = `${dogman.healthPoints}/10`;
    fighter2Health.style.width = `${(catman.healthPoints/10)*100}%`;
    fighter2hn.innerHTML = `${catman.healthPoints}/10`;
  });

  function chatIt(theChat){
    let chatElem = document.createElement('P');
    let theText = document.createTextNode(theChat);
    chatElem.appendChild(theText);
    chatElem.setAttribute('class', 'chats');
    chat.appendChild(chatElem);
  }