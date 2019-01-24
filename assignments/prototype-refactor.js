class GameObject {
    constructor(attrs) {
        this.createdAt = attrs.createdAt;
        this.dimensions = attrs.dimensions;
    }
    destroy (){
        console.log(`${this.name} was removed from the game.`);
    }
}

  class CharacterStats extends GameObject {
    constructor(charAttrs) {
        super(charAttrs);
        this.healthPoints = charAttrs.healthPoints;
        this.name = charAttrs.name;
    }

    takeDamage() {
        console.log(`${this.name} took damage.`);
    }

  }

  class Humanoid extends CharacterStats {
    constructor(humanAttrs) {
        super(humanAttrs);
        this.team = humanAttrs.team;
        this.weapons = humanAttrs.weapons;
        this.language = humanAttrs.language;
    }

    greet() {
        console.log(`${this.name} offers a greeting in ${this.language}.`);
    }

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
