/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
    constructor(goAttrib) {
        this.createdAt = goAttrib.createdAt;
        this.dimensions = goAttrib.dimensions;
    }
    destroy() {
        return (`${this.name} was removed from the game`);
    }
}

// function GameObject(goAttrib) {
//     this.createdAt = goAttrib.createdAt;
//     this.dimensions = goAttrib.dimensions;
//   }
//   GameObject.prototype.destroy = function() {
//     return (`${this.name} was removed from the game`);
//   }
  // ==================== GameObject Constructor Above
  
class CharacterStats extends GameObject {
    constructor(csAttrib) {
        super(csAttrib);
        this.hp = csAttrib.hp;
        this.name = csAttrib.name;
    }
    takeDamage() {
        return (`${this.name} took damage`);
    }
    heal(hpHeal) {
        this.hp += hpHeal;
        return (`${this.name} has eaten and gained ${hpHeal} health.`);
    }
}

//   function CharacterStats(csAttrib) {
//     GameObject.call(this, csAttrib);
//     this.hp = csAttrib.hp;
//     this.name = csAttrib.name;
//   }
//   CharacterStats.prototype = Object.create(GameObject.prototype);
  
//   CharacterStats.prototype.takeDamage = function() {
//     return (`${this.name} took damage`);
//   }
//   CharacterStats.prototype.heal = function(hpHeal) {
//     this.hp += hpHeal;
//     return (`${this.name} has eaten and gained ${hpHeal} health.`);
//   }
  // ==================== CharacterStats Constructor Above
  

class Humanoid extends CharacterStats {
    constructor (humAttrib) {
        super(humAttrib);
        this.faction = humAttrib.faction;
        this.weapons = humAttrib.weapons;
        this.language = humAttrib.language;
    }
    greet() {
        return (`${this.name} offers a greeting in ${this.language}`);
    }
}

//   function Humanoid(humAttrib) {
//     CharacterStats.call(this, humAttrib);
//     this.faction = humAttrib.faction;
//     this.weapons = humAttrib.weapons;
//     this.language = humAttrib.language;
//   }
//   Humanoid.prototype = Object.create(CharacterStats.prototype);
  
//   Humanoid.prototype.greet = function() {
//     return (`${this.name} offers a greeting in ${this.language}`);
//   }
  // ====================== Humanoid Constructor Above
  
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
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
    // Stretch task: 
    // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villian and one a hero and fight it out with methods!
  
  
class Villian extends Humanoid {
    constructor(vilAttrib) {
        super(vilAttrib);
        this.damage = vilAttrib.damage;
    }
    weep(superhero) {
        if (superhero.hp > 0 && this.hp > 0) {
            superhero.hp -= this.damage;
            // console.log(superhero.takeDamage());
            console.log (`${this.name} weeps on ${superhero.name} for ${this.damage} damage!!`);
        
            if (superhero.hp <= 0) {
              console.log(superhero.destroy());
            }
        }
        else if (superhero.hp <= 0) {
        }
    }
}


//   function Villian (vilAttrib) {
//     Humanoid.call(this, vilAttrib);
//     this.damage = vilAttrib.damage;
//   }
//   Villian.prototype = Object.create(Humanoid.prototype);
  
//   Villian.prototype.weep = function(superhero) {
    
//     if (superhero.hp > 0 && this.hp > 0) {
//       superhero.hp -= this.damage;
//       // console.log(superhero.takeDamage());
//       console.log (`${this.name} weeps on ${superhero.name} for ${this.damage} damage!!`);
  
//       if (superhero.hp <= 0) {
//         console.log(superhero.destroy());
//       }
//     }
//     else if (superhero.hp <= 0) {
//     }
//   }
  
  
  // ================= Villian Above
  
class Hero extends Humanoid {
    constructor(heroAttrib) {
        super(heroAttrib);
        this.damage = heroAttrib.damage;
    }
    slice(enemy) {
        if (enemy.hp > 0 && this.hp > 0) {   
            enemy.hp -= this.damage; 
            // console.log(enemy.takeDamage());
            console.log (`${this.name} slices ${enemy.name} for ${this.damage} damage!!`);
        
            if (enemy.hp <= 0) {
              console.log(enemy.destroy());
            }
        }
        else if (enemy.hp <= 0) {}
    }
}



//   function Hero (heroAttrib) {
//     Humanoid.call(this, heroAttrib);
//     this.damage = heroAttrib.damage;
//   }
//   Hero.prototype = Object.create(Humanoid.prototype);
  
//   Hero.prototype.slice = function(enemy) {
    
//     if (enemy.hp > 0 && this.hp > 0) {   
//       enemy.hp -= this.damage; 
//       // console.log(enemy.takeDamage());
//       console.log (`${this.name} slices ${enemy.name} for ${this.damage} damage!!`);
  
//       if (enemy.hp <= 0) {
//         console.log(enemy.destroy());
//       }
//     }
//     else if (enemy.hp <= 0) {}
//   }
  
  
  
  // ==================== Hero Above
  
  const gargamel = new Villian({
    createdAt: new Date(),
    dimensions: {
      length: 1.5,
      width: 2.5,
      height: 5,
    },
    hp: 21,
    name: "Gargamel",
    faction: "Smurfville",
    weapons: [
      "Cat",
    ],
    language: "Smurf",
    damage: 9,
  });
  
  
  const jack = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2.2,
      width: 3.7,
      height: 5.3,
    },
    hp: 25,
    name: "Samurai Jack",
    faction: "Scotsman",
    weapons: [
      "Katana",
    ],
    language: "English",
    damage: 5,
  });
  
  
  jack.slice(gargamel);
  gargamel.weep(jack);
  jack.slice(gargamel);
  jack.slice(gargamel);
  gargamel.weep(jack);
  console.log(gargamel.heal(10));
  jack.slice(gargamel);
  jack.slice(gargamel);
  console.log(jack.heal(15));
  gargamel.weep(jack);
  gargamel.weep(jack);
  gargamel.weep(jack);
  
  console.log(gargamel.hp);
  console.log(jack.hp);