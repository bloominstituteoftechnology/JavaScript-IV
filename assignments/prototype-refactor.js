function GameObject(attribute)  {
    this.createdAt = attribute.createdAt;
    this.dimensions = attribute.dimensions;
  
  }

  class GameObject {
      constructor(attribute) {
        this.createdAt = attribute.createdAt;
        this.dimensions = attribute.dimensions;
      }
      destroy() {
        return `${this.name} was removed froom the game`;
      }
  }
  GameObject.prototype.destroy= function() {
  
    return `${this.name} was removed froom the game`;
  }
  
  function CharacterStats(cattribute) {
  GameObject.call(this,cattribute )
  this.healthPoints = cattribute.healthPoints;
  this.name = cattribute.name;
  
  }
  CharacterStats.prototype = Object.create(GameObject.prototype);
  CharacterStats.prototype.takeDamage = function () {
    return `${this.name} Took damage.`;
  };
  
  function Humanoid(hattribute) {
    CharacterStats.call(this, hattribute);
  
    this.team = hattribute.team;
    this.weapons = hattribute.weapons;
    this.language = hattribute.language;
  } 
  Humanoid.prototype = Object.create(CharacterStats.prototype);
  Humanoid.prototype.greet = function () {
    return `${this.name} Hello how are you ? ${this.language}`
  }
  
  
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
