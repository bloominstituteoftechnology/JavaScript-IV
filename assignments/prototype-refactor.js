/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

//Parent element
function GameObject(attributes) {
    this.createdAt = attributes.createdAt;
    this.dimensions = attributes.dimensions;
    // {
    //   length = attributes.length,
    //   width = attributes.width,
    //   height = attributes.height,
  }
  
  
  GameObject.prototype.destroy = function() {
    return `${this.name} was removed from the game.`;
  }
  
  /*
    === CharacterStats ===
    * healthPoints
    * name
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  //Child Element of GameObject
  function CharacterStats(childAttributes) {
    //Binding of the this keyword to GameObject
    GameObject.call(this, childAttributes);
    this.healthPoints = childAttributes.healthPoints;
    this.name = childAttributes.name;
  }
  
  CharacterStats.prototype = Object.create(GameObject.prototype);
  
  CharacterStats.prototype.takeDamage = function() {
  
    return `${this.name} took damage.`;
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
  //Child element of CharacterStats, granchild of GameObject
  function Humanoid(grandchildAttributes) {
    //Binding of the this keyword to CharacterStats
    CharacterStats.call(this, grandchildAttributes);
    this.team = grandchildAttributes.team;
    this.weapons = grandchildAttributes.weapons;
    this.language = grandchildAttributes.language;
  }
  
  Humanoid.prototype = Object.create(CharacterStats.prototype);
  
  Humanoid.prototype.greet = function() {
    return `${this.name} offers a greeting in ${this.language}`;
  }
  
  Humanoid.prototype.death = function() {
    if (this.healthPoints <= 0) {
      return this.destroy();
    } 
    return (`${this.name} has ${this.healthPoints} health points.`)
  }
   
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  //Hero constructor - inherits from humanoid
  function Hero(heroAttributes) {
    //Binding of the this keyword to Humanoid
    Humanoid.call(this, heroAttributes);
    this.armor = heroAttributes.armor;
  }
  
  Hero.prototype = Object.create(Humanoid.prototype);
  
  Hero.prototype.takeAHit = function(damage) {
    let hitPoint = Math.ceil((Math.random() * 10));
    if (hitPoint < damage) {
      this.healthPoints = this.healthPoints - (damage - hitPoint);
      return this.takeDamage();  
    } else {
      return `${this.name} blocked your attack!`;
    }
    
  }
  
  Hero.prototype.swordStrike = function() {
    let strikePoint = Math.ceil((Math.random() * 10));
    return strikePoint;
  
    }
  
  
  
  
  //Villain constructor - inherits from humanoid
  function Villain(villainAttributes) {
    //Binding of the this keyword to humanoid
    Humanoid.call(this, villainAttributes);
    this.spells = villainAttributes.spells;
  }
  
  Villain.prototype = Object.create(Humanoid.prototype);
  
  Villain.prototype.dodge = function(damage) {
    let hitPoint = Math.round(Math.random());
    if (hitPoint < 1) {
      this.healthPoints = this.healthPoints - damage;
      return this.takeDamage();
      } else {
      return `${this.name} dodged your attack!`;
    }
  }
  
  Villain.prototype.castSpell = function() {
    let spellPoint = Math.round(Math.random());
    if (spellPoint < 1) {
      return 7;
    } else {
      return 0;
    }
  }
  
  
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
  
    const whiteKnight = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 3,
      },
      healthPoints: 16,
      name: 'Lance Cutlass',
      team: 'The Knights of Night',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
      armor: 'Helm and Mantle of Justice'
    });
  
    const wizard = new Villain({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 4,
      },
      healthPoints: 13,
      name: 'Drake Darkfang',
      team: 'The Poisoned Chalice',
      weapons: [
        'Poisoned Lance',
        'Pheonix Tail Wand',
      ],
      language: 'Elvish',
      spells: [
        'Cloak of Shadow',
        'Poison Fog',
      ]
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
  
  
    //Hero and Villain Battle!
  
  
    for (i = 0; i < 3; i++) {
      console.log(whiteKnight.takeAHit(wizard.castSpell()));
      console.log(whiteKnight.death());
      console.log(wizard.dodge(whiteKnight.swordStrike()));
      console.log(wizard.death());
    }
  