class GameObject {
    constructor(attributes) {
        this.createdAt = attributes.createdAt;
        this.dimensions = attributes.dimensions;
    }
    destroy() {return `${this.name} was removed from the game.`};
}

  class CharacterStats extends GameObject {
      constructor(statsAttributes) {
          super(statsAttributes);
          this.healthPoints = statsAttributes.healthPoints; 
          this.name = statsAttributes.name;
      }
    takeDamage () {return `${this.name} took damage`}
  }
  
  class Humanoid extends CharacterStats {
      constructor(humanoidAttributes) {
        super(humanoidAttributes);
        this.team = humanoidAttributes.team;
        this.weapons = humanoidAttributes.weapons;
        this.language = humanoidAttributes.language;
      }
      greet() {return `${this.name} offers a greeting in ${this.language}`}
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
  
    class Hero extends Humanoid {
        constructor(heroAttributes) {
            super(heroAttributes);
            this.victoryPhrase = `${this.name} wins, and shouted: \'Good shall always prevail!\'`;
        }
        slash() {console.log(`${this.name} slashed and took 35 health points!`)}
    }

    class Villian extends Humanoid {
        constructor(villianAttributes) {
            super(villianAttributes);
        }
        smite() {console.log(`${this.name} smited and took 20 health points!`)}
    }

    const villian1 = new Villian({
        name: 'Voldemort'
    });
    
    const hero1 = new Hero ({
    name: 'Harry Potter'
    });

      
    villian1.smite();
    hero1.slash();
    hero1.slash();
    console.log(hero1.victoryPhrase);
