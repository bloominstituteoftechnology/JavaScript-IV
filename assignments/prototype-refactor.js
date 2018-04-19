// Here we have a functioning solutoin to your challenge from yesterday.
// Today your goal is to refactor all of this code to use ES6 Classes.
// The console.log() statements should still return what is expected of them.

function GameObject(options) {
  this.createdAt = options.createdAt;
  this.dimensions = options.dimensions;
}

GameObject.prototype.destroy = function() {
  return `Object was removed from the game.`;
};

function CharacterStats(characterStatsOptions) {
  GameObject.call(this, characterStatsOptions);
  this.hp = characterStatsOptions.hp;
  this.name = characterStatsOptions.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
};

function Humanoid(humanoidOptions) {
  CharacterStats.call(this, humanoidOptions);
  this.faction = humanoidOptions.faction;// Here we have a functioning solutoin to your challenge from yesterday.
  // Today your goal is to refactor all of this code to use ES6 Classes.
  // The console.log() statements should still return what is expected of them.
  class GameObject {
    constructor(attributes) {
      this.createdAt = attributes.createdAt;
      this.dimensions = attributes.dimensions;
    }
    destroy() {
      return `${this.name} was removed from the game.`
    }
  }
  
  class CharacterStats extends GameObject {
    constructor(attributes) {
      super(attributes);
      this.hp = attributes.hp;
      this.name = attributes.name;
    }
    takeDamage() {
      return `${this.name} took damage.`;
    }
  }
  
  class Humanoid extends CharacterStats {
    constructor(attributes) {
      super(attributes);
      this.faction = attributes.faction;
      this.weapons = attributes.weapons;
      this.language = attributes.language;
    }
    greet() {
      return `${this.name} offers a greeting in ${this.language}`
    }
  }
  
  /*
   * Inheritance chain: Humanoid -> CharacterStats -> GameObject
   * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
   * Instances of CharacterStats should have all of the same properties as GameObject.
   */
  
  //Test you work by uncommenting these 3 objects and the list of console logs below:
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
  
  
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.hp); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.faction); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); //
  
  // Stretch task: 
  // * Create Villian and Hero classes that inherit from the Humanoid class.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!
  
  class Villain extends Humanoid {
    constructor(attributes) {
      super(attributes);
    }
    unspeakableHorror() {
      orchaldaer.hp -= 9;
      orchaldaer.takeDamage();
      return "Take this Orchaldaer!"
    }
  }
  
  class Hero extends Humanoid {
    constructor(attributes) {
      super(attributes);
    }
    healing() {
      orchaldaer.hp += 5;
      return "Not this time genericBadGuy!!"
    };
    heaven() {
      orchaldaer.hp += 25;
      return "The light has touched our hero!"
    };
    fistOfLight() {
      genericBadGuy.hp -= 3;
      return `A huge first of light smacks genericBadGuy in the face!`
    };
  }
  
  
  
  const genericBadGuy = new Villain({
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
  
  const orchaldaer = new Hero({
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
  
  function fight() {
    let chance = 0;
    while (orchaldaer.hp > 0 && genericBadGuy.hp > 0) {
      chance = Math.random();
      console.log(orchaldaer.fistOfLight());
      console.log(orchaldaer.healing());
      console.log(genericBadGuy.unspeakableHorror());
      console.log(orchaldaer.hp)
      if (orchaldaer.hp <= 45 && chance <= 0.1) {
        orchaldaer.heaven();
        console.log("it works");
      }
    }
    if (orchaldaer.hp <= 0) {
      return "The forces of darkness have reigned surpreme again! ";
    } else if (genericBadGuy.hp <= 0) {
      return "The forces of light have reigned surpreme again! ";
    }
  }
  
  fight();
  
  function fight() {
    let chance = 0;
    while (orchaldaer.hp > 0 && genericBadGuy.hp > 0) {
      let prompt = 'p';
      if (prompt === 'p') {
        chance = Math.random();
      }
      console.log(orchaldaer.fistOfLight());
      console.log(orchaldaer.healing());
      console.log(genericBadGuy.unspeakableHorror());
      console.log(orchaldaer.hp)
      if (orchaldaer.hp <= 45 && chance <= 0.1) {
        orchaldaer.heaven();
        console.log("it works");
      }
    }
    if (orchaldaer.hp <= 0) {
      return "The forces of darkness have reigned surpreme again! ";
    } else if (genericBadGuy.hp <= 0) {
      return "The forces of light have reigned surpreme again! ";
    }
  }
  
  console.log(fight());
  this.weapons = humanoidOptions.weapons;
  this.language = humanoidOptions.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
};

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
